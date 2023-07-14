import React, { useEffect, useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { useGlobal } from '../global';

function Main() {
  const {ID}=useGlobal()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [TopRightView,setView]=useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }
  
  useEffect(()=>{
    if(ID!="")
   
    setView(<div className=''>{ID}님 환영합니다 <Link to="/logout">로그아웃</Link></div>)
    else{
    setView(<div className='nav-links'>
    <Link to="/login" className='nav-button'>Login</Link>
    <Link to="/signup" className='nav-button'>Sign up</Link>
  </div>)
    }
  },[TopRightView])


  return (
    <div>
      <div classsName='menu-item'>
        <div className="button-container">
        <Link to="/" className="custom-button">Main</Link>
        <Link to="/createCV" className="custom-button">Create</Link>
        <Link to="/Search" className="custom-button">Search</Link>
        <Link to="/Hire" className="custom-button">Hire</Link>
      </div>
      </div>
      <div className='top-section'>
        <div className="backimage"></div>
      <h1 className='Title'>당신만의 완벽한 portfolio를<br></br>만들어 보세요</h1>
      </div>
      <div className='main-page'>
          {TopRightView}
        <div className='create-cv-button'>
          <h2><Link to="/CreateCV" className='create-cv-link'>Create one!</Link></h2>
        </div>
        <div className='create-cv-button'>
          <h2><Link to="/CreateCV" className='create-cv-link'>Modify</Link></h2>
        </div>
      </div>
      <div className='bottom-section'></div>
    </div>
  );
}

export default Main;