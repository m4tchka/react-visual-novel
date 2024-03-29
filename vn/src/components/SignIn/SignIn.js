import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

export default function SignIn({ setIsLoggedIn, toggleSignInModal }) {
    function handleSignIn() {
        const signInForm = document.querySelector(".signin");
        signInForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            let em = signInForm.email.value;
            let pw = signInForm.password.value;
            await signInWithEmailAndPassword(auth, em, pw)
                .then((cred) => {
                    console.log("User signed in:", cred.user);
                    signInForm.reset();
                    setIsLoggedIn(true);
                    toggleSignInModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }
    return (
        <>
            <form className="signin">
                <h2>Sign In</h2>
                <input
                    className="input-field"
                    id="email-field"
                    name="email"
                    placeholder="email"
                    type="email"
                ></input>
                <input
                    className="input-field"
                    id="password-field"
                    name="password"
                    placeholder="password"
                    type="text"
                ></input>
                <button
                    type="submit"
                    onClick={(e) => {
                        handleSignIn(e);
                    }}
                >
                    Sign In
                </button>
            </form>
        </>
    );
}
