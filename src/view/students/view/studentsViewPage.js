import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import StudentsView from 'view/students/view/studentsView';
import { i18n } from 'i18n';
import actions from 'modules/students/view/studentsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/students/view/studentsViewSelectors';
import StudentsViewToolbar from 'view/students/view/studentsViewToolbar';

class StudentsPage extends Component {
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
                        [i18n('entities.Students.menu'), '/students'],
                        [i18n('entities.Students.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Students.view.title')}
                    </PageTitle>

                    <StudentsViewToolbar match={this.props.match} />

                    <StudentsView
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

export default connect(select)(Layout(StudentsPage));