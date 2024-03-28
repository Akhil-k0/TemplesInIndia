import { Component } from "react";
import styled from "styled-components";
import { Navigate, Link } from "react-router-dom";

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
  @media screen and (min-width: 577px) and (max-width: 992px) {
    height: 140vh;
    flex-direction: column;
  }
`;

export const LoginImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  @media screen and (max-width: 576px) {
    height: 230px;
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width: 992px) {
    width: 55%;
  }
`;

export const LoginTempleImage = styled.img`
  height: 130px;
  width: 130px;
`;

export const DownloadText = styled.h1`
  font-size: 55px;
  font-weight: 500;
  color: #039be5;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 25px;
    margin-top: 0px;
  }
  @media screen and (min-width: 577px;) and (max-width: 992px) {
    margin-top: 0px;
    font-size: 30px;
    line-height: 30px;
  }
`;

export const LoginDetailsContainer = styled.div`
  height: 460px;
  width: 28%;
  box-shadow: 1px 2px 25px 5px #b3b3b3;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    box-shadow: none;
    width: 85%;
    max-width: 350px;
  }
  @media screen and (min-width: 577px) and (max-width: 992px) {
    height: 400px;
    width: 85%;
    max-width: 350px;
  }
`;
export const LoginInContainer = styled.div`
  width: 86%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Inputs = styled.input`
  width: 94%;
  box-shadow: 0px 1px 1px 1.2px #d9d9d9;
  height: 40px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  padding-left: 15px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 30px;
`;

export const PswdInput = styled.input`
  width: 94%;
  box-shadow: 0px 1px 1px 1.2px #d9d9d9;
  height: 40px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  padding-left: 15px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;

export const ShowPasswordButton = styled.button`
  height: 20px;
  width: 120px;
  margin-top: 0px;
  align-self: flex-end;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  height: 36px;
  width: 80px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  background-color: #e60026;
  box-shadow: 0.5px 2px 4px 3px #b3b3b3;
  text-decoration: none;
  border: none;
  cursor: pointer;
  align-self: center;
`;

export const AlreadyLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const LoginButton = styled.button`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  background-color: none;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const OldUser = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
`;

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    showPassword: false,
    redirectToLogin: false,
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, password } = this.state;

    try {
      // Make API call to register user
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      if (response.ok) {
        alert("Successfully Created Your Account");
        this.setState({ redirectToLogin: true });
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { redirectToLogin, showPassword } = this.state;

    if (redirectToLogin) {
      return <Navigate to="/login" />;
    }

    return (
      <LoginPageContainer>
        <LoginImageContainer>
          <LoginTempleImage
            src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711387639/tofi-logo_bd4bj9.png"
            alt="temple"
          />
          <DownloadText> Download on Play Store </DownloadText>
        </LoginImageContainer>
        <LoginDetailsContainer>
          <LoginInContainer>
            <Form onSubmit={this.handleSubmit}>
              <Inputs
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
                required
              />
              <Inputs
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <Inputs
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={this.handleChange}
                required
              />
              <PswdInput
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

              <SignUpButton type="submit"> SIGNUP </SignUpButton>
            </Form>
            <OldUser>
              Already have an account? <Link to="/login">Login</Link>
            </OldUser>
          </LoginInContainer>
        </LoginDetailsContainer>
      </LoginPageContainer>
    );
  }
}

export default SignUp;
