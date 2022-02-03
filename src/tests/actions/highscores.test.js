import { setHighscores } from "../../actions/highscores";

test('should setup set highscores action object', () => {
    const action = setHighscores([]);

    expect(action).toEqual({
        type: 'SET_HIGHSCORES',
        highscores: []
    });
});