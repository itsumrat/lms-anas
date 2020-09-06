import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/classroom/list/classroomListActions';
import destroyActions from 'modules/classroom/destroy/classroomDestroyActions';
import selectors from 'modules/classroom/list/classroomListSelectors';
import destroySelectors from 'modules/classroom/destroy/classroomDestroySelectors';
import model from 'modules/classroom/classroomModel';
import ClassroomSelectors from 'modules/classroom/classroomSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import LevelListItem from 'view/level/list/levelListItem';
import UploadFile from 'modules/shared/upload/upload';
import CycleListItem from 'view/cycle/list/cycleListItem';
import SectorListItem from 'view/sector/list/sectorListItem';

const { fields } = model;

class ClassroomListTable extends Component {
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
    fields.cycle.forTable({
      render: (_, record) => {
        return (
          <CycleListItem
            value={record.level_sector.level.cycle}
          />
        );
      },
    }),

    fields.level.forTable({
      render: (_, record) => {
        return (
          <LevelListItem
            value={record.level_sector.level}
          />
        );
      },
    }),

    fields.sector.forTable({
      render: (_, record) => {
        return (
          <SectorListItem
            value={record.level_sector.sector}
          />
        );
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
    fields.created_at.forTable(),
    fields.updated_at.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/classroom/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/classroom/${record.id}/edit`}>
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
    hasPermissionToEdit: ClassroomSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: ClassroomSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(ClassroomListTable);
