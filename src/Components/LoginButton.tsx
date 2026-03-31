const loginBtn = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e8e8e8",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#333",
    cursor: "pointer",
    marginBottom: "12px",
};

export const LoginButton = () => {
    return (
        <button type="submit" style={loginBtn}>Login</button>
    );
};
