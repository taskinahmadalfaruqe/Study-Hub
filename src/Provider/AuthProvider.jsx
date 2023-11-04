import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext } from "react";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const AuthContext= createContext();




const AuthProvider = ({children}) => {


    // CREATE USER WITH EMAIL AND PASSWORD 
    const hendelUserWithEmailPassword=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }


    // SIGN IN USER WITH EMAIL AND PASSWORD 
    const handelSignWithEmailPassword=(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    

    const Value={
        handelSignWithEmailPassword,
        hendelUserWithEmailPassword,
    }
  return (
    <AuthContext.Provider value={Value}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export default AuthProvider