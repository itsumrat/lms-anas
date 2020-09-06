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
  TimePicker,
} from 'antd';
import moment from 'moment';
import './sessions.css';

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 30,
  },
};

const columns = [
  {
    title: 'Heure debut',
    dataIndex: 'HDebut',
    key: 'HDebut',
  },
  { title: 'Heure fin', dataIndex: 'HFin', key: 'HFin' },
  {
    title: 'Jours',
    dataIndex: 'Jours',
    key: 'Jours',
  },
  {
    title: 'Niveau',
    dataIndex: 'Niveau',
    key: 'Niveau',
  },
  {
    title: 'Enseignant',
    dataIndex: 'Enseignant',
    key: 'Enseignant',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <div>
        {' '}
        <button className="btn btn-link">Modifier</button>
        <button className="btn btn-danger">
          Supprimer
        </button>{' '}
      </div>
    ),
  },
];

const data = [
  {
    key: 1,
    HDebut: '10:00',
    HFin: '12:00',
    Jours: 'Lundi',
    Niveau: '2BAC-SM',
    Enseignant: 'Omar Walidi',
  },
];

function onChange(time, timeString) {}

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
            Ajout des Sessions (Emploi du temps){' '}
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
            <Form.Item label="Heure debut">
              <TimePicker
                onChange={onChange}
                defaultOpenValue={moment(
                  '00:00:00',
                  'HH:mm:ss',
                )}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item label="Heure fin">
              <TimePicker
                onChange={onChange}
                defaultOpenValue={moment(
                  '00:00:00',
                  'HH:mm:ss',
                )}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item label="Jours">
              <Select>
                <Select.Option value="Dimanche">
                  Dimanche
                </Select.Option>
                <Select.Option value="Lundi">
                  Lundi
                </Select.Option>
                <Select.Option value="...">
                  ...
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Niveau">
              <Select>
                <Select.Option value="2BAC-SM">
                  2BAC-SM
                </Select.Option>
                <Select.Option value="1BAC-EX">
                  1BAC-EX
                </Select.Option>
                <Select.Option value="...">
                  ...
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Enseignant">
              <Select>
                <Select.Option value="Omar Bentamir">
                  Omar Bentamir
                </Select.Option>
                <Select.Option value="Khalid Thari">
                  Khalid Thari
                </Select.Option>
                <Select.Option value="...">
                  ...
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                name="btnbtn"
                type="primary"
                htmlType="submit"
              >
                Ajouter
              </Button>
              <Button htmlType="button">Modifier</Button>
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
