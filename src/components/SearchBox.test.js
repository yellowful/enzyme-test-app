import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it('tests of SearchBox',()=>{
    expect(shallow(<SearchBox />)).toMatchSnapshot();
})