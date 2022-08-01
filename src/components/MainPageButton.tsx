import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const MainPageButton = (props: any) => {
    const navigate = useNavigate();

    const mainPageHandler = () => {
        navigate("/");
    };

    return (
        <Button variant="contained" onClick={mainPageHandler}>
            Return to main page
        </Button>
    );
};

export default MainPageButton;
