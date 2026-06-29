import * as React from "react";
import "./SignUp.css"
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });


  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [toast, setToast] = React.useState("");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(""), 3000);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.password || form.password.length < 6)
      e.password = "Password must be at least 6 characters.";
    if (form.confirm !== form.password)
      e.confirm = "Passwords do not match.";
    return e;
  };

  const redirect = () => {
      navigate("/")
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    showToast("Account created successfully!");
  };

  const handleGoogle = () => {
    showToast("Redirecting to Google...");
  };

  return (
    <div className="signup-page">
      {toast && (
        <div className={`toast ${toast.type === "error" ? "toast-error" : ""}`}>
          {toast.msg}
        </div>
      )}

      <div className="signup-card">
        <div className="logo">
          <div className="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="logo-text">Acme</span>
        </div>

        <h1 className="signup-title">Create an account</h1>
        <p className="signup-subtitle">Sign up to get started today</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-msg">{errors.password}</span>}
            {form.password && (
              <div className="strength-bar">
                <div className={`strength-fill strength-${getStrength(form.password)}`} />
              </div>
            )}
          </div>

          <div className="field">
            <label htmlFor="confirm">Confirm password</label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="••••••••"
              value={form.confirm}
              onChange={handleChange}
              className={errors.confirm ? "input-error" : ""}
            />
            {errors.confirm && <span className="error-msg">{errors.confirm}</span>}
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="/terms" className="terms-link">Terms of Service</a>{" "}
              and{" "}
              <a href="/privacy" className="terms-link">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Create account
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="btn-social" onClick={handleGoogle}>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <p className="signin-text">
          Already have an account?{" "}
          <a href="#" className="signin-link" onClick={redirect}>Sign in</a>
        </p>
      </div>
    </div>
  );
}

function getStrength(password) {
  if (password.length < 6) return "weak";
  if (password.length < 10 || !/[A-Z]/.test(password) || !/[0-9]/.test(password))
    return "medium";
  return "strong";
}