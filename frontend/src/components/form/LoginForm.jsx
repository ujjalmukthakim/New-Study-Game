import { useState } from "react";
import Button from "../common/Button";
import { getErrorMessage } from "../../utils/errorMessage";

//i am calling the function from parent class over here . so, onSubmit is a function that i used in parent
export default function LoginForm({onSubmit}) {
    const [form,setForm]=useState({email: "",password: ""});
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);

    function updateField(event) {
        setForm((current)=>({
            ...current,
            [event.target.name]:event.target.value,
        }))
        
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setLoading(true);

        try{
            await onSubmit(form);
        }catch(submitError){
            setError(getErrorMessage(submitError));

        }
        finally{
            setLoading(false);
        }
        
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <div className="alert alert-error" role="alret">{error}</div>}

            <label className="field">
                <span>Email address</span>
                <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                required
                />
            </label>

            <label>
                <span>Password</span>
                <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={form.password}
                onChange={updateField}
                required
                
                />
            </label>

        </form>
    )

    
}