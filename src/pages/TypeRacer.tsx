import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "../components/Form";
import DisplayWords from "../components/DisplayWords";
import CountDown from "../components/CountDown";
import ScoreBoard from "../components/ScoreBoard";
import MainPageButton from "../components/MainPageButton";

const TypeRacer = (props: any) => {
    const [words, setWords] = useState();
    const [wordIndex, setWordIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const apiUrl = "https://api.quotable.io/random?minLength=100&maxLength=350";

    const getWord = async () => {
        const response = await axios.get(apiUrl);
        const data = await response.data;
        const words = data.content.split(" ");
        setWords(words);
    };

    useEffect(() => {
        getWord().catch((error) => console.log(error));
    }, []);

    return (
        <>
            {words && (
                <DisplayWords
                    words={words}
                    wordIndex={wordIndex}
                    error={error}
                />
            )}
            <Form
                words={words}
                wordIndex={wordIndex}
                nextWord={setWordIndex}
                isPlaying={isPlaying}
                setMistype={setError}
                setEndTime={setEndTime}
                setIsPlaying={setIsPlaying}
            />
            <CountDown
                isPlaying={isPlaying}
                startPlay={setIsPlaying}
                startTime={setStartTime}
            />
            {endTime && (
                <ScoreBoard
                    startTime={startTime}
                    endTime={endTime}
                    words={words}
                />
            )}
            {endTime && <MainPageButton />}
        </>
    );
};

export default TypeRacer;
