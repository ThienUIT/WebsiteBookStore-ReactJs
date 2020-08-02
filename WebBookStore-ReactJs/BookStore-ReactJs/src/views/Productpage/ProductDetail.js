import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import ProductHeader from 'components/Headers/ProductHeader'
import CallApi from 'Utils/ApiCaller'
import { actAddToCart } from 'redux/actions/Cart'
import { connect } from 'react-redux'
class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            bookInfo:{}
        }
    }
    componentDidMount(){
        var id = this.props.match.params.id
        CallApi(`allbook/bookdetail/${id}`).then(res=>{
            this.setState({
                bookInfo: res.data.data[0]
            })
        })
    }
    addToCart = (book) =>{
        this.props.onAddToCart(book,1)
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <>
                <IndexNavbar />
                <ProductHeader />
                <div style={{background:'#FBFCFC'}}>
                    <Container>
                        <Row>
                            <Col 
                                className="owner" 
                                style={
                                    {   
                                        // borderBottom:'1px solid #cec7c7',
                                        // borderRight:'1px solid #cec7c7',
                                        padding:'0px 0px 10px 10px',
                                        margin:'0px 0px 20px 20px',
                                        background:'#f3f3f3'
                                    }
                                } 
                            >
                                <div className="avatar">
                                    <img
                                        alt="library"
                                        className="img-rounded img-no-padding img-responsive"
                                        src={this.state.bookInfo.bookImage}
                                        style={{width:'150px',height:'250px',boxShadow:'5px 5px 5px'}}
                                    />
                                    </div>
                                    <div className="name">
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:'540px',height:'270px'}}>
                                    <p className="h2 title">Title: {this.state.bookInfo.title}</p>
                                    <hr></hr>
                                    <p className="h6" style={{fontSize:'15px'}}>{this.state.bookInfo.name}</p>
                                    <p className="h6" style={{fontSize:'15px'}}>{this.state.bookInfo.price}$</p>
                                    <Button onClick = {() => this.addToCart(this.state.bookInfo)} color="success" className="btn-icon btn-round">
                                        <i className="fa fa-shopping-cart"></i>
                                    </Button>&nbsp;
                                    <Button color="info" className="btn-icon btn-round">
                                        <i className="fa fa-heart" style={(this.state.isFavorite)?{color:'red'}:{color:''}} ></i>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:'center'}}>
                                <p 
                                    className="h6" 
                                    style={
                                        {
                                            fontSize:'20px',
                                            textDecoration:'underline',
                                            fontWeight:'bold'
                                        }
                                    }
                                >
                                    Info:</p>
                                <p className="h6">Category: {this.state.bookInfo.categoryName}</p>
                                <p className="h6">Pages: {this.state.bookInfo.numberOfPages}</p>
                            </Col>
                            <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:'center'}}>
                                <p 
                                    className="h6 title" 
                                    style={
                                        {
                                            fontSize:'20px',
                                            textDecoration:'underline'
                                        }
                                    }
                                >
                                    Describe:</p>
                                <p className="h6">{this.state.bookInfo.describe}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DemoFooter />
            </>
        )
    }
}



const mapDispatchToProps = dispatch =>{
    return {
        onAddToCart: book =>{
            dispatch(actAddToCart(book,1))
        } 
    }
}

export default connect (null, mapDispatchToProps) (ProductDetail)