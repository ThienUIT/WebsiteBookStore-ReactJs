import React, { Component } from 'react'
import { Modal, FormGroup, Input, Button, Form } from 'reactstrap'
import { connect } from 'react-redux'
import { actFetchCategoryDataRequest } from 'redux/actions/FetchCategoryData'
import { actUpdateBookRequest } from 'redux/actions/FetchBookData'

class UpdateBookModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtTitle:'',
            txtAuthor:'',
            txtCategory:'',
            txtPrice:'',
            txtDescribe:'',
            txtNumberOfPages:'',
            txtLinkImage:'',
            txtBookID: 0
        }
    }
    setUpdateBookModal = (params) =>{
        this.props.onSetUpdateModal(params)
    }

    componentDidMount(){
        var {book} = this.props
        this.setState({ 
            txtTitle: book.title,
            txtAuthor: book.name,
            txtCategory: book.categoryName,
            txtPrice: book.price,
            txtDescribe: book.describe,
            txtNumberOfPages: book.numberOfPages,
            txtLinkImage: book.bookImage,
            txtBookID: book.bookID
        })
    }

    onChange = (e) =>{
        var target = e.target;
		var name = target.name;
        var value = target.value;
        console.log(value)
        this.setState({
            [name]: value
        })   
    }

    onUpdateBook = e =>{
        var book = {
            title : this.state.txtTitle,
            authorID : findAuthorId(this.state.txtAuthor,this.props.author),
            categoryID : findCategoryId(this.state.txtCategory,this.props.category),
            price : Number(this.state.txtPrice),
            describe : this.state.txtDescribe,
            numberOfPages : Number(this.state.txtNumberOfPages),
            bookImage : this.state.txtLinkImage,
            bookID: this.state.txtBookID
        }
        this.props.actUpdateBook(book)
    }

    render() {
        var { book } = this.props
        if(book == null){
            return <div></div>;
        }
        return (
            <div>
                <Modal
                    isOpen={ this.props.setModal }
                    toggle={() => this.setUpdateBookModal(false)}
                    modalClassName="modal-register"
                >
                    <div className="modal-header no-border-header text-center">
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.setUpdateBookModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h3 className="modal-title text-center" style = {{fontWeight:"bold"}}>Update</h3>
                    </div>
                    <Form onSubmit = { this.onUpdateBook } className="modal-body">
                        <FormGroup>
                            <label>Title</label>
                            <Input  
                                placeholder="title" 
                                type="text" 
                                value = { this.state.txtTitle }
                                name = "txtTitle"
                                onChange = {this.onChange} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Author</label>
                            <Input 
                                placeholder="author" 
                                type="text" 
                                defaultValue = {this.state.txtAuthor} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Category</label>
                            <Input  
                                placeholder="category" 
                                type="text" 
                                defaultValue = {this.state.txtCategory}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Price</label>
                            <Input  
                                placeholder="Price" 
                                type="text" 
                                value={this.state.txtPrice} 
                                name = "txtPrice"
                                onChange = { this.onChange }
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Describe</label>
                            <Input  
                                placeholder="Describe" 
                                type="textarea" 
                                value={ this.state.txtDescribe } 
                                name = "txtDescribe"
                                onChange = { this.onChange }
                                style = {{height:'92px'}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Number of pages</label>
                            <Input  
                                placeholder="Pages" 
                                type="text" 
                                value = { this.state.txtNumberOfPages }
                                name = "txtNumberOfPages"
                                onChange = { this.onChange } 
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Link Image</label>
                            <Input  
                                placeholder="Link" 
                                type="text" 
                                value = { this.state.txtLinkImage } 
                                name = "txtLinkImage"
                                onChange = { this.onChange }
                            />
                        </FormGroup>
                        <Button block className="btn-round" color="success" type = "submit" >
                            Update
                        </Button>
                        <Button block className="btn-round" color="danger" onClick = { ()=>this.setUpdateBookModal(false)} >
                            Cancel
                        </Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const findAuthorId = (AuthorName,Author) =>{
    var result = -1;
    if(Author.length > 0){
        for(let i = 0; i<Author.length; i++){
            if(Author[i].name === AuthorName){
                result = Author[i].authorID;
                return result
            }
        }
    }
    return result
}

const findCategoryId = (categoryName,Category) =>{
    var result = -1;
    if(Category.length > 0){
        for(let i = 0; i<Category.length; i++){
            if(Category[i].categoryName === categoryName){
                result = Category[i].categoryID;
                return result
            }
        }
    }
    return result
}



const mapDispatchToProps = dispatch => {
    return{
        actUpdateBook: (book) =>{
            dispatch(actUpdateBookRequest(book))
        }
    }
}

export default connect(null,mapDispatchToProps)(UpdateBookModal)
