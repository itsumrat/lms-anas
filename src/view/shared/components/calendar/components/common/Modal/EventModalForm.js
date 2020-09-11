import React from 'react';
import { Form, Input, Modal, DatePicker, Button } from 'antd';
import moment from 'moment';
const {TextArea} = Input;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const EventModalForm = ({ onSubmit, visible, closeNewEventModal, activeSlot, form, eventType, type}) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24   },
    },
  };
  const { getFieldDecorator } = form;
  return(<>
    <Modal
      title={<p style={{fontSize: 16 ,fontWeight: 600, color: '#273044'}}>ADD EVENT DETAIL</p>}
      destroyOnClose
      centered
      okButtonProps={{
        disabled: type === 'teacher'
      }}
      closable={false}
      visible={visible}
      width={450}
      onCancel={closeNewEventModal}
      onOk={()=>onSubmit(form)}
      footer={[
        <div key="customActionButton">
          <Button style={{backgroundColor: '#273044', color: '#fff', fontWeight: 600}} disabled={type==='teacher'} onClick={()=>onSubmit(form)}>save</Button>
          <Button  style={{backgroundColor: '#273044', color: '#fff', fontWeight: 600}} onClick={closeNewEventModal}>close</Button>
        </div>
      ]}
      >
      <Form
        {...formItemLayout}
        layout="vertical"
        style={{padding: '0 10px'}}
        className="event-form-wrappre"
      >
        <Form.Item  label="Event Name">
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