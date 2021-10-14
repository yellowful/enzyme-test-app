import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundry";

describe('Tests of Error Boundry',()=>{
    const wraper = shallow(<ErrorBoundary />)
    // 將class ErrorBoundry instantiate，如此等一下才可以呼叫this.setState
    const instance = wraper.instance();
    // 所有測試前先把state設成false
    beforeEach(()=>{
        instance.setState({hasError:false})
    });
    // 記錄state是false的snapshot
    it('initial state snapshot',()=>{
        expect(wraper).toMatchSnapshot();
    })
    // 記錄state是true的snapshot
    it('state test',()=>{
        instance.setState({hasError:true})
        expect(wraper).toMatchSnapshot();
    })
})