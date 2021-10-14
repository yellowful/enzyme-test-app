import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

it('test of Scroll',()=>{
    expect(shallow(<Scroll />)).toMatchSnapshot();
})