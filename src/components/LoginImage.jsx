import loginImage from "../assets/login-img.jpg";
import "./common.css";
import Wrapper from "./styles/Wrapper.styles";


const LoginImage = () => {
  return (
    <Wrapper>
      <div>
        <img className="img" src={loginImage} alt="Login Image" />
      </div>
    </Wrapper>
  );
};

export default LoginImage;
