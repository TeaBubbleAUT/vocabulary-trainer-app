import Word from "../entity/Word";

type ShowWordProps = {
    word: Word;
    handleUserInput: (event: React.MouseEvent<HTMLButtonElement>, word: Word) => void;
    getNextRandomWord: (event: React.MouseEvent<HTMLButtonElement>) => void;
    result: boolean | undefined;
};

const articles = ["der", "die", "das"];

const ShowWord = ({ word, result, handleUserInput, getNextRandomWord }: ShowWordProps) => {
    return (
        <div>
            <form>
                {result === undefined ? null : result ?
                    <span id="correct">{word.article}</span> :
                    <span id="wrong">{word.article}</span>}
                    <p>{word.word}</p>
                <ul>
                    {articles.map((article) =>
                        <li className="articles" key={article}>
                            <button type="button" onClick={(e) => handleUserInput(e, word)} value={article}>
                                {article}
                            </button>
                        </li>)}
                </ul>
                <button onClick={getNextRandomWord}>Next</button>
            </form>
        </div>
    )
}
export default ShowWord
