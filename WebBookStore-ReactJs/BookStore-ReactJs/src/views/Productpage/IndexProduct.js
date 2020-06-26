import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Card,
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import { actAddToCart } from 'redux/actions/Cart'
import DemoFooter from 'components/Footers/DemoFooter'
import { createRegularExpressionLiteral } from 'typescript'


class IndexProduct extends Component {
    constructor(props){
        super(props)
        this.state = {    
            Quotes:[
                {
                    id:1,
                    Quote: "“Many people, myself among them, feel better at the mere sight of a book.”",
                    Author: "- Jane Smiley -"
                },
                {
                    id:2,
                    Quote: "“′Classic′ – a book which people praise and don’t read.”",
                    Author: "- Mark Twain -"
                },
                {
                    id:3,
                    Quote: "“Sleep is good, he said, and books are better.”",
                    Author: "- George R.R. Martin -"
                },
                {
                    id:4,
                    Quote: "“The library is inhabited by spirits that come out of the pages at night.”",
                    Author: "- Isabel Allende -"
                },
                {
                    id:5,
                    Quote: "“Rainy days should be spent at home with a cup of tea and a good book.”",
                    Author: "- Bill Patterson -"
                }
            ]
        }
    }
    componentDidMount(){
        this.props.fetchAllBook()
    }


    addToCart = book =>{
        this.props.onAddToCart(book)
    }
    render() {
        var data = this.props.AllBook
        const elm = data.map((book,index)=>{
            return <Col key={book.bookID}>
                        <Card style={{width: '20rem'}}>
                            <CardImg 
                                top 
                                src={book.bookImage} 
                                alt="..."/>
                            <CardBody style={{height:"296px"}}>
                                <CardTitle><h3>{book.title}</h3></CardTitle>
                                <br></br>
                                <CardText className="card-text">Author: {book.name}</CardText>
                                <CardText className="card-text">Price: {book.price} $</CardText>
                                <CardText></CardText>
                                <Button onClick = {() => this.addToCart(book)} color="success" className="btn-icon btn-round">
                                    <i className="fa fa-shopping-cart"></i>
                                </Button>
                            </CardBody>
                        </Card>
                </Col>
        })
        return (
            <>
                <IndexNavbar />
                <LandingPageHeader />
                <div className="section profile-content" >
                    <Container>
                    <div className="owner">
                        <div className="avatar">
                        <img
                            alt="library"
                            className="img-rounded img-no-padding img-responsive"
                            src={require("assets/img/library.png")}
                        />
                        </div>
                        <div className="name">
                        <h3 className="title">
                            Book Shelf <br />
                        </h3>
                        </div>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                        {RandomQoutes(this.state.Quotes)}
                        <br />
                        </Col>
                    </Row>
                    <UncontrolledDropdown className="btn-group">
                        <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="secondary"
                        data-toggle="dropdown"
                        type="button"
                        >
                        Category
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Another action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                            Separated link
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <hr></hr>
                    <Row>
                       {elm}
                    </Row>
                    </Container>
                </div>
                <DemoFooter />
            </>
        )
    }
}

const RandomQoutes = (store) =>{
    var result = null;
    if(store.length > 0){
        var rand = Math.floor((Math.random() * store.length) + 0);
        result = store[rand];
    }
    return  <p key={result.id}>
                {result.Quote}<br />
                <strong> {result.Author} </strong>
            </p>
}

const mapStateToProps = state =>{
    return {
        AllBook : state.AllBook
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllBook : () =>{
            dispatch(actFetchAllBookDataRequest())
        },
        onAddToCart: (book)=>{
            dispatch(actAddToCart(book,1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)
