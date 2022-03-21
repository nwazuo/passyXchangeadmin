import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "./../utilis/auth";

const Login = () => {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin(e.target.value);
  };

  const handleSubmit = (e) => {
    if (login === "passyAdmin") {
      setToken(login);
      navigate("/");
    } else {
      setLogin("Wrong password Details");
    }
  };
  return (
    <div className="loginDiv">
      <h1>
        Welcome Admin, <br /> Have you eaten?
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="loginCDiv">
          <input
            placeholder="Input your password"
            value={login}
            type="password"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit} className="btnAdmin">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
