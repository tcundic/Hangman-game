import React, {MouseEventHandler} from "react";

const Letter = ({letter, used, onClick}: { letter: string, used: boolean, onClick: MouseEventHandler }) => {
    return (
        <div className="column">
            {used ?
                <button className="button is-info is-light is-large">{letter}</button> :
                <button onClick={onClick} className="button is-info is-large">{letter}</button>
            }
        </div>
    );
};

export default Letter;