import React from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Props from "../models/Props";
import * as utils from "../utils/utilMethods";

export const PlayerSettings = (props: Props) => {

    const navigate = useNavigate();

    const resetGame = async () => {
        const quote = await utils.getNewQuote()
        if (quote) {
            props.startGame(quote.id, quote.content);
        }
    };

    const isFinishedGame = () => {
        return utils.isFinishedGame(props.game?.content || "", props.game?.revealedLetters || [])
    };

    return (
        <div className="columns">
            <div className="column">
                <div
                    className="is-size-3 has-text-weight-bold has-text-centered-touch">Player: {props.game?.userName}</div>
                <div
                    className="is-size-3 has-text-weight-bold has-text-centered-touch">Errors: {props.game?.errors}</div>
            </div>
            <div className="column is-multiline">
                <button className="button is-info is-large is-pulled-right ml-5 mx-auto is-hidden-touch"
                        onClick={resetGame}>
                    Reset game
                </button>
                <button className="button is-info is-large ml-5 mx-auto is-hidden-desktop is-block-touch"
                        onClick={resetGame}>
                    Reset game
                </button>
                {isFinishedGame() &&
                    <>
                        <button className="button is-info is-large is-pulled-right is-hidden-touch"
                                onClick={() => navigate('/highscores')}>
                            Show highscore
                        </button>
                        <button className="button is-info is-large is-hidden-desktop is-block-touch mx-auto mt-5"
                                onClick={() => navigate('/highscores')}>
                            Show highscore
                        </button>
                    </>
                }
            </div>
        </div>
    );
};

export default connect(utils.mapStateToProps, utils.mapDispatchToProps)(PlayerSettings);
