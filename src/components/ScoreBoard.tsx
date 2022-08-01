const ScoreBoard = (props: any) => {
    const { startTime, endTime, words } = props;

    const calculateWPM = () => {
        let numOfWords = words.length;
        const timeInSeconds = (endTime - startTime) / 1000;
        const timeInMinutes = timeInSeconds / 60;
        const WPM = Math.floor(numOfWords / timeInMinutes);
        return WPM;
    };

    return (
        <table className="table table-striped my-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">#WPM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Me</td>
                    <td>{calculateWPM()}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ScoreBoard;
