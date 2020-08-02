import React, { Component } from 'react'
import { Table, Modal } from 'reactstrap'
import CallApi from 'Utils/ApiCaller'

export default class OrderDetailModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            orderDetail:[]
        }
    }
    componentDidMount(){
        var id = this.props.orderID
        CallApi(`orderitem/${id}`,'GET').then(res=>{
            if(res.data.success === 1)
                this.setState({
                    orderDetail: res.data.data
                })
        })
    }
    setModalOff = (setModal) =>{
            this.props.setOffDetail(setModal)
    }
    render() {
        var item = this.state.orderDetail.map((elm,index)=>{
            return( 
                <tr key = {index}>
                    <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th> 
                    <td style={{verticalAlign:"middle"}} >
                        <img
                            alt="..."
                            className="img-rounded img-no-padding img-responsive"
                            src={elm.bookImage}
                            style={{height:"88.96px",width:"70px"}}
                        />
                    </td>
                    <td style={{verticalAlign:"middle"}}>
                            {elm.title}
                    </td>
                    <td style={{verticalAlign:"middle"}}>
                            {elm.price}$
                    </td>
                    <td style={{verticalAlign:"middle"}}>
                            {elm.quantity}
                    </td>
                    <td style={{verticalAlign:"middle"}}>
                            {elm.total}$
                    </td>
                </tr>
            )
        })
        return (
            <Modal
                isOpen={this.props.setOpenDetail}
                className="modal-lg"
                modalClassName="bd-example-modal-sm"
                toggle={() => this.setModalOff(false)}
            >
                <div className="modal-header">
                 <h4 style={{fontWeight:'bold', color:'green'}}>728{this.props.orderID}</h4>
                </div>
                <div className="modal-body">
                    <Table borderless hover style={{textAlign:'center'}}>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody >
                            {item}
                        </tbody>
                    </Table>    
                </div>
            </Modal>
        )
    }
}
