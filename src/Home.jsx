import "./Home.css";
import LoginForm from "./components/LoginForm";
import LoginImage from "./components/LoginImage";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* Image Container*/}
        <LoginImage />
        {/* Form Container */}
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
