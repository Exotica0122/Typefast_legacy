import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const StartScreen = (props: any) => {
    const navigate = useNavigate();

    const redirectToGameScreen = () => {
        navigate("/play");
    };

    return (
        <>
            <h1>Welcome to Type-Fast</h1>
            <p>Start Screen</p>
            <Button variant="contained" onClick={redirectToGameScreen}>
                Start Game
            </Button>
        </>
    );
};

export default StartScreen;
