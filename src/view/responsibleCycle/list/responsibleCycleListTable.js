import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/responsibleCycle/list/responsibleCycleListActions';
import destroyActions from 'modules/responsibleCycle/destroy/responsibleCycleDestroyActions';
import selectors from 'modules/responsibleCycle/list/responsibleCycleListSelectors';
import destroySelectors from 'modules/responsibleCycle/destroy/responsibleCycleDestroySelectors';
import model from 'modules/responsibleCycle/responsibleCycleModel';
import ResponsibleCycleSelectors from 'modules/responsibleCycle/responsibleCycleSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';

const { fields } = model;

class ResponsibleCycleListTable extends Component {
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
    fields.responsible.forTable({
      render: (_, record) => {
        return (
          <p>
            {' '}
            {record.responsible.first_name}{' '}
            {record.responsible.last_name}{' '}
          </p>
        );
      },
    }),
    fields.cycle.forTable({
      render: (_, record) => {
        return <p> {record.cycle.name} </p>;
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
          <Link to={`/responsibleCycle/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/responsibleCycle/${record.id}/edit`}
            >
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
    hasPermissionToEdit: ResponsibleCycleSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: ResponsibleCycleSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(ResponsibleCycleListTable);
