import React from "react";
import { shallow } from "enzyme";
import { HangmanSprites } from "../../components/HangmanSprites";

test('should render HangmanSprites correctly', () => {
    let wrapper = shallow(<HangmanSprites game={{errors: 0}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 1}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 2}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 3}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 4}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 5}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 6}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 7}}/>);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<HangmanSprites game={{errors: 11}}/>);
    expect(wrapper).toMatchSnapshot();
});
