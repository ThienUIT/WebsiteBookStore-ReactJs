import React, { Component } from 'react'
import { Modal, FormGroup, Input, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { actAddBookRequest } from 'redux/actions/FetchBookData';
import { AvField } from 'availity-reactstrap-validation'
import AvForm from 'availity-reactstrap-validation/lib/AvForm';

class AddBookModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtTitle : "",
            txtAuthor: "",
            txtCategory: "",
            txtPrice: 0,
            txtDescribe: "",
            txtNumberOfPages: "",
            txtLinkImage:""
        }
    }
    
    //toggle off Add book modal
    setAddBookModal = (setBookModal) =>{
        this.props.onSetModal(setBookModal)
    }

    onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
		    [name]: value,
		});
    };

    //Add book
    onAddBook = (e) =>{
        var book = {
            title : this.state.txtTitle,
            authorID : findAuthorId(document.getElementById('author').value,this.props.Author),
            categoryID : findCategoryId(document.getElementById('category').value,this.props.Category),
            price : Number(this.state.txtPrice),
            describe : this.state.txtDescribe,
            numberOfPages : Number(this.state.txtNumberOfPages),
            bookImage : this.state.txtLinkImage
        }
        this.props.actAddBook(book)
        console.log('success')
    }

    render() {

        const {Author}= this.props
        const {Category} = this.props
        
        const category = Category.map( ( item ) => {
            return <option key={item.categoryID}>{item.categoryName}</option>
        })

        const author = Author.map( ( item ) => {
            return <option key={item.authorID}>{item.name}</option>
        })

        return (
            <div>
                <Modal
                    isOpen={this.props.setModal}
                    toggle={() => this.setAddBookModal(false)}
                    modalClassName="modal-register"
                >
                    <div className="modal-header no-border-header text-center">
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.setAddBookModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h3 className="modal-title text-center" style = {{fontWeight:"bold"}}>Add Book</h3>
                    </div>
                    <AvForm 
                        className="modal-body"
                        onValidSubmit = {this.onAddBook}
                        
                    >
                            <FormGroup>
                                <label>Title</label>
                                <AvField
                                    placeholder="title" 
                                    type="text"
                                    name = "txtTitle"
                                    value = {this.state.txtTitle}
                                    onChange = {this.onChange} 
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Author</label>
                                {/* <Input defaultValue="" placeholder="author" type="text" /> */}
                                <select className="form-control" id="author">
                                    {author}
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label>Category</label>
                                {/* <Input defaultValue="" placeholder="category" type="text" /> */}
                                <select className="form-control" id="category">
                                    {category}
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label>Price</label>
                                <AvField 
                                    placeholder="Price" 
                                    type="text"
                                    name = "txtPrice"
                                    value = { this.state.txtPrice }
                                    onChange = { this.onChange } 
                                    validate = {{number: true,  required : { value: true, errorMessage: "Must be a number"}}}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Describe</label>
                                <AvField  
                                    placeholder="Describe" 
                                    type="text"
                                    name = "txtDescribe"
                                    value = { this.state.txtDescribe }
                                    onChange = { this.onChange } 
                                    validate = {{
                                        required : { value: true, errorMessage: 'please enter describtion' },
                                        minLength: {value: 6, errorMessage: 'Your name must be between 6 and 200 characters'},
                                        maxLength: {value: 200, errorMessage: 'Your name must be between 6 and 200 characters'}
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Number of pages</label>
                                <AvField 
                                    placeholder="Pages" 
                                    type="text"
                                    name = "txtNumberOfPages" 
                                    value = { this.state.txtNumberOfPages }
                                    onChange = { this.onChange }
                                    validate = {{
                                        required : { value: true, errorMessage: "Must be a number"},
                                        number: true
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Link Image</label>
                                <AvField  
                                    placeholder="Link" 
                                    type="text"
                                    name = "txtLinkImage"
                                    value = { this.state.txtLinkImage }
                                    onChange = { this.onChange }
                                    required
                                />
                            </FormGroup>
                            <Button block className="btn-round" color="success" type="submit">
                                Add
                            </Button>
                            <Button block className="btn-round" color="danger" onClick = {()=>this.setAddBookModal(false)}>
                                Cancel
                            </Button>
                    </AvForm>
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

const mapStateToProps = state =>{
    return {
        Category: state.Category,
        Author : state.AllAuthor
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actAddBook: book =>{
            dispatch(actAddBookRequest(book))
        }
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBookModal) 