import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import ProfilePageHeader from 'components/Headers/ProfilePageHeader'
import { Container, Button, Nav, NavItem, TabContent,NavLink, Table, Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { actUpdateQuantity } from 'redux/actions/Cart';
import { actDeleteFromCart } from 'redux/actions/Cart';
import DemoFooter from 'components/Footers/DemoFooter';


class IndexCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab : '1',
            quantity:1
        }
    }
    UpdateQuantity = (quantity,book) =>{
        if(quantity > 0){
            this.setState({
                quantity : quantity
            })
            this.props.onUpdateQuantity(quantity, book)
        }
    }
    ShowSubTotal = (quantity,price) =>{
        return quantity * price
    }
    ShowTotal = (BookCart) =>{
        var total = 0
        if(BookCart.length > 0){
            for(let i = 0; i<BookCart.length; i++){
                total += BookCart[i].quantity * BookCart[i].book.price
            }
        }
        return total
    }
    DeleteFromCart = (book) => {
        this.props.onDelete(book);
    }
    render() {
        var { Auth } = this.props
        console.log(Auth)
        const toggle = tab =>{
            if(this.state.activeTab !== tab){
                this.setState({
                    activeTab :tab
                })
            }
        }
        var BookCart = this.props.BookCart
        if(BookCart.length === 0){
            return (
                <>
                <IndexNavbar />
                <ProfilePageHeader />
                <div className="section profile-content">
                    <Container>
                    <div className="owner">
                        <div className="avatar">
                        <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/User.png")}
                        />
                        </div>
                        <div className="name">
                        <h4 className="title">
                            { Auth.isAuthenticate ? Auth.user.displayName : "Guest"} <br />
                        </h4>
                        </div>
                    </div>
                    <br />
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                        <Nav role="tablist" tabs>
                            <NavItem>
                            <NavLink
                                className={this.state.activeTab === "1" ? "active" : ""}
                                onClick={() => {
                                toggle("1");
                                }}
                                style = {{fontSize:'20px',fontWeight:'bold'}}
                            >
                                <i className="fa fa-shopping-cart"></i>&nbsp;
                                Cart
                            </NavLink>
                            </NavItem>
                        </Nav>
                        </div>
                    </div>
                    {/* Tab panes */}
                        <TabContent className="following" activeTab={this.state.activeTab}>
                                <Alert color="danger" style={{textAlign:'center'}}>
                                    <b>You don't have any products yet!!</b>
                                </Alert>
                        </TabContent>
                    </Container>
                </div>
                <DemoFooter />
            </>
            )
        }
        else{
           const elm =  BookCart.map((book, index)=>{
                return <tbody key={book.book.bookID} style={{verticalAlign:"middle"}} >
                        <tr>
                        <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th>
                        <td style={{verticalAlign:"middle"}} >
                            <img
                                alt="..."
                                className="img-rounded img-no-padding img-responsive"
                                src={book.book.bookImage}
                            />
                        </td>
                        <td style={{verticalAlign:"middle"}}>{book.book.title}</td>
                        <td style={{verticalAlign:"middle"}}>{ this.ShowSubTotal(book.book.price, book.quantity) } $</td>
                        <td style={{verticalAlign:"middle"}}>
                            <Button 
                                className="btn-round btn-icon"  
                                size="sm" 
                                onClick = { ()=>this.UpdateQuantity( book.quantity + 1, book.book ) }
                            >
                                <i className="fa fa-plus-circle" />
                            </Button>&nbsp;
                            {book.quantity} &nbsp;
                            <Button 
                                className="btn-round btn-icon"  
                                size="sm"
                                onClick= { ()=>this.UpdateQuantity( book.quantity - 1, book.book ) }
                            >
                                <i className="fa fa-minus-circle" />
                            </Button>
                        </td>
                        <td style={{verticalAlign:"middle"}}>
                            <Button 
                                color="danger" 
                                size="sm"
                                onClick = {()=>this.DeleteFromCart(book.book)}
                            > Xóa </Button>
                        </td>
                        </tr>
                    </tbody>
            })
            return (
                <>
                    <IndexNavbar />
                    <ProfilePageHeader />
                    <div className="section profile-content">
                        <Container>
                        <div className="owner">
                            <div className="avatar">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/User.png")}
                            />
                            </div>
                            <div className="name">
                            <h4 className="title">
                                Administrator <br />
                            </h4>
                            </div>
                        </div>
                        <br />
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                            <Nav role="tablist" tabs>
                                <NavItem>
                                <NavLink
                                    className={this.state.activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                    toggle("1");
                                    }}
                                    style = {{fontSize:'20px',fontWeight:'bold'}}
                                >
                                    <i className="fa fa-shopping-cart"></i>&nbsp;
                                    Cart
                                </NavLink>
                                </NavItem>
                            </Nav>
                            </div>
                        </div>
                        {/* Tab panes */}
                            <TabContent className="following" activeTab={this.state.activeTab}>
                                <Table borderless hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    {elm}
                                </Table>
                            </TabContent>
                            <hr></hr>
                            <Button color="primary">
                                Total <h3><Badge color="default">{this.ShowTotal(BookCart)} $</Badge></h3>
                            </Button>
                        </Container>
                    </div>
                    <DemoFooter />
                </>
            )
        }
    }
}

const mapStateToProps = state =>{
    return {
        BookCart: state.BookCart,
        Auth: state.Auth
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onUpdateQuantity: (quantity, book) =>{
            return dispatch(actUpdateQuantity(quantity, book));
        },
        onDelete:(book) =>{
            return dispatch(actDeleteFromCart(book))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexCart)
