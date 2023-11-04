import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


//CREATE A CONTEXT
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isUserLoding, setIsUserLoding] = useState(true);
    console.log(user)

    // CREATE USER WITH EMAIL AND PASSWORD 
    const handelCreateUserWithEmailPassword = async (email, password) => {
        try {
            setIsUserLoding(true)
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            setUser(newUser);
        } catch (error) {
            console.error(error.message);
        }

    }

    // SIGN IN USER WITH EMAIL AND PASSWORD 
    const handelLoginWithEmailPassword = (email, password) => {
        setIsUserLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // MANGE THE USER 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user),
                    setIsUserLoding(false)

            } else {
                unsubscribe()
            }
        })
    }, [])

    const Value = {
        user,
        isUserLoding,
        handelLoginWithEmailPassword,
        handelCreateUserWithEmailPassword,
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