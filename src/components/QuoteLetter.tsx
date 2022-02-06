import React from "react";

const QuoteLetter = ({letter, isRevealed}: { letter: string, isRevealed: boolean }) => {
    return (
        <div className={`${letter.match(/[^A-Za-z,.?!']/g) ? "column is-0" : "mx-1"} is-inline-block-touch`}>
            {isRevealed ?
                <p>{letter}</p> :
                <p>_</p>
            }
        </div>
    );
};

export default QuoteLetter;