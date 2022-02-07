import React from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import LetterButton from "./LetterButton";
import {stopTiming, useLetter} from "../actions/games";
import {mapDispatchToProps, mapStateToProps, isFinishedGame} from "../utils/utilMethods";
import {sendStatistics} from "../utils/http";

export class LettersButtons extends React.Component<Props> {
    letters: Array<string>;

    constructor(props: Props) {
        super(props);

        const alpha: Array<number> = Array.from(Array(26)).map((e, i) => i + 65);
        this.letters = alpha.map((x) => String.fromCharCode(x));
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        if (isFinishedGame(this.props.game?.content || "", this.props.game?.revealedLetters || [])) {

            const quoteId = this.props.game?.quoteId || "";
            const length = this.props.game?.length || 0;
            const uniqueCharacters = this.props.game?.uniqueCharacters || 0;
            const userName = this.props.game?.userName || "";
            const errors = this.props.game?.errors || 0;
            const duration = this.props.game?.duration || 0;

            sendStatistics({
                quoteId,
                length,
                uniqueCharacters,
                userName,
                errors,
                duration
            });
        }
    }

    onLetterClick = (e: React.ChangeEvent<any>) => {
        this.props.dispatch(useLetter(e.target.textContent));

        if (isFinishedGame(this.props.game?.content || "", this.props.game?.revealedLetters || [])) {
            this.props.dispatch(stopTiming());
        }
    };

    render() {
        return (
            <div className="columns mx-4 my-2">
                {this.letters.map(letter =>
                    <LetterButton onClick={this.onLetterClick} key={letter} letter={letter} used={!!this.props.game?.usedLetters.includes(letter)} />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LettersButtons);