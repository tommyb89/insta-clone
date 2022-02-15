import React, { useState, useEffect } from "react";
import "./Login.scss";
import insta from "../../assets/images/instagram.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [user, setUser] = useState(null);

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      alert("Oops.. some fields are wrong!");
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...

        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        // user has logged out...
        setUser(null);
      }
    });
  }, []);

  const login = async (e) => {
    e.preventDefault();
  };

  const logOut = async (e) => {
    e.preventDefault();
  };

  return (
    <article className="login">
      {/* logo */}
      <img src={insta} alt="logo" className="login__logo" />

      <form className="login__form">
        {/* facebook btn */}
        <div className="login__fb">
          <button className="login__fbbtn">
            <span>
              <FaFacebookSquare className="login__fbicon" />
            </span>
            Continue Using Facebook
          </button>
        </div>

        {/* divider -- OR -- */}
        <div className="login__divider">
          <div className="login__line"></div>
          <div className="login__or">or</div>
          <div className="login__line"></div>
        </div>

        {/* login form */}
        <div className="login__fields">
          <div className="login__username">
            <label htmlFor="" className="login__label">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="login__input"
                placeholder="Username"
              />
            </label>
          </div>
          <div className="login__email">
            <label htmlFor="" className="login__label">
              <input
                type="text"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="login__input"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="login__password">
            <label htmlFor="" className="login__label">
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="login__input"
                placeholder="Password"
              />
            </label>
          </div>
        </div>

        <div className="login__loginBtn">
          <button type="submit" className="login__btn" onClick={signUp}>
            Sign Up
          </button>
        </div>

        <p className="login__signup">
          Don't have account?
          <a className="login__link" href="">
            <span className="login__signupText">Log in</span>
          </a>
        </p>
      </form>
    </article>
  );
};

export default Login;
