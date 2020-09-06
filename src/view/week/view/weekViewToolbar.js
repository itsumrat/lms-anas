import { Button, Popconfirm } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "i18n";
import Toolbar from "view/shared/styles/Toolbar";
import { connect } from "react-redux";
import WeekSelectors from "modules/week/weekSelectors";
import destroySelectors from "modules/week/destroy/weekDestroySelectors";
import destroyActions from "modules/week/destroy/weekDestroyActions";
import auditLogSelectors from "modules/auditLog/auditLogSelectors";

class WeekViewToolbar extends Component {
  id = () => {
    return this.props.match.params.id;
  };

  doDestroy = () => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(this.id()));
  };

  render() {
    const {
      hasPermissionToEdit,
      hasPermissionToAuditLogs,
      hasPermissionToDestroy,
      destroyLoading,
    } = this.props;

    return (
      <Toolbar>
        {hasPermissionToEdit && (
          <Link to={`/week/${this.id()}/edit`}>
            <Button type="primary" icon="edit">
              {i18n("common.edit")}
            </Button>
          </Link>
        )}

        {hasPermissionToDestroy && (
          <Popconfirm
            title={i18n("common.areYouSure")}
            onConfirm={() => this.doDestroy()}
            okText={i18n("common.yes")}
            cancelText={i18n("common.no")}
          >
            <Button type="primary" icon="delete" disabled={destroyLoading}>
              {i18n("common.destroy")}
            </Button>
          </Popconfirm>
        )}

        {hasPermissionToAuditLogs && (
          <Link to={`/audit-logs?entityId=${encodeURIComponent(this.id())}`}>
            <Button icon="file-search">{i18n("auditLog.menu")}</Button>
          </Link>
        )}
      </Toolbar>
    );
  }
}

function select(state) {
  return {
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(state),
    hasPermissionToEdit: WeekSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy: WeekSelectors.selectPermissionToDestroy(state),
    destroyLoading: destroySelectors.selectLoading(state),
  };
}

export default connect(select)(WeekViewToolbar);
