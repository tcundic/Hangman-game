import {
    getNewQuote,
    getUniqueLetters,
    isFinishedGame,
    mapDispatchToProps,
    mapStateToProps
} from "../../utils/utilMethods";
import { getRandomQuote, httpClient } from "../../utils/http";

const QUOTE = 'New quote';

test('should get set of unique letters back', () => {
    const uniqueLetters = getUniqueLetters(QUOTE);

    expect(uniqueLetters.size).toBe(7);
});

test('should get quote from helper method', () => {
    let mockPost = jest.spyOn(httpClient('abc'), 'get');

    const response = {
        data: {
            _id: '1a',
            content: 'My quote'
        }
    };

    mockPost.mockImplementation(() => Promise.resolve(response));

    const expectedResult = {id: '1a', content: 'My quote'};

    getNewQuote().then((res) => expect(res).toEqual(expectedResult));

    jest.clearAllMocks();
});

test('should be finished game all letters are revealed', () => {
    const isFinished = isFinishedGame(QUOTE, ['n', 'e', 'w', 'q', 'u', 'o', 't']);

    expect(isFinished).toBe(true);
});

test('should dispatch actions correctly', () => {
    const mockDate = new Date(1643919358043);
    const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate);

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).startGame('1a', 'quote');
    expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'RESET_GAME',
        startTime: mockDate.getTime()
    });

    mapDispatchToProps(dispatch).startGame('1a', 'quote');
    expect(dispatch.mock.calls[1][0]).toEqual({
        type: 'SET_QUOTE',
        quoteId: '1a',
        content: 'quote'
    });

    spy.mockRestore();
});

test('should show game and highscore states', () => {
    const defaultGame = {
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

    const defaultHighscores = [];

    const state = mapStateToProps({game: defaultGame, highscores: defaultHighscores});

    expect(state).toEqual({game: defaultGame, highscores: defaultHighscores});
});