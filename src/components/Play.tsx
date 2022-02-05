import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

import Props from "../models/Props";
import LettersButtons from "./LettersButtons";
import HangmanSprites from "./HangmanSprites";
import QuoteLetters from "./QuoteLetters";
import PlayerSettings from "./PlayerSettings";
import {getNewQuote, mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";

export class Play extends React.Component<Props> {

    componentDidMount() {
        this.getQuote();
    }

    getQuote = async () => {
        const quote = await getNewQuote()
        if (quote) {
            this.props.startGame(quote.id, quote.content);
        }
    }

    render() {
        if (!this.props.game?.userName) {
            return <Navigate to="/" />;
        }
        return (
            <div className="container mt-6">
                <PlayerSettings />
                <HangmanSprites />
                <QuoteLetters />
                <LettersButtons />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);