import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

import Props from "../models/Props";
import Highscore from "../models/highscore";
import Game from "../models/game";

export class Play extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        if (!this.props.game?.userName) {
            return <Navigate to="/" />;
        }
        return (
            <div className="container mt-6">
                GAME COMPONENT
            </div>
        );
    }
};

const mapStateToProps = (state: { game: Game, highscores: Array<Highscore> }) => {
    return {
        game: state.game
    };
};

export default connect(mapStateToProps)(Play);