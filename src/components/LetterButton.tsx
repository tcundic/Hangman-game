import React, {MouseEventHandler} from "react";

const LetterButton = ({letter, used, onClick}: { letter: string, used: boolean, onClick: MouseEventHandler }) => {
    return (
        <div className="column is-inline-touch">
            {used ?
                <button className="button is-info is-light is-large my-4">{letter}</button> :
                <button onClick={onClick} className="button is-info is-large my-4">{letter}</button>
            }
        </div>
    );
};

export default LetterButton;