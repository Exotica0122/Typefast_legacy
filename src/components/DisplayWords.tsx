const typeCorrectlyStyle = {
    backgroundColor: "#34eb77",
};

const getTypedWords = (words: any, wordIndex: any) => {
    let typedWords = words.slice(0, wordIndex);
    typedWords = typedWords.join(" ");
    return <span style={typeCorrectlyStyle}>{typedWords} </span>;
};

const currentStyle = {
    textDecoration: "underline",
};

const typeIncorrectlyStyle = {
    textDecoration: "underline",
    backgroundColor: "red",
};

const getCurrentWord = (words: string[], wordIndex: any, error: boolean) => {
    return (
        <span style={error ? typeIncorrectlyStyle : currentStyle}>
            {words[wordIndex]}
        </span>
    );
};

const getWordsToBeTyped = (words: string[], wordIndex: any) => {
    const wordsToTypedArray: string[] = words.slice(
        wordIndex + 1,
        words.length
    );
    const wordsToTyped: string = wordsToTypedArray.join(" ");
    return <span> {wordsToTyped}</span>;
};

const DisplayWords = ({ words, wordIndex, error }: any) => {
    return (
        <>
            {getTypedWords(words, wordIndex)}
            {getCurrentWord(words, wordIndex, error)}
            {getWordsToBeTyped(words, wordIndex)}
        </>
    );
};

export default DisplayWords;
