import React, { Component } from 'react';
import {Input  , Button} from 'antd';
import store from '../../store/index'
import 'antd/dist/antd.css'
import './index.css'
import './ui.scss'
class IndexUI extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }
    render() { 
        return ( 
            <div>
                <h1 className='hh-green' onClick={this.props.clickBtn}>{this.props.inputValue}</h1>
                <button type='button' onClick={() => {this.props.addList()}}>{this.state.inputValue}</button>
                <Button onClick={this.confirmEvent.bind(this)}>确定</Button>
                <Input 
                        style={{ width:'250px', marginRight:'10px'}}
                        //---------关键代码----start
                        onChange={this.changeInputValue.bind(this)}
                        //---------关键代码----end
                    />
                <ul>
                    {
                        this.props.list.map((item , index) => {
                            return (<li key={item} onClick={()=>{this.props.deleteList(index)}}>{item}</li>)
                        })
                    }
                </ul>
            </div>
         );
    }
    changeInputValue(e){
        console.log(e.target.value)
    }
    confirmEvent(){
        const action ={
            type:'changeInput',
            value: '111'
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
export default IndexUI;