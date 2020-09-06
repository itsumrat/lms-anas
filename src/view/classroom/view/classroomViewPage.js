import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ClassroomView from 'view/classroom/view/classroomView';
import { i18n } from 'i18n';
import actions from 'modules/classroom/view/classroomViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/classroom/view/classroomViewSelectors';
import ClassroomViewToolbar from 'view/classroom/view/classroomViewToolbar';

class ClassroomPage extends Component {
    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(actions.doFind(match.params.id));
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.Classroom.menu'), '/classroom'],
                        [i18n('entities.Classroom.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Classroom.view.title')}
                    </PageTitle>

                    <ClassroomViewToolbar match={this.props.match} />

                    <ClassroomView
                        loading={this.props.loading}
                        record={this.props.record}
                    />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

function select(state) {
    return {
        loading: selectors.selectLoading(state),
        record: selectors.selectRecord(state),
    };
}

export default connect(select)(Layout(ClassroomPage));