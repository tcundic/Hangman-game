import {getRandomQuote} from "./http";
import Game from "../models/game";
import Highscore from "../models/highscore";
import {resetCurrentGame, setQuote, startTiming} from "../actions/games";

const getUniqueLetters = (quote: string) => new Set(quote.replace(/[^A-Za-z]/g, "").toLowerCase());

const getNewQuote = async () => {
    const res = await getRandomQuote();
    if (res) {
        const {id, content} = res;
        return {id, content};
    }
}

const isFinishedGame = (quote: string, revealedLetters: Array<string>) => {
    const uniqueCharacters = getUniqueLetters(quote);
    return uniqueCharacters.size === revealedLetters.length;
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        resetGame: (quoteId: string, content: string) => {
            dispatch(resetCurrentGame());
            dispatch(setQuote(quoteId, content));
        },
        startGame: (quoteId: string, content: string) => {
            dispatch(setQuote(quoteId, content));
            dispatch(startTiming());
        },
        dispatch
    }
};

const mapStateToProps = (state: { game: Game, highscores: Array<Highscore> }) => {
    return {
        game: state.game,
        highscores: state.highscores
    };
};

export {getUniqueLetters, getNewQuote, isFinishedGame, mapStateToProps, mapDispatchToProps};
