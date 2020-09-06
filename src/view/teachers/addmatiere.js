import React, { Component } from 'react';
import Header from 'view/layout/Header';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Table,
} from 'antd';
import './Users.css';

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 30,
  },
};

const columns = [
  {
    title: 'Matière',
    dataIndex: 'Matiere',
    key: 'Matiere',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (<div> <button className='btn btn-link'>Modifier</button>
      <button className='btn btn-danger'>Supprimer</button> </div>),
  },
];

const data = [
  {
    key: 1,
    Matiere: 'Mathematique',
  },
];

export default class addstudents extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="container-fluid">
          <h2
            className="text-center"
            style={{ color: '#1890ff' }}
          >
            {' '}
            Ajout des Matières{' '}
          </h2>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="Nom de la matière">
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button className="btnbtn" type="primary" htmlType="submit">
                Ajouter
              </Button>
              <Button htmlType="button">
                Modifier
              </Button>
            </Form.Item>
          </Form>
          <br />
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>
                  {record.description}
                </p>
              ),
              rowExpandable: (record) =>
                record.name !== 'Not Expandable',
            }}
            dataSource={data}
          />
        </div>
      </React.Fragment>
    );
  }
}
