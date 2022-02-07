import React from "react";
import { shallow } from "enzyme";
import { LettersButtons } from "../../components/LettersButtons";
import * as http from "../../utils/http";
import * as utils from "../../utils/utilMethods";

const dispatch = jest.fn();
const startGame = () => {
};

const game = {
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

const highscores = [];

test('should render LetterButtons correctly', () => {
    const wrapper = shallow(<LettersButtons dispatch={dispatch} startGame={startGame} game={game}
                                            highscores={highscores}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should send statistics on game finish', () => {
    const wrapper = shallow(<LettersButtons dispatch={dispatch} startGame={startGame} game={game}
                                            highscores={highscores}/>);

    const sendStatistics = jest.spyOn(http, 'sendStatistics');
    sendStatistics.mockReturnValue('');

    wrapper.setProps({
        game: {
            quoteId: "123",
            content: "New quote",
            userName: "username",
            duration: 100,
            errors: 2,
            length: 9,
            uniqueCharacters: 7,
            usedLetters: ['n', 'x', 'y', 'e', 'w', 'q', 'u', 'o', 't'],
            revealedLetters: ['n', 'e', 'w', 'q', 'u', 'o', 't']
        }
    });

    expect(sendStatistics).toHaveBeenCalled();
});

test('should dispatch events on click', () => {
    const sendStatistics = jest.spyOn(utils, 'isFinishedGame');
    sendStatistics.mockReturnValue(true);

    const mockDate = new Date(1643919358043);
    const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate);

    const wrapper = shallow(<LettersButtons
        dispatch={dispatch}
        startGame={startGame}
        game={game}
        highscores={highscores}/>);

    wrapper.find('LetterButton').first().simulate('click', {
        target: {
            textContent: 'A'
        }
    });

    expect(dispatch).toHaveBeenCalledWith({
        type: 'USE_LETTER',
        usedLetter: 'A'
    });

    expect(dispatch).toHaveBeenCalledWith({
        type: 'STOP_TIMING',
        endTime: 1643919358043
    });
});
