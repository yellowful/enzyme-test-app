import React from "react";
import {shallow} from 'enzyme';
import CounterButton from "./CounterButton";

// it('not clicked yet',()=>{
//     const shallowWrapper = shallow(<CounterButton />);
//     expect(shallowWrapper.state().count).toEqual(1);
// })

it('state test',()=>{
    const shallowWrapper = shallow(<CounterButton />);
    expect(shallowWrapper).toMatchSnapshot();
    shallowWrapper.find('button').simulate('click');
    expect(shallowWrapper.state().count).toBe(2);
    shallowWrapper.find('button').simulate('click');
    expect(shallowWrapper.state().count).toBe(3);
})

// it('state test',()=>{
//     const mountWrapper = mount(<CounterButton />);
//     mountWrapper.setState({ count:4 });
//     expect(mountWrapper.text()).toContain(4);
//     expect(mountWrapper).toMatchSnapshot();
// })

it('props test',()=>{
    
    const shallowWrapper = shallow(<CounterButton color='red' size='big' />);
    
    // console.log('props',shallowWrapper.props());
    expect(shallowWrapper.props().color).toBe('red');
    // 這裡的.props是指這個component return出來的element裡面的props，而不是<CounterButton />裡面的props
    expect(shallowWrapper.props().shape).toBe('big');
})