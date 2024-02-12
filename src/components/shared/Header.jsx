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
import {LOGO,USER_AVATAR} from '../../utils/constants';
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
          // const tokens = user.stsTokenManager;
          dispatch(addUser({displayName, uid, email,photoURL}));
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
      <img src={LOGO} 
        alt='logo' className='header-logo'
      />
    {userData && <div className='signout-btn-container'>
        <img src={USER_AVATAR} className='user-photo' alt='user logo'/>
        <button className='signout-btn' onClick={handleSignOut}>
          Sign out
        </button>
      </div>
}
    </div>
    
  )
}

export default Header
