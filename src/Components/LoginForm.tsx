import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleSSO } from "./SSO";
import "../assets/LoginForm.css"

export const Login = () => {
    const navigate = useNavigate();
    const loginWithGoogle = useGoogleSSO();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/home");
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-form-wrapper">
                    <div className="login-logo">
                        <img src="./Logo.png" alt="" />
                    </div>
                    <div className="login-text">
                        <h2>Login to your account</h2>
                        <p>
                            Enter your email below to login to<br />
                            your account
                        </p>
                    </div>
                    <div className="login-form">
                        {error && <p className="login-error">{error}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="login-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="login-form-group">
                                <div className="password-label">
                                    <label htmlFor="password">Password</label>
                                    <a href="#" className="forgot-password">Forgot your password?</a>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                            <button type="button" className="google-btn" onClick={() => loginWithGoogle()}>Login with Google</button>
                        </form>
                    </div>
                    <div className="login-signup">
                        <p>
                            Don&apos;t have an account?{" "}
                            <a onClick={() => navigate("/signup")}>Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <img src="./login-image.png" alt="" />
            </div>
        </div>
    )
}
