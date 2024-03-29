import "./ChoiceBox.css";

function ChoiceBox({
    choiceList,
    question,
    handleChoice,
    resetScene,
    incrementLuck,
    luck,
    addChoiceToLog,
}) {
    // TODO: ch1.findIndex((e)=>{return e.id==eachChoice.next}) Add more sophiscticated way of selecting next scene
    const { addEntry, makeQuestionEntry } = addChoiceToLog;
    return (
        <div className="ChoiceBox">
            <p className="ChoiceQuestion">{question}</p>
            {choiceList.map(function (eachChoice, index) {
                return (
                    <button
                        key={index}
                        className="ChoiceButton"
                        onClick={function () {
                            handleChoice(eachChoice.Next);
                            resetScene(0);
                            incrementLuck(luck + eachChoice.LuckChange);
                            addEntry(
                                makeQuestionEntry(question, eachChoice.Text)
                            );
                        }}
                        disabled={luck < eachChoice.MinLuck} // Ternary approach
                    >
                        {eachChoice.Text}
                    </button>
                );
            })}
        </div>
    );
}
export { ChoiceBox };

/* ---------------QUESTIONS-----------------

disabled = {!luck >= eachChoice.MinLuck}  <<== Why doesn't this work ???
(if (!luck >= minLuck) {} would be valid)

How could I pass down a GENERIC comparison and its checker state instead of bloating line 3 with more props ???

Functional > Pretty > Fast   <<== Correct priority ??

*/

/* Prev ver - Conditional Rendering approach
import "./ChoiceBox.css";

function ChoiceBox({
    choiceList,
    question,
    handleChoice,
    resetScene,
    incrementLuck,
    luck,
}) {
    return (
        <div className="ChoiceBox">
            <p className="ChoiceQuestion">{question}</p>
            {choiceList.map(function (eachChoice) {
                return (
                    <>
                        {luck >= eachChoice.MinLuck ? (
                            <button
                                className="ChoiceButton"
                                onClick={function () {
                                    handleChoice(eachChoice.Next);
                                    resetScene(0);
                                    incrementLuck(eachChoice.LuckChange);
                                }}
                            >
                                {eachChoice.Text}
                            </button>
                        ) : (
                            <button
                                className="ChoiceButton"
                                onClick={function () {
                                    handleChoice(eachChoice.Next);
                                    resetScene(0);
                                    incrementLuck(eachChoice.LuckChange);
                                }}
                                disabled="true"
                            >
                                {eachChoice.Text}
                            </button>
                        )}
                    </>
                );
            })}
        </div>
    );
}
export { ChoiceBox };
*/

//z
