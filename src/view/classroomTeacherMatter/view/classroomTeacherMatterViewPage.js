import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ClassroomTeacherMatterView from 'view/classroomTeacherMatter/view/classroomTeacherMatterView';
import { i18n } from 'i18n';
import actions from 'modules/classroomTeacherMatter/view/classroomTeacherMatterViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/classroomTeacherMatter/view/classroomTeacherMatterViewSelectors';
import ClassroomTeacherMatterViewToolbar from 'view/classroomTeacherMatter/view/classroomTeacherMatterViewToolbar';

class ClassroomTeacherMatterPage extends Component {
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
                        [i18n('entities.ClassroomTeacherMatter.menu'), '/classroomTeacherMatter'],
                        [i18n('entities.ClassroomTeacherMatter.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.ClassroomTeacherMatter.view.title')}
                    </PageTitle>

                    <ClassroomTeacherMatterViewToolbar match={this.props.match} />

                    <ClassroomTeacherMatterView
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

export default connect(select)(Layout(ClassroomTeacherMatterPage));