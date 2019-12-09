import React, { Component } from 'react';
import store from '../../store/index'
class OtherHome extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
        return (
            <div>
                <h1 className='hh-green'>我是h2页面</h1>
                <button>{this.state.inputValue}</button> 
                <ul>
                    {this.state.list.map((item , index) =>{
                    return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
    storeChange(){
        this.setState(store.getState())
    }
    
}
 
export default OtherHome;