import React from "react";
import { shallow } from "enzyme";
import Card from './Card';

it('shallow test',() => {
    expect(shallow(<Card />)).toMatchSnapshot();
})
