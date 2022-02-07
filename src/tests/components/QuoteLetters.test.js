import React from "react";
import { shallow } from "enzyme";
import { QuoteLetters } from "../../components/QuoteLetters";

const game = {
    quoteId: "",
    content: "New quote!",
    userName: "",
    duration: 0,
    errors: 0,
    length: 0,
    uniqueCharacters: 0,
    usedLetters: [],
    revealedLetters: ['n', 'e']
};

test('should render QuoteLetters correctly', () => {
    let wrapper = shallow(<QuoteLetters game={game} />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<QuoteLetters game={
        {
            ...game,
            revealedLetters: undefined
        }
    } />);
    expect(wrapper).toMatchSnapshot();
});
