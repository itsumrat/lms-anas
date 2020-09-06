import Permissions from 'security/permissions';
import PermissionChecker from 'modules/auth/permissionChecker';
import CoursEtudiant from './CoursEtudiant';
import CoursProf from './CoursProf';
import CoursAdmin from './CoursAdmin';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import './Cours.css';

const permissions = Permissions.values;

class CoursController extends PureComponent {
    handleLive = () => {
        this.props.history.push({
            pathname: '/listclasses',
        });
    };

    render() {
        let { currentUser } = this.props;
        const permissionChecker = new PermissionChecker(
            currentUser,
        );
        if (permissionChecker.match(permissions.HomePage)) {
            return <CoursEtudiant />
        } else {
            if (permissionChecker.match(permissions.HomeProf)) {
                return <CoursProf />
            } else {
                return <CoursAdmin />
            }
        }
    }
}

function select(state) {
    var currentUser = state.auth.currentUser;
    return {
        currentUser,
    };
}

export default connect(select)(Layout(CoursController));
