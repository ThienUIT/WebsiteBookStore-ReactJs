import React, { Component } from 'react'
import ProfilePageHeader from 'components/Headers/ProfilePageHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import { Container, Row, Col, Nav, NavItem, NavLink, Button, Collapse, Card, CardBody, TabContent, Table, TabPane } from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import AddBookModal from 'views/Modal/AddBookModal'
import { actFetchAuthorDataRequest } from 'redux/actions/FetchAuthorData'
import AuthorLayout from './AuthorLayout'
import UpdateBookModal from 'views/Modal/UpdateBookModal'
import { transpileModule } from 'typescript'
import { actFetchCategoryDataRequest } from 'redux/actions/FetchCategoryData'

class IndexAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab : '1',
            quantity:1,
            isOpen:false,
            setModal:false,
            setUpdateModal : false,
            Book : null
        }
    }
    componentDidMount(){
        this.props.fetchAllBook()
        this.props.fetchAllAuthor()
        this.props.fetchCategory()
    }
    onSetModal = value =>{
        this.setState({
            setModal : value
        })
    }
    onSetUpdateModal = value =>{
        this.setState({
            setUpdateModal : value
        })
    }
    render() {
        var { AllBook, AllAuthor } = this.props
        const toggle = tab =>{
            if(this.state.activeTab !== tab){
                this.setState({
                    activeTab :tab
                })
            }
        }
        const toggle1 = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        const elm =  AllBook.map((book, index)=>{
            return <tbody key={book.bookID} style={{verticalAlign:"middle"}} >
                    <tr>
                    <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th>
                    <td style={{verticalAlign:"middle"}} >
                        <img
                            alt="..."
                            className="img-rounded img-no-padding img-responsive"
                            src={book.bookImage}
                            style={{height:"88.96px",width:"70px"}}
                        />
                    </td>
                    <td style={{verticalAlign:"middle", width:"300px"}}>{book.title}</td>
                    <td style={{verticalAlign:"middle"}}>{book.price} $</td>
                    <td style={{verticalAlign:"middle"}}>
                        <Button 
                            color="danger" 
                            size="sm"
                            // onClick = {()=>this.DeleteFromCart(book.book)}
                        > Delete </Button>&nbsp;
                         <Button 
                            color="success" 
                            size="sm"
                            onClick = { () => setUpdateBookModal(true, book) }
                        > Update </Button>
                    </td>
                    </tr>
                   
                </tbody>
        })
        const setUpdateBookModal = (params, book) =>{
            this.setState({
                Book : book,
                setUpdateModal: params
            },()=>{
                console.log(this.state.Book)
            })
            
        }
        const setAddBookModal = (params) =>{
            this.setState({
                setModal : params
            })
        }
        return (
            <>
                <IndexNavbar />
                <ProfilePageHeader />
                <div className="section profile-content">
                    <Container fluid={true}>
                        <div className="owner">
                            <div className="avatar">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/Admin/admin.jpg")}
                            />
                            </div>
                            <div className="name">
                            <h4 className="title">
                                Admin <br />
                            </h4>
                            </div>
                        </div>
                        <Row xs = "2" >
                            <Col style = {{textAlign:"left"}} >
                                <div>
                                    <h4 style={{marginTop:"0px"}}>
                                        Menu
                                        <Button 
                                            color="neutral" 
                                            className="btn-icon" 
                                            onClick={toggle1}
                                        >
                                            <i className="fa fa-caret-down"></i>
                                        </Button>
                                    </h4>
                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card style={{width: '20rem'}} className="text-center">
                                            <CardBody>
                                                <Button 
                                                    style={{marginBottom:"5px"}} 
                                                    color="primary"
                                                    onClick={() => setAddBookModal(true)}
                                                >
                                                        Add book
                                                </Button>
                                                
                                                <br />
                                                <Button 
                                                    style={{marginBottom:"5px"}} 
                                                    href="/#" 
                                                    color="primary"
                                                >
                                                        Add Author
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col xs="8">
                                <div className="nav-tabs-navigation" style={{textAlign:"left"}}>
                                    <div className="nav-tabs-wrapper">
                                    <Nav role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={this.state.activeTab === "1" ? "active" : ""}
                                                onClick={() => {
                                                toggle("1");
                                                }}
                                                style={{cursor:"pointer",fontWeight:"bold"}}
                                            >
                                                Book
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={this.state.activeTab === "2" ? "active" : ""}
                                                onClick={() => {
                                                toggle("2");
                                                }}
                                                style={{cursor:"pointer",fontWeight:"bold"}}
                                            >
                                                Author
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    </div>
                                </div>
                                <TabContent className="following" activeTab={this.state.activeTab}>
                                    <TabPane tabId="1" id="follows">
                                        <Table borderless hover>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th></th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            {elm}
                                        </Table>    
                                    </TabPane>
                                    <TabPane className="text-center" tabId="2" id="following">
                                    {/* <h3 className="text-muted">Not following anyone yet :(</h3> */}
                                        <Table borderless hover>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th></th>
                                                <th>Name</th>
                                                </tr>
                                            </thead>
                                            <AuthorLayout allAuthor = { AllAuthor } />
                                        </Table>    
                                    </TabPane>                                    
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                    <UpdateBookModal 
                        setModal = {this.state.setUpdateModal} 
                        onSetUpdateModal = {this.onSetUpdateModal}
                        book = {this.state.Book}                   
                    />
                    <AddBookModal setModal = { this.state.setModal } onSetModal = {this.onSetModal} />
                </div>
            </>
        )
    }
}
const mapStateToProps = state =>{
    return {
        AllBook: state.AllBook,
        AllAuthor : state.AllAuthor,
        Category : state.Category,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllBook : () =>{
            dispatch(actFetchAllBookDataRequest())
        },
        fetchAllAuthor : () =>{
            dispatch(actFetchAuthorDataRequest())
        },
        fetchCategory : () =>{
            dispatch(actFetchCategoryDataRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexAdmin);