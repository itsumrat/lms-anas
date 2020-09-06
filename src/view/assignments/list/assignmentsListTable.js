import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/assignments/list/assignmentsListActions';
import destroyActions from 'modules/assignments/destroy/assignmentsDestroyActions';
import selectors from 'modules/assignments/list/assignmentsListSelectors';
import destroySelectors from 'modules/assignments/destroy/assignmentsDestroySelectors';
import model from 'modules/assignments/assignmentsModel';
import AssignmentsSelectors from 'modules/assignments/assignmentsSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';
import LevelListItem from 'view/level/list/levelListItem';
import UploadFile from 'modules/shared/upload/upload';
const { fields } = model;

class AssignmentsListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  componentWillMount() {}
  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.id.forTable(),
    fields.name.forTable(),
    fields.file.forTable({
      render: (_, record) => {
        return (
          <a
            href={UploadFile.getPath(record.payload[0])}
            target="_blank"
          >
            {record.payload[0]
              ? record.payload[0].originalname
              : ''}
          </a>
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

    fields.classroom.forTable({
      render: (_, record) => {
        return (
          <div>
            {record.classroom_teacher_matter.classroom.name}
          </div>
        );
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
          <Link to={`/assignments/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/assignments/${record.id}/edit`}>
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
    hasPermissionToEdit: AssignmentsSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: AssignmentsSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(AssignmentsListTable);
