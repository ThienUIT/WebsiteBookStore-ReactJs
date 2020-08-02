import React, { Component } from 'react'
import { Modal } from 'reactstrap'

export default class SuccessModal extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    setSmallModalOff = (params) =>{
        this.props.SetModalOff(params);
        window.location.reload(false);
    }
    render() {
        return (
            <Modal
                isOpen={this.props.SetModalOn}
                className="modal-sm"
                modalClassName="bd-example-modal-sm"
                toggle={() => this.setSmallModalOff(false)}
            >
                <div className="modal-header">
                    <h4 style={{fontWeight:'bold', color:'green'}}>Success</h4>
                </div>
                <div className="modal-body" style={{textAlign:"center"}}>
                    <i style={{color:'green', fontSize:'50px',width:'auto'}} className="fa fa-check-circle"></i>
                </div>
            </Modal>
        )
    }
}
