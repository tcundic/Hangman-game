import gamesReducer from "../../reducers/games";

const defaultState = {
    quoteId: "",
    content: "",
    userName: "",
    duration: 0,
    errors: 0,
    length: 0,
    uniqueCharacters: 0
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
    }

    const state = gamesReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        quoteId: '1',
        content: "New quote"
    });
});

test('should increment errors', () => {
    const action = {
        type: 'INCREMENT_ERROR',
    }

    const state = gamesReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        errors: 1
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
        type: 'END_TIMING',
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
