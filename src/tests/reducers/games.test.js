import gamesReducer from "../../reducers/games";

const defaultState = {
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

test('should set default state', () => {
    const state = gamesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultState);
});

test('should set username', () => {
    const action = {
        type: 'SET_USERNAME',
        userName: 'username'
    }

    const state = gamesReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        userName: 'username'
    });
});

test('should set quote', () => {
    const action = {
        type: 'SET_QUOTE',
        quoteId: '1',
        content: "New quote"
    };

    const state = gamesReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        quoteId: '1',
        content: "New quote",
        length: 9,
        uniqueCharacters: 7
    });
});

test('should reset game', () => {
    const action = {
        type: 'RESET_GAME',
        startTime: 1
    };

    const state = gamesReducer({
        ...defaultState,
        usedLetters: ['a'],
        revealedLetters: ['a'],
        errors: 2,
        duration: 222
    }, action);

    expect(state).toEqual({
        ...defaultState,
        duration: 1
    });
});

test('should set duration starting time', () => {
    const startTime = 1643919358043;

    const action = {
        type: 'START_TIMING',
        startTime
    }

    const state = gamesReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        duration: startTime
    });

});
test('should calculate duration', () => {
    const startTime = 1643919358043;
    const endTime = 1643919374122;

    const action = {
        type: 'STOP_TIMING',
        endTime
    }

    const state = gamesReducer({
        ...defaultState,
        duration: startTime
    }, action);

    expect(state).toEqual({
        ...defaultState,
        duration: endTime - startTime
    });
});

test('should use letter', () => {
    const action = {
        type: 'USE_LETTER',
        usedLetter: 'A'
    };

    const state = gamesReducer({
        ...defaultState,
        content: 'ABCD FGH',
        revealedLetters: []
    }, action);

    // letter button should be disabled and
    // letter in quote should be revealed
    expect(state).toEqual({
        ...defaultState,
        content: 'ABCD FGH',
        usedLetters: ['A'],
        revealedLetters: ['a']
    });
});

test('should increment errors', () => {
    const action = {
        type: 'USE_LETTER',
        usedLetter: 'Y'
    };

    const state = gamesReducer({
        ...defaultState,
        content: 'ABCD FGH',
        revealedLetters: []
    }, action);

    // letter button should be disabled and
    // letter in quote should be revealed
    expect(state).toEqual({
        ...defaultState,
        content: 'ABCD FGH',
        usedLetters: ['Y'],
        revealedLetters: [],
        errors: 1
    });
});
