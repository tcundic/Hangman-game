import React from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import Game from "../models/game";
import Highscore from "../models/highscore";
import Letter from "./Letter";
import {useLetter} from "../actions/games";

export class Letters extends React.Component<Props> {
    letters: Array<string>;

    constructor(props: Props) {
        super(props);

        const alpha: Array<number> = Array.from(Array(26)).map((e, i) => i + 65);
        this.letters = alpha.map((x) => String.fromCharCode(x));
    }

    onLetterClick = (e: React.ChangeEvent<any>) => {
        this.props.dispatch(useLetter(e.target.textContent));
    };

    render() {
        return (
            <div className="columns">
                {this.letters.map(letter =>
                    <Letter onClick={this.onLetterClick} key={letter} letter={letter} used={!!this.props.game?.usedLetters.includes(letter)} />
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

export default connect(mapStateToProps)(Letters);