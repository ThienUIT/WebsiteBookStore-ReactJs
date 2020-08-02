import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import ProfilePageHeader from 'components/Headers/ProfilePageHeader'
import { Container, Button, Nav, NavItem, TabContent,NavLink, Table, Alert, Badge, TabPane } from 'reactstrap';
import { connect } from 'react-redux';
import { actUpdateQuantity, actDeleteFromCart } from 'redux/actions/Cart';
import DemoFooter from 'components/Footers/DemoFooter';
import CallApi from 'Utils/ApiCaller';
import {ReactComponent as Receipt} from '../../assets/img/receipt-solid.svg'
import Order from './Order';
import SuccessModal from '../Modal/SuccessModal';
import { Redirect } from 'react-router';
import UserInfo from './UserInfo';


class IndexCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab : '1',
            quantity:1,
            SetModal : false,
            isRedirect: false
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

    onPay = () =>{
        if(localStorage.getItem('jwtToken') !== null){
            var data = {
                userID : this.props.Auth.user.accountID,
                total : this.ShowTotal(this.props.BookCart),
                status : 1,
                data: this.props.BookCart
            }
            console.log(data.userID)
            CallApi('order/createorder','POST', data).then(res =>{
                this.setState({
                    SetModal: true
                })
                localStorage.removeItem(data.userID)
            })
        }
        else{
            alert('Login to buy');
            this.setState({
                isRedirect: true
            })
        }
    }
    ModalOff = (params) =>{
        this.setState({
            SetModal: params
        })
    }
    render() {
        if(this.state.isRedirect === true){
            return <Redirect to='login-page' />
        }
        var { Auth } = this.props
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
                                    style = {{fontSize:'20px',fontWeight:'bold',cursor:'pointer'}}
                                >
                                    <i className="fa fa-shopping-cart"></i>&nbsp;
                                    Cart
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={this.state.activeTab === "2" ? "active" : ""}
                                    onClick={() => {
                                    toggle("2");
                                    }}
                                    style = {{fontSize:'20px',fontWeight:'bold',cursor:"pointer"}}
                                >
                                    <Receipt style={{width:'20px',height:'20px',verticalAlign:'unset',marginRight:'5px'}} />
                                    Order
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={this.state.activeTab === "3" ? "active" : ""}
                                    onClick={() => {
                                    toggle("3");
                                    }}
                                    style = {{fontSize:'20px',fontWeight:'bold',cursor:"pointer"}}
                                >
                                    <i className="fa fa-user"></i>&nbsp;
                                    Info
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </div>
                    </div>
                    {/* Tab panes */}
                        <TabContent className="following" activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Alert color="danger" style={{textAlign:'center'}}>
                                    <b>You don't have any products yet!!</b>
                                </Alert>
                            </TabPane>    
                            <TabPane className="text-center" tabId="2">
                                    <Table borderless hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>OrderID</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <Order />
                                    </Table>
                            </TabPane>
                            <TabPane className="text-center" tabId="3">
                                    <UserInfo userInfo = {this.props.Auth.user} />
                            </TabPane>
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
                                        style = {{fontSize:'20px',fontWeight:'bold',cursor:"pointer"}}
                                    >
                                        <i className="fa fa-shopping-cart"></i>&nbsp;
                                        Cart
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={this.state.activeTab === "2" ? "active" : ""}
                                        onClick={() => {
                                        toggle("2");
                                        }}
                                        style = {{fontSize:'20px',fontWeight:'bold',cursor:"pointer"}}
                                    >
                                        <Receipt style={{width:'20px',height:'20px',verticalAlign:'unset',marginRight:'5px'}} />
                                        Order
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={this.state.activeTab === "3" ? "active" : ""}
                                        onClick={() => {
                                        toggle("3");
                                        }}
                                        style = {{fontSize:'20px',fontWeight:'bold',cursor:"pointer"}}
                                    >
                                        <i className="fa fa-user"></i>&nbsp;
                                        Info
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                            </div>
                        </div>
                        {/* Tab panes */}
                            <TabContent className="following" activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
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
                                </TabPane>
                                <TabPane className="text-center" tabId="2">
                                    <Table borderless hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>OrderID</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <Order />
                                    </Table>
                                </TabPane>
                                <TabPane className="text-center" tabId="3">
                                    <UserInfo userInfo = {this.props.Auth.user} />
                                </TabPane>
                            </TabContent>
                            <hr></hr>
                            {renderButton(this.state.activeTab,this.ShowTotal(BookCart),this.onPay)}
                        </Container>
                    </div>
                    <SuccessModal SetModalOn = {this.state.SetModal} SetModalOff = {this.ModalOff} />
                    <DemoFooter />
                </>
            )
        }
    }
}

const renderButton = (isCart, total, onPay) => {
    if(isCart === "1"){
        return (<div>
            <Button color="primary" size="lg">
                Total: <Badge id="total" style={{fontSize: "13px"}} color="default"> {total} $</Badge>
            </Button>
            <Button color="danger" size="lg" style={{width:"174.69px",marginLeft:"10px"}} onClick = {onPay} >
                Pay Now $
            </Button>
        </div>)}
    else return <div></div>
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
