import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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

    // UPDATE USER WITH NAME AND EMAIL
    const hanelUpdateUser = (name, photoURL) => {
        setIsUserLoding(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL

        })
    };

    //HANDLE LOGOUT
    const handelLogOut = () => {
        signOut(auth)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign Out Successfully',
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
        hanelUpdateUser,
        handelLogOut,
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