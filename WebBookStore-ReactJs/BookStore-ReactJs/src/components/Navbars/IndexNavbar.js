/*!

    =========================================================
    * Paper Kit React - v1.0.0
    =========================================================

    * Product Page: https://www.creative-tim.com/product/paper-kit-react

    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

    * Coded by Creative Tim

    =========================================================

    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    */
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
import {ReactComponent as LoginIcon} from '../../assets/img/login.svg'
import {ReactComponent as LogoutIcon} from '../../assets/img/logout.svg'
import {ReactComponent as HeartIcon} from '../../assets/img/heart.svg'
import {ReactComponent as AdminIcon} from '../../assets/img/admin.svg'
import {ReactComponent as UserIcon} from '../../assets/img/user.svg'
import SearchBar from "components/SearchBar/SearchBar";
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
        <SearchBar />
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
                            <LoginIcon style={{width:'25px', height:'25px'}} />&nbsp;
                            Login
                        </Link>
                        {LinkToAdminPage()}
                        <DropdownItem
                            onClick={onclicked}
                        >
                            <LogoutIcon style={{width:'25px', height:'25px'}} />&nbsp;
                            Log out
                        </DropdownItem>
                        <DropdownItem >
                            <HeartIcon style={{width:'25px', height:'25px'}} />&nbsp;
                            Favorite list
                        </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <NavItem>
              <Link
                className="nav-link"
                data-placement="bottom"
                to="/register-page"
                style = { ( localStorage.getItem('jwtToken') !== null ) ? { pointerEvents: "none" } : {} }
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
                      <AdminIcon style={{width:'25px', height:'25px'}} />&nbsp;
                      Admin
                  </Link>
        }
        else return <Link
                        className="dropdown-item"
                        data-placement="bottom"
                        to=""
                    >
                        <UserIcon style={{width:'25px', height:'25px'}} />&nbsp;
                        User info
                    </Link>
    }
    else return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    BookCart: state.BookCart,
    Favorite: state.Favorite
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
