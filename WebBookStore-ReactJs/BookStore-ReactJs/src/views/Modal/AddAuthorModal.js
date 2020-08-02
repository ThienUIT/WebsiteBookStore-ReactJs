import React, { Component } from 'react'
import { AvField } from 'availity-reactstrap-validation'
import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import { FormGroup, Modal, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { actAddAuthorRequest } from 'redux/actions/FetchAuthorData';

 class AddAuthorModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtAuthorName: '',
            txtAuthorImage:'',
        }
    }
    onChange = e =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        });
    }

    onAddAuthor = e =>{
        var author = {
            name : this.state.txtAuthorName,
            authorImage : this.state.txtAuthorImage
        };
        this.props.actAddAuthor(author);
        console.log('success');
    }

    onSetAuthorModal = (setAuthorModal) =>{
        this.props.onSetAuthorModal(setAuthorModal)
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen = {this.props.setAuthorModal}
                    toggle={() => this.onSetAuthorModal(false)}
                    modalClassName="modal-register"
                >
                    <AvForm 
                        className="modal-body"
                        onValidSubmit = {this.onAddAuthor}
                        
                    >
                        <FormGroup>
                            <label>Author name</label>
                            <AvField
                                placeholder="Name" 
                                type="text"
                                name = "txtAuthorName"
                                value = {this.state.txtAuthorName}
                                onChange = {this.onChange} 
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Author Image</label>
                            <AvField
                                placeholder="Link Image" 
                                type="text"
                                name = "txtAuthorImage"
                                value = {this.state.txtAuthorImage}
                                onChange = {this.onChange} 
                                required
                            />
                        </FormGroup>
                        <Button block className="btn-round" color="success" type="submit">
                                Add
                        </Button>
                        <Button block className="btn-round" color="danger" onClick = {() => this.onSetAuthorModal(false)}>
                            Cancel
                        </Button>
                    </AvForm>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actAddAuthor : author =>{
            dispatch(actAddAuthorRequest(author))
        }
    }
}

export default connect (null, mapDispatchToProps) (AddAuthorModal)
