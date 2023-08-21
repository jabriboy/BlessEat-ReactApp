// import {useContext} from 'react';
// import {AppContext} from '../../App';
import {useState} from 'react';
import {auth, provider} from '../../firebaseConfig.ts'
import {signInWithPopup, signOut} from 'firebase/auth'

import Cookies from 'universal-cookie'

const cookies = new Cookies

function Login(){

    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);

            setIsAuth(cookies.get("auth-token"));
        } catch(err) {
            console.log(err);
        }
    }

    const logOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
    } 

    if(!isAuth){
        return(
            <>
            <h2>Sign in with google</h2>
            <button onClick={signInWithGoogle}>Sign in</button>
            </>
        )
    } 

    return(
        <>
            <h1>Logged In</h1>
            <h2>Nome: {auth.currentUser?.displayName}</h2>
            <h2>Email: {auth.currentUser?.email}</h2>

            <button onClick={logOut}>Log Out</button>
        </>
    )
    

}

export default Login;