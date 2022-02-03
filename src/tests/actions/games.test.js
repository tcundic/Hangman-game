import { endTiming, incrementError, setQuote, setUserName, startTiming } from "../../actions/games";

test('should setup set user name action object', () => {
    const action = setUserName('username');

    expect(action).toEqual({
        type: 'SET_USERNAME',
        userName: 'username'
    });
});

test('should setup set quote action object', () => {
    const action = setQuote('123abc', 'quote');

    expect(action).toEqual({
        type: 'SET_QUOTE',
        quoteId: '123abc',
        content: 'quote'
    });
});

test('should setup increment error action object', () => {
    const action = incrementError();

    expect(action).toEqual({
        type: 'INCREMENT_ERROR'
    });
});

test('should setup start timing action object', () => {
    const action = startTiming();

    expect(action).toEqual({
        type: 'START_TIMING',
        startTime: expect.any(Number)
    });
});

test('should setup end timing action object', () => {
    const action = endTiming();

    expect(action).toEqual({
        type: 'END_TIMING',
        endTime: expect.any(Number)
    });
});
