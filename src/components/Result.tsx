import { useState } from "react";

type ResultProps = {
    result: boolean | undefined;
    correctAnswerCount: number;
    wrongAnswerCount: number;
}

const Result = ({ result, correctAnswerCount, wrongAnswerCount }: ResultProps) => {
    return (
        <div>
            <p>Richtig: {correctAnswerCount}</p> <p>Falsch: {wrongAnswerCount}</p>
            {result === undefined ? null : result ? <p id="correct">Correct!</p> : <p id="wrong">Wrong!</p>}
        </div>
    )
}

export default Result;
