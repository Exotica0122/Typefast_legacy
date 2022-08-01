import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartScreen from "./pages/StartScreen";
import TypeRacer from "./pages/TypeRacer";

import "./App.css";

function App() {
    return (
        <div className="center">
            <Router>
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/play" element={<TypeRacer lol="hi" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
