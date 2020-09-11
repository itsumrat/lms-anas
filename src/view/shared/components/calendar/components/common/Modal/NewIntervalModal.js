import React from 'react';
import moment from 'moment';
// import Modal from 'react-animated-modal';
import { Modal, Form, Input, Button, Radio, TimePicker, Select } from 'antd';
import {userTypes} from '../../Calendar/constants';
import './styles.css';

const {Option} = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const formItemLayout2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};


const  NewIntervalModal = ({visible, setNewEventModalVisible, newIntervals, form}) => {

  const { getFieldDecorator } = form;
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <Modal
      width="80%"
      visible={visible}
      onOk={()=>setNewEventModalVisible(false)}
      onCancel={()=>setNewEventModalVisible(false)}
      footer={false}
      centered
      className="event-modal"
      // closemodal={onClose}
      // type={windowSize.width > windowBreakPoint ? 'zoomIn' : 'fadeInRight'}>
    >

      <Form
        {...formItemLayout}
        layout="vertical"
      >
        <div className="event-modal-container">
          <div className="left-container" style={{backgroundColor: '#273044'}}>
          <span className="event-modal-time">
            {moment(newIntervals.start).format('HH:mm')} -{' '}
            {moment(newIntervals.end).format('HH:mm')}
          </span>
            <Form.Item  label="Start Time">
              {getFieldDecorator('startTime', {
                initialValue: moment(new Date(newIntervals.start)),
                rules: [{ type: 'object', required: true, message: 'Please select time!' }]
              })(<TimePicker format="HH:mm" style={{ width: 150 }}  allowClear={false} />)}
            </Form.Item>
            <Form.Item label="EndTime">
              {getFieldDecorator('endTime', {
                initialValue:moment(new Date(newIntervals.end)),
                rules: [{ type: 'object', required: true, message: 'Please select time!' }]
              })(<TimePicker format="HH:mm" style={{ width: 150 }}   allowClear={false} />)}
            </Form.Item>
            <Form.Item label="Day">
              {getFieldDecorator('day', {
                rules: [{  required: true, message: 'Please select Day!' }]
              })( <Select
                showSearch
                style={{ width: 150 }}
                placeholder="Select a day"
                optionFilterProp="children"
                onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>{
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }

                }
              >
                <Option value="fri">Friday</Option>
                <Option value="sat">Saturday</Option>
                <Option value="sun">Sunday</Option>
                <Option value="tue">Tuesday</Option>
                <Option value="wed">Wednesday</Option>
                <Option value="thu">Thursday</Option>
              </Select>)}
            </Form.Item>

          </div>
        <div className="event-details">
          <Form.Item {...formItemLayout2} label="School Year">
            {getFieldDecorator('school_year', {
              rules: [{  required: true, message: 'Please select Day!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a year"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="2010">2010</Option>
              <Option value="2011">2011</Option>
              <Option value="2012">2012</Option>
              <Option value="2013">2013</Option>
              <Option value="2014">2014</Option>
              <Option value="2015">2015</Option>
            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Room Name">
            {getFieldDecorator('room_name', {
              rules: [{  required: true, message: 'Please select room!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a room"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="room1">Room 1</Option>
              <Option value="room1">Room 2</Option>
              <Option value="room3">Room 3</Option>
            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Cycle">
            {getFieldDecorator('cycle', {
              rules: [{  required: true, message: 'Please select cycle!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a cycle"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="cycle_1">Cycle 1</Option>
              <Option value="cycle_2">Cycle 2</Option>
            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Level">
            {getFieldDecorator('level', {
              rules: [{  required: true, message: 'Please select level!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a level"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="level_1">Level 1</Option>
              <Option value="level_2">Level 2</Option>
            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Sector">
            {getFieldDecorator('sector', {
              rules: [{  required: true, message: 'Please select sector!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a sector"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                console.log(option)
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="sector_1">Sector 1</Option>
              <Option value="sector_2">Sector 2</Option>
            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Class Room">
            {getFieldDecorator('class_room', {
              rules: [{  required: true, message: 'Please select class room!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a class room"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                console.log(option)
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="class_Room_1">Class Room 1</Option>
              <Option value="class_Room_2">Class Room 2</Option>

            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Matter">
            {getFieldDecorator('matter', {
              rules: [{  required: true, message: 'Please select matter!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a matter"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                console.log(option)
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="matter_1">Matter 1</Option>
              <Option value="matter_2">Matter 2</Option>

            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Element">
            {getFieldDecorator('element', {
              rules: [{  required: true, message: 'Please select element!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a element"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                console.log(option)
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="element_1">Element 1</Option>
              <Option value="element_2">Element 2</Option>

            </Select>)}
          </Form.Item>
          <Form.Item {...formItemLayout2} label="Teacher">
            {getFieldDecorator('teacher', {
              rules: [{  required: true, message: 'Please select teacher!' }]
            })( <Select
              showSearch
              style={{ width: 350 }}
              placeholder="Select a class teacher"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>{
                console.log(option)
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

              }
            >
              <Option value="jack">Jack</Option>
              <Option value="Lucy">Lucy</Option>
              <Option value="Tom">Tom</Option>

            </Select>)}
          </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
  );
}

export default  Form.create()(NewIntervalModal);