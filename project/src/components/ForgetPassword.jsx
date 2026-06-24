import * as React from "react";
import "./ForgetPassword.css";

export default function ForgotPassword({ open, handleClose, onSent }) {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSend = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setEmail("");
    handleClose();
    if (onSent) onSent("Reset link sent to " + email);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Forgot password?</h3>
        <p className="modal-desc">
          Enter your email and we'll send you a reset link.
        </p>
        <div className="modal-field">
          <label htmlFor="reset-email">Email address</label>
          <input
            id="reset-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "input-error" : ""}
            autoFocus
          />
          {error && <span className="error-msg">{error}</span>}
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn-send" onClick={handleSend}>
            Send link
          </button>
        </div>
      </div>
    </div>
  );
}