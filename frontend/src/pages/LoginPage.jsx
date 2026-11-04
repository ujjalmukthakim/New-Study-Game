import {Link ,Navigate,useNavigate} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/form/LoginForm";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
    const {isAuthenticate,signIn}=useAuth();
    const navigate=useNavigate();
   

    //use <navigate> after a condition .
    if (isAuthenticate) return <Navigate to="" replace/>
    async function handleLogin(credentials) {
        await signIn(credentials);
        //direct after an action . 
        navigate("",{replace:true});
        
    }

    return(
        <AuthLayout
        title="Sign in to your account"
        description="Enter your details to continue ."
        footer={<>New User ? <Link to="/register">Create an account</Link> </>}
        
        >
            <LoginForm onSubmit={handleLogin}/>

        </AuthLayout>

    )
    
}
