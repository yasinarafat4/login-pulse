import LoginForm from "./components/LoginForm";
import LoginImage from "./components/LoginImage";
import Container from "./components/styles/Container.styles";

const Home = () => {
  return (
    <>
      <Container>
        {/* Image Container*/}
        <LoginImage />
        {/* Form Container */}
        <LoginForm />
      </Container>
    </>
  );
};

export default Home;
