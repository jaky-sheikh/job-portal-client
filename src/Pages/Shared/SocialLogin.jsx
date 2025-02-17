import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn">Sign in with google</button>
        </div>
    );
};

export default SocialLogin;