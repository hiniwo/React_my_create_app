
import React, { Component } from 'react';
import IndexUi from './indexUl'
import OtherHome from './otherhome'
import store from '../../store/index'
import './ui.scss'

class Home extends Component {
    constructor(props) {
        super(props);
         this.state=store.getState();
    }
    componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    shouldComponentUpdate(nextProps , nextState){
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true  
    }
    componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    render() { 

        console.log('render---组件挂载中.......')

        return ( 

            <div>
                <IndexUi 
                    clickBtn={this.clickBtn}
                    list = {this.state.list}
                    deleteList = {this.deleteList.bind(this)}
                    addList = {this.addList.bind(this)}
                    inputValue={this.state.inputValue}/>

                <OtherHome/>
            </div>   
        
         );
    }

    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行')
    }
    sayHello(){
        console.log('hello');
    }
    clickBtn(){
        console.log('clickbtn'); 
    }
    deleteList(index){
        let list = this.state.list;
        list.splice(index , 1);
        this.setState({list})
    }
    addList(){
        let list = this.state.list;
        let len = list.length + 1;
        list.push(len);
        this.setState({list})
    }
}
 
export default Home;