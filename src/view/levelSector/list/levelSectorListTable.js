import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/levelSector/list/levelSectorListActions';
import destroyActions from 'modules/levelSector/destroy/levelSectorDestroyActions';
import selectors from 'modules/levelSector/list/levelSectorListSelectors';
import destroySelectors from 'modules/levelSector/destroy/levelSectorDestroySelectors';
import model from 'modules/levelSector/levelSectorModel';
import LevelSectorSelectors from 'modules/levelSector/levelSectorSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';

const { fields } = model;

class LevelSectorListTable extends Component {
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
    fields.level.forTable({
      render: (_, record) => {
        return <p> {record.level.name} </p>;
      },
    }),
    fields.sector.forTable({
      render: (_, record) => {
        return <p> {record.sector.name} </p>;
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
          <Link to={`/levelSector/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/levelSector/${record.id}/edit`}>
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
    hasPermissionToEdit: LevelSectorSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: LevelSectorSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(LevelSectorListTable);
