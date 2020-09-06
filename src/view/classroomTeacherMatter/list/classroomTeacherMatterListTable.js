import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListActions';
import destroyActions from 'modules/classroomTeacherMatter/destroy/classroomTeacherMatterDestroyActions';
import selectors from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListSelectors';
import destroySelectors from 'modules/classroomTeacherMatter/destroy/classroomTeacherMatterDestroySelectors';
import model from 'modules/classroomTeacherMatter/classroomTeacherMatterModel';
import ClassroomTeacherMatterSelectors from 'modules/classroomTeacherMatter/classroomTeacherMatterSelectors';
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

const { fields } = model;

class ClassroomTeacherMatterListTable extends Component {
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
    fields.schoolYear.forTable({
      render: (_, record) => {
        return (
          <MatterListItem value={record.school_year} />
        );
      },
    }),
    fields.matter.forTable({
      render: (_, record) => {
        return <MatterListItem value={record.matter} />;
      },
    }),
    fields.teacher.forTable({
      render: (_, record) => {
        return <TeachersListItem value={record.teacher} />;
      },
    }),
    fields.cycle.forTable({
      render: (_, record) => {
        return (
          <CycleListItem
            value={
              record.classroom.level_sector.level.cycle
            }
          />
        );
      },
    }),
    fields.level.forTable({
      render: (_, record) => {
        return (
          <LevelListItem
            value={record.classroom.level_sector.level}
          />
        );
      },
    }),
    fields.sector.forTable({
      render: (_, record) => {
        return (
          <SectorListItem
            value={record.classroom.level_sector.sector}
          />
        );
      },
    }),
    fields.classroom.forTable({
      render: (_, record) => {
        return (
          <ClassroomListItem value={record.classroom} />
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
          <Link to={`/classroomTeacherMatter/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/classroomTeacherMatter/${record.id}/edit`}
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
    hasPermissionToEdit: ClassroomTeacherMatterSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: ClassroomTeacherMatterSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(
  ClassroomTeacherMatterListTable,
);
