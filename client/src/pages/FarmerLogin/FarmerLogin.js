import {unstable_isMuiElement} from '@mui/utils';
import axios from 'axios';
import {useState, useEffect, React} from 'react';
import './FarmerLogin.scss';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const FarmerLogin = ({users, user, setUser}) => {
  const navigate = useNavigate();


  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInfo = users.find(user => user.name === username);

    if (userInfo && userInfo.password === password) {
      setUser(userInfo.name);

      navigate("/home");

    }
  };

  return (

    <div className="row__login">
      <div className="login">
        <p>Howdy! please log in</p>
        <div className="images">
          <img src="../images/farmer.png" alt="farmer"></img>
          <img src="../images/farmeress.png" alt="farmeress"></img>
        </div>
        <form className="farmer__login">
          <label className="farmer__label">username</label>
          <input className="farmer__input" type="text" onChange={e => setUserName(e.target.value)}></input>
          <label className="farmer__label">password</label>
          <input className="farmer__input" type="password" onChange={e => setPassword(e.target.value)}></input>
          <div>
            <button className="submit__button" type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
          </div>
        </form >
      </div>
    </div>
  );
};

export default FarmerLogin;