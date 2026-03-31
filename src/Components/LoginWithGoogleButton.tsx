const googleBtn = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#333",
    cursor: "pointer",
};

interface LoginWithGoogleButtonProps {
    loginWithGoogle: () => void;
}

export const LoginWithGoogleButton = ({ loginWithGoogle }: LoginWithGoogleButtonProps) => {
    return (
        <button type="button" style={googleBtn} onClick={() => loginWithGoogle()}>Login with Google</button>
    );
};
