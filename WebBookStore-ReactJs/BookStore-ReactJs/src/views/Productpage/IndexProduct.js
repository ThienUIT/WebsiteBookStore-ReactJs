import React, { Component } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchAllBookDataRequest } from 'redux/actions/FetchBookData'
import DemoFooter from 'components/Footers/DemoFooter'
import { actFetchCategoryDataRequest } from 'redux/actions/FetchCategoryData'
import ProductByCategory from './ProductByCategory'

//services
import GetRandomQoutes from 'services/GetRandomQuotes'
import { QOUTES } from 'redux/actiontypes/ActionTypes'

class IndexProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            isReload: false,    
            isFavorite: false
        }
    }
    componentDidMount(){
        this.props.fetchAllBook();
        this.props.fetchCategory();
    }
    render() {
        var { url } = this.props.match
        var data = this.props.AllBook
        var {Category} = this.props
        console.log(data)
        var cate = Category.map((item,index)=>{
            return <p key={index}>{item.categoryID}</p>
        })
        var item = Category.map((category,index)=>{
                    return <ProductByCategory 
                                    key = {category.categoryID}
                                    category = {category.categoryName}
                                    books = {data}
                                    url = {url}
                            />
        })
        var quotes = GetRandomQoutes(QOUTES)
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
                            <p>{quotes.Quote} <br />
                                <strong>{quotes.Author}</strong>
                            </p>
                            <br />
                            <br />
                            </Col>
                        </Row>
                        <hr></hr>
                        {item}
                    </Container>
                </div>
                <DemoFooter />
            </>
        )
    }
}

const mapStateToProps = state =>{
    return {
        AllBook : state.AllBook,
        Category : state.Category
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAllBook : () =>{
            dispatch(actFetchAllBookDataRequest())
        },
        fetchCategory: ()=>{
            dispatch(actFetchCategoryDataRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexProduct)