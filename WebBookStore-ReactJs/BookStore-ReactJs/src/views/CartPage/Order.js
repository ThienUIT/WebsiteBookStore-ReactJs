import React, { Component } from 'react'
import { Button, Badge } from 'reactstrap'
import CallApi from 'Utils/ApiCaller';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            order:[]
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
    render() {
        var  orderItem = this.state.order
        const item = orderItem.map((elm, index)=>{
            return  <tr key={elm.orderID}>
                        <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th> 
                        <td style={{verticalAlign:"middle",fontWeight:'bold',cursor:'pointer',color:'blue'}}>728{elm.orderID}</td>
                        <td style={{verticalAlign:"middle"}}>
                            {elm.totalMoney} $
                        </td>
                        <td><Badge color="success">Paid</Badge></td>
                    </tr>
        })
        return (
            <tbody>
                {item}
            </tbody>
        )
    }
}

const mapStateToProps = state =>{
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps,null)(Order)