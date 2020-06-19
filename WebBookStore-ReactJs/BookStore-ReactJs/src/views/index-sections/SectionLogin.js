/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { connect } from "react-redux";
import CallApi from "Utils/ApiCaller";
import { Redirect } from "react-router";

// core components

class SectionLogin extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			txtName:'',
			txtPassword:'',
			isRedirect: false
		}
	}
	onChange = e =>{
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	}
	onHandleSubmit = e =>{
		e.preventDefault();
		CallApi('users/login', 'POST',{
			username: this.state.txtName,
			password: this.state.txtPassword
		}).then(res =>{
			if(res.data.message === "login Successfully"){
				this.setState({
					isRedirect:true
				})
			}
		})
		
	
	}
	render() {
		var { txtName, txtPassword } = this.state
		if (this.state.isRedirect === true){
			return <Redirect to="/admin-page" />
		}
		return (
		<>
			<IndexNavbar />
			<div
			className="section section-image section-login"
			style={{
				backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
			}}
			>
			<Container>
				<Row>
				<Col className="mx-auto" lg="4" md="6">
					<Card className="card-register">
					<h3 className="title mx-auto">Welcome</h3>
					<div className="social-line text-center">
						<Button
						className="btn-neutral btn-just-icon mt-0"
						color="facebook"
						href="#pablo"
						onClick={e => e.preventDefault()}
						>
						<i className="fa fa-facebook-square" />
						</Button>
						<Button
						className="btn-neutral btn-just-icon mt-0 ml-1"
						color="google"
						href="#pablo"
						onClick={e => e.preventDefault()}
						>
						<i className="fa fa-google-plus" />
						</Button>
						<Button
						className="btn-neutral btn-just-icon mt-0 ml-1"
						color="twitter"
						href="#pablo"
						onClick={e => e.preventDefault()}
						>
						<i className="fa fa-twitter" />
						</Button>
					</div>
					<Form onSubmit = {this.onHandleSubmit} className="register-form">
						<label>Username</label>
						<InputGroup className="form-group-no-border">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
							<i className="fa fa-user" />
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							placeholder="username" 
							type="text"
							name="txtName"
							value={ txtName }
						    onChange = { this.onChange }
						/>
						</InputGroup>
						<label>Password</label>
						<InputGroup className="form-group-no-border">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
							<i className="nc-icon nc-key-25" />
							</InputGroupText>
						</InputGroupAddon>
						<Input 
							placeholder="Password" 
							type="password"
							name="txtPassword"
							value={ txtPassword }
							onChange= { this.onChange } 
						/>
						</InputGroup>
						<Button
						block
						className="btn-round"
						color="danger"
						type="submit"
						>
						Login
						</Button>
					</Form>
					<div className="forgot">
						<Button
						className="btn-link"
						color="danger"
						href="#pablo"
						onClick={e => e.preventDefault()}
						>
						Forgot password?
						</Button>
					</div>
					</Card>
				</Col>
				</Row>
			</Container>
			<div className="footer register-footer text-center">
				<h6>
				© {new Date().getFullYear()}, made with{" "}
				<i className="fa fa-heart heart" /> by Hazel
				</h6>
			</div>
			</div>{" "}
		</>
		)
	};
}

const mapStateToProps = state =>{
	return {
		user: state.User
	}
}

export default connect(mapStateToProps,null)(SectionLogin);