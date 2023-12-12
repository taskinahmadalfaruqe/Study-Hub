import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); 


//CREATE A CONTEXT
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isUserLoding, setIsUserLoding] = useState(true);
   
    // CREATE USER WITH EMAIL AND PASSWORD 
    const handelCreateUserWithEmailPassword = async (email, password) => {
        try {
            setIsUserLoding(true);
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            setUser(newUser.user);
        } catch (error) {
            console.error(error.message);
        }

    }

    // SIGN IN USER WITH EMAIL AND PASSWORD 
    const handelLoginWithEmailPassword = (email, password) => {
        setIsUserLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SIGN IN WITH GOOGEL
    const handelGoogleSignIN = (googleProvider) => {
        setIsUserLoding(true)
        return signInWithPopup(auth, googleProvider)
    }

    // UPDATE USER WITH NAME AND EMAIL
    const hanelUpdateUser = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL

        })
    };

    // SIGN OUT USER FROM SITE
    const handelSignOut = () => {
        signOut(auth)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign In Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                        footer: `${res}`
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `${error}`
                })
            });
    };

    //SET USER
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsUserLoding(false)
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const Value = {
        user,
        isUserLoding,
        handelGoogleSignIN,
        hanelUpdateUser,
        handelSignOut,
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