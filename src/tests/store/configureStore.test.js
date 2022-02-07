import Game from "../../models/game";
import Highscore from "../../models/highscore";
import configureStore from "../../store/configureStore";

test('should configure store with default state', () => {
    const expectedStoreState = {
        game: {
            quoteId: "",
            content: "",
            userName: "",
            duration: 0,
            errors: 0,
            length: 0,
            uniqueCharacters: 0,
            usedLetters: [],
            revealedLetters: []
        },

        highscores: []
    };

    const store = configureStore();

    expect(store).toEqual(
        expect.objectContaining({
            '@@observable': expect.any(Function),
            dispatch: expect.any(Function),
            getState: expect.any(Function),
            replaceReducer: expect.any(Function),
            subscribe: expect.any(Function)
        })
    );

    expect(store.getState()).toEqual(expectedStoreState);
});