import { Component } from "react";

import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

export const LoginPageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 90vh;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const LoginImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media screen and (max-width: 576px) {
    height: 230px;
    background-color: seashell;
    width: 100%;
  }
`;

export const LoginTempleImage = styled.img`
  height: 120px;
  width: 120px;
  @media screen and (max-width: 576px) {
    height: 128px;
    width: 128px;
    margin-top: 30px;
  }
`;

export const DownloadText = styled.h1`
  font-family: "sans Breif";
  font-size: 70px;
  font-weight: 500;
  color: #a50740;
  text-align: center;
  margin-top: 15px;
  line-height: 90px;
  @media screen and (max-width: 576px) {
    font-size: 35px;
    margin-top: 0px;
    line-height: 45px;
  }
`;

export const LoginDetailsContainer = styled.div`
  height: 350px;
  width: 40%;
  max-width: 350px;
  box-shadow: 1px 2px 25px 5px #b3b3b3;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  @media screen and (max-width: 576px) {
    box-shadow: none;
    width: 85%;
  }
`;
export const LoginInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const UsersFormData = styled.form`
  width: 80%;
`;

export const Inputs = styled.input`
  width: 94%;
  box-shadow: 0px 0px 0px 1.5px #d9d9d9;
  height: 45px;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    height: 35px;
  }
`;

export const PasswordInput = styled.input`
  width: 94%;
  box-shadow: 0px 0px 0px 1.5px #d9d9d9;
  height: 45px;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    height: 35px;
  }
`;

export const ShowPasswordButton = styled.button`
  height: 20px;
  width: 120px;
  margin-top: 0px;
  align-self: center;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpButton = styled(Link)`
  height: 36px;
  width: 72px;
  border-radius: 20px;
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  background-color: transparent;
  box-shadow: 0.5px 2px 4px 3px #b3b3b3;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 65px;
    font-size: 10px;
  }
`;

export const LoginButton = styled.button`
  height: 36px;
  width: 72px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  background-color: #e60026;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 65px;
    font-size: 10px;
  }
`;

export const ForgotPassword = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  font-family: "Roboto";
  text-decoration: underline;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
    redirectToHome: false,
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      // Make API call to authenticate user
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle JWT token
        alert("Login Success");
        const data = await response.json();
        console.log(data);
        localStorage.setItem("jwtToken", data.token);
        // Redirect to home page after successful login
        this.setState({ redirectToHome: true });
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { redirectToHome, showPassword } = this.state;

    if (redirectToHome) {
      return <Navigate to="/" />;
    }

    return (
      <LoginPageContainer>
        <LoginImageContainer>
          <LoginTempleImage
            src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711387639/tofi-logo_bd4bj9.png"
            alt="tofi logo"
          />
          <DownloadText> Download on Play Store </DownloadText>
        </LoginImageContainer>
        <LoginDetailsContainer>
          <LoginInContainer>
            <UsersFormData onSubmit={this.handleSubmit}>
              <Inputs
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <PasswordInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <ShowPasswordButton
                type="button"
                onClick={this.togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"} Password
              </ShowPasswordButton>
              <Buttons>
                <SignUpButton to="/signup"> SIGNUP </SignUpButton>
                <LoginButton type="submit"> LOGIN </LoginButton>
              </Buttons>
            </UsersFormData>
            <ForgotPassword> Forgot Password? </ForgotPassword>
          </LoginInContainer>
        </LoginDetailsContainer>
      </LoginPageContainer>
    );
  }
}

export default Login;
