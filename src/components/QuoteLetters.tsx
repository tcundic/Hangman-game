import React from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import Highscore from "../models/highscore";
import Game from "../models/game";
import QuoteLetter from "./QuoteLetter";

export class QuoteLetters extends React.Component<Props> {

    isLetterRevealed = (letter: string): boolean => {
        if (letter.match(/[^A-Za-z]/g)) {
            return true;
        }

        const revealedLetters = this.props.game?.revealedLetters;
        if (revealedLetters) {
            return revealedLetters?.indexOf(letter.toLowerCase()) > -1;
        }
        return true;
    };

    render() {
        return(
            <div className="columns is-justify-content-center is-size-1 has-text-weight-bold is-flex-wrap-wrap">
                {this.props.game?.content.split("").map((letter, index) =>
                    <QuoteLetter key={index} letter={letter} isRevealed={this.isLetterRevealed(letter)} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: { game: Game, highscores: Array<Highscore> }) => {
    return {
        game: state.game
    };
};

export default connect(mapStateToProps)(QuoteLetters);