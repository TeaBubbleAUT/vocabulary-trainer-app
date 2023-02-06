type StartProps = {
    setRandomWord: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Start = ({ setRandomWord, setAmount }: StartProps) => {
    return (
        <div>
            <form>
                <p>Servus! Wie viele Wörter möchtest du heute lernen?</p>
                <input type="number" placeholder="1 - 50" onChange={setAmount}/>
                <button type="button" onClick={setRandomWord}>Start</button>
            </form>
        </div>
    )
}

export default Start;