import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col ,Button , Timeline } from 'antd';
import 'antd/dist/antd.css'

class HhButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: 2
         }
    }
    render() { 
        const { inputValue } = this.state;
        return ( 
                <div className="App">
                    <Button type="primary">Button</Button>
                    <Row>
                        <Col span={12}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={this.onChange.bind(this)}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                        </Col>
                        <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange.bind(this)}
                        />
                        </Col>
                    </Row>

                    <Timeline>
                        <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                        <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
                        <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
                        <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                    </Timeline>
                </div>
         );
    }
    onChange(value){
        this.setState({
          inputValue: value,
        });
      }
}
 
export default HhButton;