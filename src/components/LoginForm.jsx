import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "./styles/Button.styles";
import ButtonContainer from "./styles/ButtonContainer.styles";
import Checkbox from "./styles/Checkbox.styles";
import EyeIcons from "./styles/EyeIcons.styles";
import Form from "./styles/Form.styles";
import Input from "./styles/Input.styles";
import Label from "./styles/Label.styles";
import LabelText from "./styles/LabelText.styles";
import PasswordContainer from "./styles/PasswordContainer.styles";
import RegisterText from "./styles/RegisterText.styles";
import SpanText from "./styles/SpanText.styles";
import Text from "./styles/Text.styles";
import Title from "./styles/Title.styles";

const LoginForm = () => {
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);

  return (
    <Form>
      <Title>Login</Title>
      {/* Login ID field */}
      <div>
        <label>Login ID</label>
        <Input
          type="text"
          placeholder="Enter Login ID"
          id="loginId"
          name="loginId"
          required
        />
      </div>

      {/* Password field */}
      <PasswordContainer>
        <label>Password</label>
        <Input
          type={togglePasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter Your Password"
          required
        />
        <EyeIcons
          onClick={() => setTogglePasswordVisible(!togglePasswordVisible)}
        >
          {togglePasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </EyeIcons>
      </PasswordContainer>

      {/* Checkbox Containers */}
      <Checkbox>
        <label>
          <input type="checkbox" name="myCheckbox" id="myCheckbox" />
          Remember Me
        </label>
        <Text>Change Password</Text>
      </Checkbox>
      <Label>
        <input type="checkbox" name="myCheckbox" id="myCheckbox" />
        <LabelText>
          Agree to <SpanText>Terms & Coditions</SpanText>
        </LabelText>
      </Label>

      {/* Login button */}
      <ButtonContainer>
        <Button type="submit">Login</Button>
      </ButtonContainer>
      <RegisterText>
        Don&apos;t have an account?
        <SpanText>Register Here</SpanText>
      </RegisterText>
    </Form>
  );
};

export default LoginForm;
