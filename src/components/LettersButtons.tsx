import React from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import Game from "../models/game";
import Highscore from "../models/highscore";
import LetterButton from "./LetterButton";
import {stopTiming, useLetter} from "../actions/games";
import {mapDispatchToProps, mapStateToProps, isFinishedGame} from "../utils/utilMethods";

export class LettersButtons extends React.Component<Props> {
    letters: Array<string>;

    constructor(props: Props) {
        super(props);

        const alpha: Array<number> = Array.from(Array(26)).map((e, i) => i + 65);
        this.letters = alpha.map((x) => String.fromCharCode(x));
    }

    onLetterClick = (e: React.ChangeEvent<any>) => {
        this.props.dispatch(useLetter(e.target.textContent));

        if (isFinishedGame(this.props.game?.content || "", this.props.game?.revealedLetters || [])) {
            this.props.dispatch(stopTiming());
        }
    };

    render() {
        return (
            <div className="columns">
                {this.letters.map(letter =>
                    <LetterButton onClick={this.onLetterClick} key={letter} letter={letter} used={!!this.props.game?.usedLetters.includes(letter)} />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LettersButtons);