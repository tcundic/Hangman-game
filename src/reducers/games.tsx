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
    uniqueCharacters: 0
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
                errors: state.errors++
            }
        case 'START_TIMING':
            return {
                ...state,
                duration: new Date().getTime()
            }
        case 'END_TIMING':
            return {
                ...state,
                duration: new Date().getTime() - state.duration
            }
        default:
            return state;
    }
};

export default gamesReducer;