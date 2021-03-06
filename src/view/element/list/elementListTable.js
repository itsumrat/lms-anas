import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/element/list/elementListActions';
import destroyActions from 'modules/element/destroy/elementDestroyActions';
import selectors from 'modules/element/list/elementListSelectors';
import destroySelectors from 'modules/element/destroy/elementDestroySelectors';
import model from 'modules/element/elementModel';
import ElementSelectors from 'modules/element/elementSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';

const { fields } = model;

class ElementListTable extends Component {
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
    fields.name.forTable(),
    fields.matter.forTable({
      render: (_, record) => {
        return <div> {record.matter.name} </div>;
      },
    }),
    fields.sector.forTable({
      render: (_, record) => {
        return (
          <div> {record.level_sector.sector.name} </div>
        );
      },
    }),
    fields.cycle.forTable({
      render: (_, record) => {
        return (
          <div>
            {' '}
            {record.level_sector.level.cycle.name}{' '}
          </div>
        );
      },
    }),
    fields.level.forTable({
      render: (_, record) => {
        return (
          <div> {record.level_sector.level.name} </div>
        );
      },
    }),
    fields.createdAt.forTable({
      render: (_, record) => {
        return <div> {record.created_at} </div>;
      },
    }),
    fields.updatedAt.forTable({
      render: (_, record) => {
        return <div> {record.updated_at} </div>;
      },
    }),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/element/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/element/${record.id}/edit`}>
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
    hasPermissionToEdit: ElementSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: ElementSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(ElementListTable);
