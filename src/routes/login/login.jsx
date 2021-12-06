import "./style.css";
import Header from "../../sectioning/header/header";
import { useState } from "react";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginInfo;
    console.log(result);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.id;

    const loginInfoCopy = Object.assign({}, loginInfo, {
      ...loginInfo,
    });

    if (type === "username") {
      loginInfoCopy.username = value;
    } else {
      loginInfoCopy.password = value;
    }

    setLoginInfo(loginInfoCopy);
  };
  return (
    <div>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="username">Username </label>
          <input onChange={handleChange} id="username" type="text"></input>
        </div>
        <div className="form__field">
          <label htmlFor="password">Password </label>
          <input onChange={handleChange} id="password" type="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
