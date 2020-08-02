import React, { Component } from 'react'
import { Button, Badge } from 'reactstrap'
import CallApi from 'Utils/ApiCaller';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import OrderDetailModal from 'views/Modal/OrderDetailModal';

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            order:[],
            setOpenDetailModal : false,
            orderID : ''
        }
    }
    componentDidMount(){
        let userID = this.props.Auth.user.accountID;
        if(userID){
            CallApi(`order/${userID}`, 'GET').then(res => {
                if(res.data.success === 1){
                    this.setState({
                        order: res.data.data
                    })
                }
            })
        }
    }
    setDetail = (setDetail, orderid) => {
        console.log(orderid)
        this.setState({
            setOpenDetailModal: setDetail,
            orderID: orderid
        })
    }
    setOffDetailModal = (params) => {
        this.setState({
            setOpenDetailModal: params
        })
    }
    render() {
        var  orderItem = this.state.order
        var detailParams = {
            isOpen: this.state.setOpenDetailModal,
            orderID: this.state.orderID,
            setOffDetailModal: this.setOffDetailModal,
        }
        const item = orderItem.map((elm, index)=>{
            return  <tr key={elm.orderID}>
                        <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th> 
                        <td 
                            style={{verticalAlign:"middle",fontWeight:'bold',cursor:'pointer',color:'blue'}}
                            onClick={() =>this.setDetail(true, elm.orderID)}
                        >
                                728{elm.orderID}
                        </td>
                        <td style={{verticalAlign:"middle"}}>
                            {elm.totalMoney} $
                        </td>
                        <td><Badge color="success">Paid</Badge></td>
                    </tr>
        })
        return (
            <React.Fragment >
                <tbody>
                    {item}
                </tbody>
                {showOrderDetailModal(detailParams)}
            </React.Fragment>
        )
    }
}

const showOrderDetailModal = (data ) =>{
    if(data.isOpen){
        return <OrderDetailModal 
                    setOpenDetail = {data.isOpen}
                    setOffDetail = {data.setOffDetailModal}
                    orderID = {data.orderID} 
                />
    }
}

const mapStateToProps = state =>{
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps,null)(Order)