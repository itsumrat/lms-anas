import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/framerMatterCycle/list/framerMatterCycleListActions';
import destroyActions from 'modules/framerMatterCycle/destroy/framerMatterCycleDestroyActions';
import selectors from 'modules/framerMatterCycle/list/framerMatterCycleListSelectors';
import destroySelectors from 'modules/framerMatterCycle/destroy/framerMatterCycleDestroySelectors';
import model from 'modules/framerMatterCycle/framerMatterCycleModel';
import FramerMatterCycleSelectors from 'modules/framerMatterCycle/framerMatterCycleSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import MatterListItem from 'view/matter/list/matterListItem';
import FramerListItem from 'view/framer/list/framerListItem';
import SchoolYearListItem from 'view/schoolYear/list/schoolYearListItem';

const { fields } = model;

class FramerMatterCycleListTable extends Component {
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
          <SchoolYearListItem value={record.school_year} />
        );
      },
    }),
    fields.framer.forTable({
      render: (_, record) => {
        return <FramerListItem value={record.framer} />;
      },
    }),
    fields.matter.forTable({
      render: (_, record) => {
        return <MatterListItem value={record.matter} />;
      },
    }),
    fields.cycle.forTable({
      render: (_, record) => {
        return <MatterListItem value={record.cycle} />;
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
          <Link to={`/framerMatterCycle/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/framerMatterCycle/${record.id}/edit`}
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
    hasPermissionToEdit: FramerMatterCycleSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: FramerMatterCycleSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(FramerMatterCycleListTable);
