import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('Header test',()=>{
    expect(shallow(<Header />)).toMatchSnapshot();
})