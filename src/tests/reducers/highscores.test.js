import highscoresReducer from "../../reducers/highscores";
import highscores from "../fixtures/highscores";

test('should set default state', () => {
    const state = highscoresReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should set sorted highscores', () => {
    const action = {
        type: 'SET_HIGHSCORES',
        highscores
    };

    const state = highscoresReducer(highscores, action);
    expect(state[0].quoteId).toBe("2xpHvSOQMD");
    expect(state[3].quoteId).toBe("XNLGqepInX");
});