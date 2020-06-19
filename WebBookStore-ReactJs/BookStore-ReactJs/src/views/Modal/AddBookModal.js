import React, { Component } from 'react'
import { Modal, FormGroup, Input, Button } from 'reactstrap';

export default class AddBookModal extends Component {
    setAddBookModal = (setBookModal) =>{
        this.props.onSetModal(setBookModal)
    }
    render() {
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
                    <div className="modal-body">
                        <FormGroup>
                            <label>Title</label>
                            <Input defaultValue="" placeholder="title" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Author</label>
                            <Input defaultValue="" placeholder="author" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Category</label>
                            <Input defaultValue="" placeholder="category" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Price</label>
                            <Input defaultValue="" placeholder="Price" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Describe</label>
                            <Input defaultValue="" placeholder="Describe" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Number of pages</label>
                            <Input defaultValue="" placeholder="Pages" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <label>Link Image</label>
                            <Input defaultValue="" placeholder="Link" type="text" />
                        </FormGroup>
                        <Button block className="btn-round" color="success">
                            Add
                        </Button>
                        <Button block className="btn-round" color="danger">
                            Cancel
                        </Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
