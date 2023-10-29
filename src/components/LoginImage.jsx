import loginImage from "../assets/login-img.jpg";
import Image from "./styles/Image.styles";
import Wrapper from "./styles/Wrapper.styles";

const LoginImage = () => {
  return (
    <Wrapper>
      <div>
        <Image src={loginImage} alt="Login Image" />
      </div>
    </Wrapper>
  );
};

export default LoginImage;
