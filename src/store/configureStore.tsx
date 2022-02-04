// Store creation

import {combineReducers, createStore} from "redux";
import gameReducer from '../reducers/games';
import highscoresReducer from '../reducers/highscores';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            game: gameReducer,
            highscores: highscoresReducer
        })
    );

    return store;
};

export default configureStore;