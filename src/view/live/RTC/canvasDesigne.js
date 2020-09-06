import React, { Component } from 'react';

import { CanvasDesigner } from 'canvas-designer/canvas-designer-widget';
import selectors from 'modules/roomSession/live/roomSessionLiveSelectors';
import selectorsAuth from 'modules/auth/authSelectors';
import { connect } from 'react-redux';
import Roles from 'security/roles';

class CanvasDesigne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designer: new CanvasDesigner(),
    };
  }
  componentDidMount = () => {
    var { designer } = this.state;

    designer.widgetHtmlURL =
      'https://server.ecoletaiba.com/node_modules/canvas-designer/widget.html';
    designer.widgetJsURL =
      'https://server.ecoletaiba.com/node_modules/canvas-designer/widget.min.js';

    var {
      CurrentUser,
      UserRole,
      FullName,
      connection,
    } = this.props;

    if (UserRole == Roles.values.teacher) {
      designer.addSyncListener((data) => {
        connection.socket.emit('dashboardDrawing', data);
      });

      designer.setSelected('pencil');

      designer.setTools({
        pencil: true,
        text: true,
        image: true,
        pdf: true,
        eraser: true,
        line: true,
        arrow: true,
        dragSingle: true,
        dragMultiple: true,
        arc: true,
        rectangle: true,
        quadratic: true,
        bezier: true,
        marker: true,
        lineWidth: true,
        colorsPicker: true,
        extraOptions: false,
        undo: true,
      });
    } else {
      designer.setTools({
        pencil: false,
      });
      designer.setTools('ccc');

      connection.socket.on('dashboardDrawing', function (
        data,
      ) {
        designer.syncData(data);
      });
    }
    let container = document.getElementById(
      'container-Tableau',
    );
    designer.appendTo(container, function () {});
  };

  render() {
    var {
      CurrentUser,
      UserRole,
      FullName,
      connection,
    } = this.props;
    if (UserRole == Roles.values.teacher) {
      return (
        <div
          id="container-Tableau"
          style={{ height: 850 }}
        ></div>
      );
    } else {
      return (
        <div
          id="container-Tableau"
          style={{ height: 850, pointerEvents: 'none' }}
        ></div>
      );
    }
  }
}

function select(state) {
  return {
    LiveAccess: selectors.selectPermissionToLive(state),
    LiveAdminAccess: selectors.selectPermissionToLiveAdmin(
      state,
    ),
    loading: selectors.SelectLoading(state),
    Room: selectors.SelectRoom(state),
    CurrentUser: selectorsAuth.selectCurrentUser(state),
    FullName: selectorsAuth.selectCurrentUserFullName(
      state,
    ),
    UserRole: selectorsAuth.selectRoles(state),
  };
}

export default connect(select)(CanvasDesigne);
