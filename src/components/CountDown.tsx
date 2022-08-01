import React, { useState, useEffect } from "react";

const CountDown = (props: any) => {
    const [timer, setTimer] = useState({ countDown: "", msg: "" });

    const { startPlay, startTime } = props;

    useEffect(() => {
        let countDown = 5;
        let timerID = setInterval(() => {
            if (countDown > 0) {
                setTimer({
                    countDown: countDown.toString(),
                    msg: "Starting",
                });
                countDown--;
            } else {
                setTimer({
                    countDown: countDown.toString(),
                    msg: "Starting",
                });
                startPlay(true);
                startTime(Date.now());
                clearInterval(timerID);
            }
        }, 1000);
    }, [startPlay, startTime]);

    const { countDown, msg }: any = timer;

    return (
        <>
            {+timer.countDown > 0 && <h1>{countDown}</h1>}
            {+timer.countDown > 0 && <h3>{msg}</h3>}
        </>
    );
};

export default CountDown;
