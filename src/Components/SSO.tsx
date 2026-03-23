import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const useGoogleSSO = () => {
    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });
            const userInfo = await res.json();

            localStorage.setItem("user", JSON.stringify({
                email: userInfo.email,
                name: userInfo.name,
                picture: userInfo.picture,
            }));

            navigate("/home");
        },
        onError: () => {
            console.error("Google login failed");
        },
    });

    return loginWithGoogle;
};
