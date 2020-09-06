import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/week/list/weekListActions';
import destroyActions from 'modules/week/destroy/weekDestroyActions';
import selectors from 'modules/week/list/weekListSelectors';
import destroySelectors from 'modules/week/destroy/weekDestroySelectors';
import model from 'modules/week/weekModel';
import WeekSelectors from 'modules/week/weekSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';
import ClassroomListItem from 'view/classroom/list/classroomListItem';
import MatterListItem from 'view/matter/list/matterListItem';
import TeachersListItem from 'view/teachers/list/teachersListItem';
import LevelListItem from 'view/level/list/levelListItem';
import SectorListItem from 'view/sector/list/sectorListItem';
import CycleListItem from 'view/cycle/list/cycleListItem';
import StudentsListItem from 'view/students/list/studentsListItem';
import SchoolYearListItem from 'view/schoolYear/list/schoolYearListItem';

const { fields } = model;

class WeekListTable extends Component {
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
    fields.name.forTable({
      render: (_, record) => {
        return <div> {record.name} </div>;
      },
    }),
    fields.schoolYear.forTable({
      render: (_, record) => {
        return (
          <SchoolYearListItem value={record.school_year} />
        );
      },
    }),
    fields.start_date.forTable({
      render: (_, record) => {
        return <div> {record.start_date} </div>;
      },
    }),
    fields.end_date.forTable({
      render: (_, record) => {
        return <div> {record.end_date} </div>;
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
          <Link to={`/week/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/week/${record.id}/edit`}>
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
    hasPermissionToEdit: WeekSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: WeekSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(WeekListTable);
