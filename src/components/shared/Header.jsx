import React from 'react'
import '../../scss/header/header.scss'
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import {auth} from '../../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/redux-store/userSlice";
import {onAuthStateChanged} from "firebase/auth";
const Header = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch();

  const userData = useSelector(data => data.user);
 
  function handleSignOut() {
    signOut(auth).catch((error) => {
      toast(error.message, {
        autoClose: 2000,
      })
    });
  }
  function authStateChange() {
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
          const {displayName, uid, email, photoURL} = user;
          const tokens = user.stsTokenManager;
          dispatch(addUser({displayName, uid, email,photoURL, tokens}));
          navigate('/browse');
      } else {
          dispatch(removeUser());
          navigate('/')
      }
      })
      return unsubscribe;
  }
  useEffect(() => {
      authStateChange();
      return () => {
        const unsubscribe = authStateChange();
        unsubscribe();
      }
     
  },[]);
  return (
    <div className='header-container'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo' className='header-logo'
      />
    {userData && <div className='signout-btn-container'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg' className='user-photo' alt='user logo'/>
        <button className='signout-btn' onClick={handleSignOut}>
          Sign out
        </button>
      </div>
}
    </div>
    
  )
}

export default Header
