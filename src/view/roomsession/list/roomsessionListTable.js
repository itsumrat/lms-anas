import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/roomSession/list/roomsessionListActions';
import destroyActions from 'modules/roomSession/destroy/roomsessionDestroyActions';
import selectors from 'modules/roomSession/list/roomsessionListSelectors';
import destroySelectors from 'modules/roomSession/destroy/roomsessionDestroySelectors';
import model from 'modules/roomSession/roomsessionModel';
import RoomsessionSelectors from 'modules/roomSession/roomSessionSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';
import TeachersListItem from 'view/teachers/list/teachersListItem';
import ClassroomListItem from 'view/classroom/list/classroomListItem';
import LevelListItem from 'view/level/list/levelListItem';
import SchoolYearListItem from 'view/schoolYear/list/schoolYearListItem';
import CycleListItem from 'view/cycle/list/cycleListItem';
import SectorListItem from 'view/sector/list/sectorListItem';
import MatterListItem from 'view/matter/list/matterListItem';
import ElementListItem from 'view/element/list/elementListItem';
import WeekListItemItem from 'view/week/list/weekListItem';

const { fields } = model;

class RoomsessionListTable extends Component {
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
    fields.week.forTable({
      render: (_, record) => {
        return <WeekListItemItem value={record.week} />;
      },
    }),
    fields.schoolYear.forTable({
      render: (_, record) => {
        return (
          <SchoolYearListItem
            value={record.week.school_year}
          />
        );
      },
    }),
    fields.name.forTable(),
    fields.cycle.forTable({
      render: (_, record) => {
        return (
          <CycleListItem
            value={
              record.classroom_teacher_matter.classroom
                .level_sector.level.cycle
            }
          />
        );
      },
    }),
    fields.level.forTable({
      render: (_, record) => {
        return (
          <LevelListItem
            value={
              record.classroom_teacher_matter.classroom
                .level_sector.level
            }
          />
        );
      },
    }),
    fields.sector.forTable({
      render: (_, record) => {
        return (
          <SectorListItem
            value={
              record.classroom_teacher_matter.classroom
                .level_sector.sector
            }
          />
        );
      },
    }),
    fields.classroom.forTable({
      render: (_, record) => {
        return (
          <ClassroomListItem
            value={
              record.classroom_teacher_matter.classroom
            }
          />
        );
      },
    }),
    fields.start_time.forTable(),
    fields.end_time.forTable(),
    fields.day.forTable({
      render: (_, record) => {
        return (
          <div>
            {' '}
            {fields.day.options[record.day].label}{' '}
          </div>
        );
      },
    }),
    fields.teacher.forTable({
      render: (_, record) => {
        return (
          <TeachersListItem
            value={record.classroom_teacher_matter.teacher}
          />
        );
      },
    }),
    fields.matter.forTable({
      render: (_, record) => {
        return (
          <MatterListItem
            value={record.classroom_teacher_matter.matter}
          />
        );
      },
    }),
    fields.element.forTable({
      render: (_, record) => {
        return <ElementListItem value={record.element} />;
      },
    }),
    fields.createdAt.forTable(),
    fields.updatedAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/roomsession/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/roomsession/${record.id}/edit`}>
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
    hasPermissionToEdit: RoomsessionSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: RoomsessionSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(RoomsessionListTable);
