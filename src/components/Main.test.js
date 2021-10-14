import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

it('container tests',() => {
    const mockProps = {
        robots:[],
        searchField:'',
        onSearchChange:jest.fn(),
        isPending:false,
        onRequestRobots:jest.fn(),
    }
    expect(shallow(<Main {...mockProps} />)).toMatchSnapshot();
})

it('pending tests',() => {
    const mockProps = {
        robots:[],
        searchField:'',
        onSearchChange:jest.fn(),
        isPending:true,
        onRequestRobots:jest.fn(),
    }
    expect(shallow(<Main {...mockProps} />)).toMatchSnapshot();
})

it('robot filter tests',() => {
    const mockProps = {
        robots:[{
            id:1,
            name:'Leanne Graham',
            email:'Sincere@april.biz'
        },{
            id:2,
            name:'Ervin Howell',
            email:'Shanna@melissa.tv'
        },{
            id:3,
            name:'Clementine Bauch',
            email:'Nathan@yesenia.net'
        }],
        searchField:'er',
        onSearchChange:jest.fn(),
        isPending:false,
        onRequestRobots:jest.fn(),
    }
    const wraper = shallow(<Main {...mockProps} />);
    const instance = wraper.instance();
    expect(instance.robotFilter(mockProps.robots,mockProps.searchField)).toEqual([{
        id:2,
        name:'Ervin Howell',
        email:'Shanna@melissa.tv'
    }]);
    expect(instance.robotFilter(mockProps.robots,'lalala')).toEqual([]);
})