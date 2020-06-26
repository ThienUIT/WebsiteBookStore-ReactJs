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
  Container,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import AvForm from "availity-reactstrap-validation/lib/AvForm";
import AvField from "availity-reactstrap-validation/lib/AvField";
import CallApi from "Utils/ApiCaller";
import { connect } from "react-redux";
import { actFetchUserDataRequest } from "redux/actions/FetchUserData";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtPassword_confirmation: "",
      txtDisplayName: "",
      txtPhoneNumber: "01236789",
      txtRole: 0,
      isPasswordShow : false
    }
  }
  componentWillMount(){
    this.props.actFetchUser();
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onTogglePasswordVisibility = () =>{
    const { isPasswordShow } = this.state;
    this.setState({
        isPasswordShow : !isPasswordShow
    });
  }


  onRegister = (e) => {
    e.persist();

    const {
      txtUsername,
      txtPassword,
      txtPassword_confirmation,
      txtPhoneNumber,
      txtDisplayName,
      txtRole,
    } = this.state;

    var isUsernameAvailable = checkUsername(txtUsername, this.props.User)

    var isCorrect = checkPass(txtPassword, txtPassword_confirmation)
    if(isCorrect === true && isUsernameAvailable === true){
        const user = {
        user_name: txtUsername,
        password: txtPassword,
        display_name: txtDisplayName,
        phone_number: txtPhoneNumber,
        role: txtRole,
        };
        CallApi("users/registrations", "POST", user).then(res => {
            if(res.status(200)){
                alert("Registration success!!!")
            }
            else alert("Failed!!!")
        });
    }
    else {
         alert("Password incorrect or Username are not Available")
    }
  };
  render() {
    const { isPasswordShow } = this.state;
    return (
      <>
        <IndexNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login-image.jpg") + ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                  <div className="social-line text-center">
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                  <AvForm
                    className="register-form"
                    onValidSubmit={this.onRegister}
                  >
                    <FormGroup>
                      <label>User name</label>
                      <AvField
                        placeholder="user name"
                        type="text"
                        name="txtUsername"
                        value={this.state.txtUsername}
                        onChange={this.onChange}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "please enter username!!!",
                          },
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>&nbsp;
                        <i 
                            className="fa fa-eye" 
                            style={{color:"black",cursor:"pointer"}}
                            onClick = {this.onTogglePasswordVisibility}
                        ></i>
                      <AvField
                        placeholder="password"
                        type = {(isPasswordShow) ? "text" : "password"}
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={this.onChange}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "please enter your password!!!",
                          },
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                        <label>Confirm password</label>
                        <AvField
                            placeholder="password"
                            type={(isPasswordShow) ? "text" : "password"}
                            name="txtPassword_confirmation"
                            value={this.state.txtPassword_confirmation}
                            onChange={this.onChange}
                            validate={{
                            required: {
                                value: true,
                                errorMessage: "please re-enter your password!!!",
                            },
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                      <label>Display name</label>
                      <AvField
                        placeholder="display name"
                        type="text"
                        name="txtDisplayName"
                        value={this.state.txtDisplayName}
                        onChange={this.onChange}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "please enter your Display name!!!",
                          },
                        }}
                      />
                    </FormGroup>
                    <Button block className="btn-round" color="danger">
                      Register
                    </Button>
                  </AvForm>
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
        </div>
      </>
    );
  }
}
const checkPass = (pass1, pass2) =>{
    if(pass1 === pass2){
        return true;
    }
    else return false;
}

const checkUsername = (name1, listName) =>{
    if(listName.length > 0){
        for(let i = 0; i < listName.length; i++){
            if(listName[i].userName === name1){
                return false
            }
            else continue
        }
    }
    return true
}

const mapStateToProps = state =>{
    return {
        User : state.User
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actFetchUser : () =>{ dispatch(actFetchUserDataRequest())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);
