import React from "react";
import Props from "../models/Props";
import Game from "../models/game";
import Highscore from "../models/highscore";
import {connect} from "react-redux";

export const GameLabels = (props: Props) => {
    return (
        <div>
            <div className="is-size-3 has-text-weight-bold">Player: {props.game?.userName}</div>
            <div className="is-size-3 has-text-weight-bold">Errors: {props.game?.errors}</div>
        </div>
    );
};

const mapStateToProps = (state: { game: Game, highscores: Array<Highscore> }) => {
    return {
        game: state.game
    };
};

export default connect(mapStateToProps)(GameLabels);
