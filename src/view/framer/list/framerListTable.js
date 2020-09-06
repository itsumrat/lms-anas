import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/framer/list/framerListActions';
import destroyActions from 'modules/framer/destroy/framerDestroyActions';
import selectors from 'modules/framer/list/framerListSelectors';
import destroySelectors from 'modules/framer/destroy/framerDestroySelectors';
import model from 'modules/framer/framerModel';
import FramerSelectors from 'modules/framer/framerSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';

const { fields } = model;

class FramerListTable extends Component {
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
        return <p> {record.first_name} </p>;
      },
    }),
    fields.last_name.forTable({
      render: (_, record) => {
        return <p> {record.last_name} </p>;
      },
    }),
    fields.email.forTable({
      render: (_, record) => {
        return <p> {record.user.email} </p>;
      },
    }),
    fields.phone.forTable({
      render: (_, record) => {
        return <p> {record.user.phone} </p>;
      },
    }),
    fields.created_at.forTable(),
    fields.updated_at.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/framer/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/framer/${record.id}/edit`}>
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
    hasPermissionToEdit: FramerSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: FramerSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(FramerListTable);
