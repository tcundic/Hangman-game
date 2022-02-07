import React from "react";
import { shallow } from "enzyme";
import Sprite from "../../utils/Sprite";

test('should render Sprite correctly', () => {
    const wrapper = shallow(<Sprite
        filename="file"
        x="1"
        y="1"
        width="1"
        height="1"
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should return null if no arguments are passed', () => {
    const wrapper = shallow(<Sprite />);
    expect(wrapper).toMatchSnapshot();
});