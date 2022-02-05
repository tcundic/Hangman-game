// Games Reducer

import Game from "../models/game";
import GameAction from "../models/gameAction";
import {getUniqueLetters} from "../utils/utilMethods";

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
            const uniqueCharacters = getUniqueLetters(action.content || "").size;
            return {
                ...state,
                quoteId: action.quoteId,
                content: action.content,
                length: action.content?.length,
                uniqueCharacters
            }
        case 'RESET_GAME':
            return {
                ...state,
                usedLetters: [],
                revealedLetters: [],
                errors: 0,
                duration: action.startTime
            }
        case 'START_TIMING':
            return {
                ...state,
                duration: action.startTime
            }
        case 'STOP_TIMING':
            return {
                ...state,
                duration: action.endTime ? action.endTime - state.duration : state.duration
            }
        case 'USE_LETTER':
            const revealedLetters = state.revealedLetters;
            const usedLetter = action.usedLetter?.toLowerCase();
            let quote = getUniqueLetters(state.content);
            let errors = state.errors;

            if (usedLetter && !quote.has(usedLetter)) {
                errors = ++errors;
            }

            if (usedLetter && quote.has(usedLetter) && revealedLetters.indexOf(usedLetter) === -1) {
                revealedLetters.push(usedLetter)
            }

            return {
                ...state,
                usedLetters: [...state.usedLetters, action.usedLetter],
                revealedLetters,
                errors
            }
        default:
            return state;
    }
};

export default gamesReducer;