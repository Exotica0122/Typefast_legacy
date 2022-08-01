import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartScreen from "./pages/StartScreen";
import TypeRacer from "./pages/TypeRacer";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/play" element={<TypeRacer lol="hi" />} />
            </Routes>
        </Router>
    );
}

export default App;
