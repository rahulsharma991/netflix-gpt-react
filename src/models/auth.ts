import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import FormDataInterface from "../interfaces/formData";
import { toast } from 'react-toastify';
import {auth} from '../utils/firebase';
export default class AuthModel {

    authHandler(formData:FormDataInterface, formAction:string, navigate: Function) {
        if(formAction === 'signup'){
         return  this.createUser(formData,navigate)
        }
        return this.loginUser(formData,navigate);
    }

    private createUser(formData:FormDataInterface, navigate:Function) {
     createUserWithEmailAndPassword(auth, formData.email.current.value, formData.password.current.value).then((userCredential) => {
        const user =  userCredential.user;
        navigate('/browse');
      })
      .catch((error) => {
        toast.error(error.message, {
            autoClose: 2000,
        });
      });
    }

    private loginUser(formData:FormDataInterface,navigate:Function) {
        signInWithEmailAndPassword(auth, formData.email.current.value, formData.password.current.value).then((userCredential) => {
             const user = userCredential.user;
             navigate('/browse');
                })
                .catch((error) => {
                    toast.error(error.message, {
                        autoClose: 2000,
                    });
                });
    }


 

}