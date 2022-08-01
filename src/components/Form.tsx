import { useState, useRef, useEffect } from "react";

import TextField from "@mui/material/TextField";

const Form = (props: any) => {
    const [userInput, setUserInput] = useState("");
    const textInput: any = useRef(null);

    const { isPlaying, setMistype, setEndTime, setIsPlaying } = props;

    // Focus input when game starts
    useEffect(() => {
        if (isPlaying && textInput !== null) {
            textInput.current.focus();
        }
    }, [isPlaying]);

    const resetForm = () => {
        setUserInput("");
    };

    const onChange = (e: any) => {
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);

        const word = props.words[props.wordIndex];

        // when word type incorrect
        if (value !== word.slice(0, value.length)) {
            setMistype(true);
        } else {
            setMistype(false);
        }

        // continue typing if last char not space
        if (lastChar !== " ") {
            return setUserInput(value);
        }

        // return when word incorrect
        if (word + " " !== value) {
            return setUserInput(value);
        }

        // move to next word
        props.nextWord((prevIndex: number) => prevIndex + 1);
        resetForm();

        // if correct go to next index
        setMistype(false);
        // End Game
        if (props.wordIndex === props.words.length - 1) {
            setIsPlaying(false);
            return setEndTime(Date.now());
        }
    };

    const onSumbit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="center">
            <form onSubmit={onSumbit}>
                <div className="">
                    <TextField
                        id="type"
                        type="text"
                        onChange={onChange}
                        value={userInput}
                        InputProps={{ readOnly: !isPlaying }}
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        inputRef={textInput}
                        autoComplete="off"
                    ></TextField>
                </div>
            </form>
        </div>
    );
};

export default Form;
