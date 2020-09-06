import { Table, Popconfirm, Col, Row } from 'antd';
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
import './course-card.styles.scss';
const { fields } = model;

class AssignmentsListShow extends Component {
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
      <div className="courses p-5">
        <div className="row">
          {rows
            ? rows.map((item, index) => {
                return (
                  <div
                    className="col-md-4 col-lg-3 mb-3"
                    key={index}
                  >
                    <div className="course-card">
                      <div className="course-thumbnail_container">
                        {item.types_assignment.id === 1 ? (
                          <img
                            className="course-thumbnail"
                            src={require('../img/course.png')}
                            alt=""
                          />
                        ) : item.types_assignment.id ===
                          2 ? (
                          <img
                            className="course-thumbnail"
                            src={require('../img/exam.png')}
                            alt=""
                          />
                        ) : (
                          <img
                            className="course-thumbnail"
                            src={require('../img/exercise.png')}
                            alt=""
                          />
                        )}
                      </div>

                      <div className="course-card-description_container">
                        <div className="course-card-description">
                          <div className="course-is-about">
                            <p style={{ float: 'left' }}>
                              {i18n(
                                'entities.Matter.fields.subname',
                              )}
                              :
                              {
                                item
                                  .classroom_teacher_matter
                                  .matter.name
                              }
                            </p>
                            <p style={{ float: 'right' }}>
                              {i18n(
                                'entities.Classroom.fields.subname',
                              )}
                              :
                              {
                                item
                                  .classroom_teacher_matter
                                  .classroom.name
                              }
                            </p>
                            <div
                              style={{ clear: 'both' }}
                            ></div>
                          </div>
                          <h5 className="course-card-title">
                            <a
                              href={UploadFile.getPath(
                                item.payload[0],
                              )}
                              target="_blank"
                            >
                              {item.payload[0]
                                ? item.payload[0]
                                    .originalname
                                : item.name}
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="course-rating-and-price d-flex justify-content-between py-2">
                        <Link
                          to={`/assignments/${item.id}`}
                        >
                          {i18n('common.view')}
                        </Link>
                        &nbsp;
                        {this.props.hasPermissionToEdit && (
                          <Link
                            to={`/assignments/${item.id}/edit`}
                          >
                            {i18n('common.edit')}
                          </Link>
                        )}
                        &nbsp;
                        {this.props
                          .hasPermissionToDestroy && (
                          <Popconfirm
                            title={i18n(
                              'common.areYouSure',
                            )}
                            onConfirm={() =>
                              this.doDestroy(item.id)
                            }
                            okText={i18n('common.yes')}
                            cancelText={i18n('common.no')}
                          >
                            <ButtonLink>
                              {i18n('common.destroy')}
                            </ButtonLink>
                          </Popconfirm>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
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

export default connect(select)(AssignmentsListShow);
