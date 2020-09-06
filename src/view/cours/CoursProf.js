import React, { Component } from 'react';
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
  Upload,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './Cours.css';

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 30,
  },
};

const columns = [
  {
    title: 'Nom du Fichier',
    dataIndex: 'NomFichier',
    key: 'NomFichier',
  },
  {
    title: 'Type du Fichier',
    dataIndex: 'Typefichier',
    key: 'Typefichier',
  },
  {
    title: 'Lien Du Fichier',
    dataIndex: 'liendufichier',
    key: 'liendufichier',
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

const props = {
  name: 'file',
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      message.success(
        `${info.file.name} file uploaded successfully`,
      );
    } else if (info.file.status === 'error') {
      message.error(
        `${info.file.name} file upload failed.`,
      );
    }
  },
};

const data = [
  {
    key: 1,
    NomFichier: 'FicheirZZAZQS23',
    Typefichier: 'Cours',
    liendufichier: 'File',
  },
];

export default class CoursProf extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h2
            className="text-center"
            style={{ color: '#1890ff' }}
          >
            {' '}
            Ajout Ficher{' '}
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
            <Form.Item label="Nom du Fichier">
              <Input />
            </Form.Item>

            <Form.Item label="Fichier">
              <Upload {...props}>
                <Button>
                  <UploadOutlined /> Cliquer Pour Joindre
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Type de Fichier">
              <Select>
                <Select.Option value="Cours">
                  Cours
                </Select.Option>
                <Select.Option value="Devoir">
                  Devoir
                </Select.Option>
                <Select.Option value="Exercices">
                  Exercices
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                className="btnbtn"
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
