import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  Nav,
  Container,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actLogout } from "redux/actions/FetchUserData";
import jwt from 'jsonwebtoken'
import { reloadCart } from "redux/actions/Cart";
import { isEmpty } from "lodash";
// helper function
const ShowQuantity = (cart) => {
  var result = 0;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      result += cart[i].quantity;
    }
  }
  return result;
};

const ShowUser = () => {
  var userName = "Guest";
  if (localStorage.length > 0) {
        if(localStorage.getItem('jwtToken') !== null ){
        var data = localStorage.getItem('jwtToken')
        var user = jwt.decode(data).result
        userName = user.displayName;
      }
        return `Hello ${userName}`
  }
  return userName
};



function IndexNavbar(props) {
  var { BookCart } = props;
  var quantity = ShowQuantity(BookCart);
  
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [isChange, setChange] = React.useState(false);
  const [isReload, setReload] = React.useState(false);
  
  const onclicked = () =>{
    props.actLogOut()
    setChange(!isChange);
    window.location.reload(false);
  }

  const updateState = (params) =>{
    if(localStorage.getItem('jwtToken') !== null){
      setReload(params)
    }
  };
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    if(isEmpty(BookCart) && isReload === false ){
      props.actReloadBookCart()
      setReload(true)
    }
    else {
      return;
    }
    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };

   
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link
            className="navbar-brand"
            data-placement="bottom"
            to="/"
            title="Coded by Creative Tim"
          >
            Hazel's Library
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link
                className="nav-link"
                data-placement="bottom"
                to="/product-page"
              >
                <i className="fa fa-book"></i>
                <p>Library</p>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link
                className="nav-link"
                data-placement="bottom"
                to="/login-page"
              >
                <i className="fa fa-user-circle"></i>
                {ShowUser()}
              </Link>
            </NavItem> */}
            <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                    <i className="fa fa-user-circle"></i>
                    {ShowUser()}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                        <Link
                            className="dropdown-item"
                            data-placement="bottom"
                            to="/login-page"
                            style = { ( localStorage.getItem('jwtToken') !== null ) ? { pointerEvents: "none" } : {} }
                        >
                            Login
                        </Link>
                        {LinkToAdminPage()}
                        <DropdownItem
                            onClick={onclicked}
                        >
                            Log out
                        </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <NavItem>
              <Link
                className="nav-link"
                data-placement="bottom"
                to="/register-page"
              >
                <i className="fa fa-key"></i>
                Register
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                data-placement="bottom"
                to="/cart-page"
              >
                <i className="fa fa-shopping-cart"></i>
                Cart&nbsp;
                <Badge color="danger">{quantity}</Badge>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

const LinkToAdminPage = () =>{
    if(localStorage.length > 0){
      if(localStorage.getItem('jwtToken') !== null){
        var data = localStorage.getItem('jwtToken')
        var user = jwt.decode(data).result
        if(user.role === 1){
          return  <Link
                      className="dropdown-item"
                      data-placement="bottom"
                      to="/admin-page"
                  >
                      Admin
                  </Link>
        }
    }
    else return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    BookCart: state.BookCart,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    actLogOut: () =>{
      dispatch(actLogout())
    },
    actReloadBookCart : () =>{
      dispatch(reloadCart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexNavbar);