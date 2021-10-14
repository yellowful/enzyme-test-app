import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList"

it('mocking props',()=>{
    // mock要傳進去的props
    const robots = [
        {
            id:10,
            name:"jack",
            email:"jack@gmail.com"
        }
    ]
    // 傳進去後就可以記住snapshot了
    expect(shallow(<CardList robots={robots} />)).toMatchSnapshot();
})