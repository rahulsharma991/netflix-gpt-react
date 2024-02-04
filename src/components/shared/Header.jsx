import React from 'react'
import '../../scss/header/header.scss'
import { signOut } from "firebase/auth";
import {auth} from '../../utils/firebase';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector(data => data.user);
  console.log(userData)
  function handleSignOut() {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      toast(error.message, {
        autoClose: 2000,
      })
    });
  }

  return (
    <div className='header-container'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo' className='header-logo'
      />
    {userData && <div className='signout-btn-container'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg' className='user-photo' alt='user photo'/>
        <button className='signout-btn' onClick={handleSignOut}>
          Sign out
        </button>
      </div>
}
    </div>
    
  )
}

export default Header
