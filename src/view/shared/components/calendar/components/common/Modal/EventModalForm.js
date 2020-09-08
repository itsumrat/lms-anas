import React from 'react';
import { Form, Input, Modal, DatePicker, Button } from 'antd';
import moment from 'moment';
const {TextArea} = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const EventModalForm = ({ onSubmit, visible, closeNewEventModal, activeSlot, form, eventType, type}) => {
  console.log(activeSlot)
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
  const { getFieldDecorator } = form;
  return(<>
    <Modal
      destroyOnClose
      centered
      okText="Save"
      okButtonProps={{
        disabled: type === 'teacher'
      }}
      cancelText="Cancel"
      closable={false}
      visible={visible}

      onCancel={closeNewEventModal}
      onOk={()=>onSubmit(form)}
      >
      <Form
        {...formItemLayout}
        layout="vertical"
        style={{padding: '0 10px'}}
      >
        <Form.Item label="Event Name">
          {getFieldDecorator('name', {
            initialValue: eventType ? '' : activeSlot.title,
            rules: [{ required: true, message: 'Please input event name!' }],
          })(<Input disabled = {type === 'teacher'} placeholder="Event Name" />)}
        </Form.Item>
        <Form.Item label="Event Date">
          {getFieldDecorator('event_date', {
            initialValue: [moment(activeSlot.start, dateFormat), moment(activeSlot.end, dateFormat)],
            rules: [{ required: true, message: 'Please input event name!' }],
          })(<RangePicker
            disabled = {type === 'teacher'}
            format={dateFormat}
          />)}
        </Form.Item>
        <Form.Item label="Event Description">
          {getFieldDecorator('event_description', {
            initialValue:  eventType ? '' : activeSlot.title,
            rules: [{ required: true, message: 'Please input event name!' }],
          })(<TextArea disabled = {type === 'teacher'} placeholder="Event Description" rows={4} />)}
        </Form.Item>

      </Form>
    </Modal>
  </>);
}
export default Form.create()(EventModalForm);