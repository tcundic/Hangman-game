import {getRandomQuote} from "./http";
import Game from "../models/game";
import Highscore from "../models/highscore";
import {resetCurrentGame, setQuote} from "../actions/games";

const getUniqueLetters = (quote: string) => new Set(quote.replace(/[^A-Za-z]/g, "").toLowerCase());

const getNewQuote = async () => {
    const res = await getRandomQuote();
    return res;
}

const isFinishedGame = (quote: string, revealedLetters: Array<string>) => {
    const uniqueCharacters = getUniqueLetters(quote);
    return uniqueCharacters.size === revealedLetters.length;
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        startGame: (quoteId: string, content: string) => {
            dispatch(resetCurrentGame());
            dispatch(setQuote(quoteId, content));
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
