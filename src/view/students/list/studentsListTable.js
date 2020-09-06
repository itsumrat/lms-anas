import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/students/list/studentsListActions';
import destroyActions from 'modules/students/destroy/studentsDestroyActions';
import selectors from 'modules/students/list/studentsListSelectors';
import destroySelectors from 'modules/students/destroy/studentsDestroySelectors';
import model from 'modules/students/studentsModel';
import StudentsSelectors from 'modules/students/studentsSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';

const { fields } = model;

class StudentsListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.id.forTable(),
    fields.first_name.forTable({
      render: (_, record) => {
        return <p>{record.first_name}</p>;
      },
    }),
    fields.last_name.forTable({
      render: (_, record) => {
        return <p>{record.last_name}</p>;
      },
    }),
    fields.email.forTable({
      render: (_, record) => {
        return <p>{record.user.email}</p>;
      },
    }),
    fields.phone.forTable({
      render: (_, record) => {
        return <p>{record.user.phone}</p>;
      },
    }),
    fields.code_massar.forTable({
      render: (_, record) => {
        return <p>{record.code_massar}</p>;
      },
    }),
    fields.createdAt.forTable({
      render: (_, record) => {
        return <p>{record.created_at}</p>;
      },
    }),
    fields.updatedAt.forTable({
      render: (_, record) => {
        return <p>{record.updated_at}</p>;
      },
    }),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/students/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/students/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: StudentsSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: StudentsSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(StudentsListTable);
