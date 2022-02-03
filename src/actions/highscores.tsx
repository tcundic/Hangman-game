import Highscore from "../models/highscore";

// SET_HIGHSCORES
export const setHighscores = (highscores: Array<Highscore>) => ({
    type: 'SET_HIGHSCORES',
    highscores
});