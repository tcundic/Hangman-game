import { stopTiming, incrementError, setQuote, setUserName, startTiming, useLetter } from "../../actions/games";

const timeNow = () => new Date().getTime();

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
    const mockDate = new Date(1643919358043);
    const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate);

    const action = startTiming();

    expect(action).toEqual({
        type: 'START_TIMING',
        startTime: 1643919358043
    });

    spy.mockRestore();
});

test('should setup end timing action object', () => {
    const mockDate = new Date(1643919374122);
    const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate);
    const action = stopTiming();

    expect(action).toEqual({
        type: 'END_TIMING',
        endTime: 1643919374122
    });

    spy.mockRestore();
});


test('should setup use letter action object', () => {
    const action = useLetter('A');

    expect(action).toEqual({
        type: 'USE_LETTER',
        usedLetter: 'A'
    });
});
