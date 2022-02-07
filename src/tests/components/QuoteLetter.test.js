import React from "react";
import { shallow } from "enzyme";
import QuoteLetter from "../../components/QuoteLetter";

test('should render QuoteLetter with hidden letter correctly', () => {
    const wrapper = shallow(<QuoteLetter letter="A" isRevealed={false}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render QuoteLetter with displayed letter correctly', () => {
    const wrapper = shallow(<QuoteLetter letter="A" isRevealed={true}/>);
    expect(wrapper).toMatchSnapshot();
});
