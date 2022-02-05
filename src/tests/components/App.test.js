import React from "react";
import { shallow } from "enzyme";
import { App } from "../../components/App";

test('should render App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

test('should redirect user when username is not empty', () => {
    const wrapper = shallow(<App game={{ userName: 'abc'}} />);
    expect(wrapper).toMatchSnapshot();
});