import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

import Props from "../models/Props";
import Highscore from "../models/highscore";
import Game from "../models/game";
import Letters from "./LettersButtons";
import {getRandomQuote} from "../utils/http";
import {setQuote} from "../actions/games";
import HangmanSprites from "./HangmanSprites";
import QuoteLetters from "./QuoteLetters";
import GameLabels from "./GameLabels";

export class Play extends React.Component<Props> {

    componentDidMount() {
        this.getNewQuote();
    }

    getNewQuote = async () => {
        const res = await getRandomQuote();
        if (res) {
            const {id, content} = res;
            this.props.dispatch(setQuote(id, content));
        }
    }

    render() {
        if (!this.props.game?.userName) {
            return <Navigate to="/" />;
        }
        return (
            <div className="container mt-6">
                <GameLabels />
                <HangmanSprites />
                <QuoteLetters />
                <Letters />
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