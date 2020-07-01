import React from "react";
import jwt from 'jsonwebtoken'
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
Col,
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { actLogin } from "redux/actions/FetchUserData";

	// core components

class SectionLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		txtName: "",
		txtPassword: "",
		isRedirect: false,
		};
	}
	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
		[name]: value,
		});
	};
	onHandleSubmit = (e) => {
		e.preventDefault();
		const user = {
			username: this.state.txtName,
			password: this.state.txtPassword
		}
		this.props.actLogin(user)
		this.setState({
			isRedirect: true
		})
	};
	
	render() {
		var { txtName, txtPassword, isRedirect } = this.state;
		if(isRedirect){
			if(localStorage.length > 0){
				var token = localStorage.getItem('jwtToken')
				var user = jwt.decode(token)
				if(user.result.userName === 'admin')
				{
					return <Redirect to = 'admin-page'></Redirect>
				}
				else return <Redirect to = 'product-page'></Redirect>
			}
		}
		return (
		<>
			<IndexNavbar />
			<div
			className="section section-image section-login"
			style={{
				backgroundImage:
				"url(" + require("assets/img/login-image.jpg") + ")",
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
						onClick={(e) => e.preventDefault()}
						>
						<i className="fa fa-facebook-square" />
						</Button>
						<Button
						className="btn-neutral btn-just-icon mt-0 ml-1"
						color="google"
						href="#pablo"
						onClick={(e) => e.preventDefault()}
						>
						<i className="fa fa-google-plus" />
						</Button>
						<Button
						className="btn-neutral btn-just-icon mt-0 ml-1"
						color="twitter"
						href="#pablo"
						onClick={(e) => e.preventDefault()}
						>
						<i className="fa fa-twitter" />
						</Button>
					</div>
					<Form
						onSubmit={this.onHandleSubmit}
						className="register-form"
					>
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
							value={txtName}
							onChange={this.onChange}
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
							value={txtPassword}
							onChange={this.onChange}
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
						onClick={(e) => e.preventDefault()}
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
		);
	}
}


	const mapStateToProps = (state) => {
		return {
			Auth: state.Auth
		};
	};

	const mapDispatchToProps = dispatch =>{
		return {
			actLogin : (user) =>{
				dispatch(actLogin(user))
			}
		}
	}

	export default connect(mapStateToProps, mapDispatchToProps)(SectionLogin);
