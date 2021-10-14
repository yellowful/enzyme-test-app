import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

describe('container snapshot',()=>{
    // 用來顯示beforeAll~afterEach的執行時機
    beforeAll(()=>{
        console.log('before all')
    });
    beforeEach(()=>{
        console.log('before each')
    });
    afterAll(()=>{
        console.log('after all')
    });
    afterEach(()=>{
        console.log('after each')
    });
    // 以下兩個測試共用的props
    const mockProps = {
        robots:[],
        searchField:'',
        onSearchChange:jest.fn(),
        isPending:false,
        onRequestRobots:jest.fn(),
    }
    // 建立初始狀況的snapshot
    it('container tests',() => {
        expect(shallow(<Main {...mockProps} />)).toMatchSnapshot();
    })
    // 記錄pending狀態改變的snapshot
    it('pending tests',() => {
        mockProps.isPending = true;
        expect(shallow(<Main {...mockProps} />)).toMatchSnapshot();
    })
})

describe('container function tests',()=>{
    it('not pure robot filter tests',() => {
        // 這裡摸擬robots傳了3個items的array回來了，searchField輸入了兩個字母'er'
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
        // 讓enzyme把<Main {...mockProps} /> render出來
        const wraper = shallow(<Main {...mockProps} />);
        // 讓class instanciate，以利等一下呼叫function
        const instance = wraper.instance();
        // 呼叫function，測試結果是不是符合預期
        expect(instance.robotFilter()).toEqual([{
            id:2,
            name:'Ervin Howell',
            email:'Shanna@melissa.tv'
        }]);
    })
})
