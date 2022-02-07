import React from "react";
import { shallow } from "enzyme";
import LetterButton from "../../components/LetterButton";

const onClick = () => {};

test('should render LetterButton correctly', () => {
    const wrapper = shallow(<LetterButton letter="A" used={false} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render LetterButton correctly when letter is already used', () => {
    const wrapper = shallow(<LetterButton letter="A" used={true} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
});
