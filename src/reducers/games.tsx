// Games Reducer

import Game from "../models/game";
import GameAction from "../models/gameAction";

const gamesReducerDefaultState: Game = {
    quoteId: "",
    content: "",
    userName: "",
    duration: 0,
    errors: 0,
    length: 0,
    uniqueCharacters: 0,
    usedLetters: [],
    revealedLetters: []
};

const gamesReducer = (state = gamesReducerDefaultState, action: GameAction) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.userName
            }
        case 'SET_QUOTE':
            return {
                ...state,
                quoteId: action.quoteId,
                content: action.content
            }
        case 'INCREMENT_ERROR':
            return {
                ...state,
                errors: ++state.errors
            }
        case 'START_TIMING':
            return {
                ...state,
                duration: action.startTime
            }
        case 'END_TIMING':
            return {
                ...state,
                duration: action.endTime ? action.endTime - state.duration : state.duration
            }
        case 'USE_LETTER':
            const revealedLetters = state.revealedLetters;
            const usedLetter = action.usedLetter;

            if (usedLetter && state.content.indexOf(usedLetter) > -1) {
                const quote = state.content.replace(/[^A-Za-z]/g, "");
                for (let i = 0; i < quote.length; i++) {
                    if (quote[i] === usedLetter) {
                        revealedLetters[i] = true;
                    }
                }
            }

            return {
                ...state,
                usedLetters: [...state.usedLetters, action.usedLetter],
                revealedLetters
            }
        default:
            return state;
    }
};

export default gamesReducer;