import React, { Component } from 'react'
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import CallApi from 'Utils/ApiCaller';
import CheckPass from 'services/CheckPass';
import SuccessModal from 'views/Modal/SuccessModal';

class UserInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtPassword:'',
            txtConfirmPassword: '',
            successModal: false
        }
    }

    onChange = e =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }

    onSubmit = e =>{
        e.preventDefault();
        var user = {
            passWord: this.state.txtPassword,
            userName: this.props.userInfo.userName
        }
        CheckPass(this.state.txtPassword, this.state.txtConfirmPassword, results =>{
            if(results === true){
                CallApi('users/updateuser','PATCH',user).then(res=>{
                    console.log(res.data);
                    this.setState({
                        successModal: true
                    });
                });
            }
            else alert('password and confirm password incorrect')
        })
    }

    ModalOff = (params) =>{
        this.setState({
            successModal: params
        })
    }

    render() {
        var { userInfo } = this.props
        return (
            <form style={{textAlign:'left'}} onSubmit = {this.onSubmit}>
                <div className="form-row" >
                    <FormGroup className="col-md-6">
                        <Label >Username</Label>
                        <Input 
                            type="text" 
                            placeholder="UserName" 
                            value = {userInfo.userName}
                            readOnly = {true}
                        />
                    </FormGroup>
                    <FormGroup className="col-md-3">
                        <Label for="inputPassword4">Password</Label>
                        <Input 
                            type="password"  
                            id="inputPassword" 
                            placeholder="Password"
                            value = {this.state.txtPassword}
                            name = "txtPassword"
                            onChange = {this.onChange} 
                        />
                    </FormGroup>
                    <FormGroup className="col-md-3">
                        <Label for="inputPassword4">Confirm-Password</Label>
                        <Input 
                            type="password"  
                            id="confirmPassword" 
                            placeholder="Password" 
                            value = {this.state.txtConfirmPassword}
                            name = "txtConfirmPassword"
                            onChange = {this.onChange} 
                        />
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>Display name</Label>
                        <Input type="text" placeholder="Văn tèo" value = { userInfo.displayName } readOnly = {true}/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label >Phone number</Label>
                        <Input type="text" value = { userInfo.phoneNumber } readOnly = {true}/>
                    </FormGroup>
                </div>
                <Button type="submit" color="primary">Save</Button>
                <SuccessModal SetModalOn = {this.state.successModal} SetModalOff = {this.ModalOff} />
            </form>

        )
    }
}


export default UserInfo
