import * as React from "react";
import ForgotPassword from "./components/ForgetPassword";
import "./file.css";
import { useNavigate } from "react-router-dom";


export default function ForgetPassword() {
    
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState("");
  const navigate = useNavigate();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const validate = () => {
    let valid = true;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      showToast("Signing in...");
    }
  };

 
  return (
    <div className="signin-page">
      {toast && <div className="toast show">{toast}</div>}

      <div className="signin-card">
        <div className="logo">
          <div className="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="logo-text">Alternate</span>
        </div>

        <h1 className="signin-title">Email verification</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? "input-error" : ""}
            />
            {emailError && <span className="error-msg">{emailError}</span>}
          </div>

            

          <button type="submit" className="btn-primary">
            Send otp
          </button>
        </form>

        

        
      </div>

      <ForgotPassword open={open} handleClose={() => setOpen(false)} onSent={(msg) => showToast(msg)} />
    </div>
  );
}