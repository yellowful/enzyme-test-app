import React from "react";
import {shallow} from 'enzyme';
import CounterButton from "./CounterButton";

// 測試count的initial value是1
// it('not clicked yet',()=>{
//     const shallowWrapper = shallow(<CounterButton />);
//     expect(shallowWrapper.state().count).toEqual(1);
// })

// 測試點button後的state
it('state test',()=>{
    const shallowWrapper = shallow(<CounterButton />);
    expect(shallowWrapper).toMatchSnapshot();
    // 找到button的element，模擬click
    shallowWrapper.find('button').simulate('click');
    expect(shallowWrapper.state().count).toBe(2);
    shallowWrapper.find('button').simulate('click');
    expect(shallowWrapper.state().count).toBe(3);
})

// 測試setState
// it('state test',()=>{
//     const mountWrapper = mount(<CounterButton />);
//     mountWrapper.setState({ count:4 });
//     expect(mountWrapper.text()).toContain(4);
//     expect(mountWrapper).toMatchSnapshot();
// })

// 測試render完的element的props
it('props test',()=>{
    
    const shallowWrapper = shallow(<CounterButton color='red' size='big' />);
    
    // console.log('props',shallowWrapper.props());
    expect(shallowWrapper.props().color).toBe('red');
    // 這裡的.props是指這個component return出來的element裡面的props，而不是<CounterButton />裡面的props
    expect(shallowWrapper.props().shape).toBe('big');
})