import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/teachers/list/teachersListActions';
import destroyActions from 'modules/teachers/destroy/teachersDestroyActions';
import selectors from 'modules/teachers/list/teachersListSelectors';
import destroySelectors from 'modules/teachers/destroy/teachersDestroySelectors';
import model from 'modules/teachers/teachersModel';
import TeachersSelectors from 'modules/teachers/teachersSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';
import UploadFile from 'modules/shared/upload/upload';

const { fields } = model;

class TeachersListTable extends Component {
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
    fields.schedule.forTable({
      render: (_, record) => {
        return (
          <a
            href={UploadFile.getPath(record.schedule[0])}
            target="_blank"
          >
            {record.schedule
              ? record.schedule[0].originalname
              : JSON.stringify(record.schedule)}
          </a>
        );
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
          <Link to={`/teachers/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/teachers/${record.id}/edit`}>
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
    hasPermissionToEdit: TeachersSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: TeachersSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(TeachersListTable);
