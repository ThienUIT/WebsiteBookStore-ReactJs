import React, { Component } from 'react'
import { Modal, FormGroup, Input, Button } from 'reactstrap'

export default class UpdateBookModal extends Component {
    setUpdateBookModal = (params) =>{
        this.props.onSetUpdateModal(params)
    }
    render() {
        var { book } = this.props
        if(book == null){
            return <div></div>;
        }
        return (
            <div>
                <Modal
                    isOpen={this.props.setModal}
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
                    <div className="modal-body">
                        <FormGroup>
                            <label>Title</label>
                            <Input defaultValue="" placeholder="title" type="text" value = {book.title} />
                        </FormGroup>
                        <FormGroup>
                            <label>Author</label>
                            <Input defaultValue="" placeholder="author" type="text" value = {book.name} />
                        </FormGroup>
                        <FormGroup>
                            <label>Category</label>
                            <Input defaultValue="" placeholder="category" type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <label>Price</label>
                            <Input defaultValue="" placeholder="Price" type="text" value={book.price} />
                        </FormGroup>
                        <FormGroup>
                            <label>Describe</label>
                            <Input defaultValue="" placeholder="Describe" type="text" value={book.describe} />
                        </FormGroup>
                        <FormGroup>
                            <label>Number of pages</label>
                            <Input defaultValue="" placeholder="Pages" type="text" value = {book.numberOfPages} />
                        </FormGroup>
                        <FormGroup>
                            <label>Link Image</label>
                            <Input defaultValue="" placeholder="Link" type="text" />
                        </FormGroup>
                        <Button block className="btn-round" color="success">
                            Update
                        </Button>
                        <Button block className="btn-round" color="danger" onClick = { ()=>this.setUpdateBookModal(false)} >
                            Cancel
                        </Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
