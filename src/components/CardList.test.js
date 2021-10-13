import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList"

it('mocking props',()=>{
    const robots = [
        {
            id:10,
            name:"jack",
            email:"jack@gmail.com"
        }
    ]
    expect(shallow(<CardList robots={robots} />)).toMatchSnapshot();
})