import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import TeachersView from 'view/teachers/view/teachersView';
import { i18n } from 'i18n';
import actions from 'modules/teachers/view/teachersViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/teachers/view/teachersViewSelectors';
import TeachersViewToolbar from 'view/teachers/view/teachersViewToolbar';

class TeachersPage extends Component {
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
                        [i18n('entities.Teachers.menu'), '/teachers'],
                        [i18n('entities.Teachers.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Teachers.view.title')}
                    </PageTitle>

                    <TeachersViewToolbar match={this.props.match} />

                    <TeachersView
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

export default connect(select)(Layout(TeachersPage));