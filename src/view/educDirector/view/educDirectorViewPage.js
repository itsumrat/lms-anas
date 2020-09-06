import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EducDirectorView from 'view/educDirector/view/educDirectorView';
import { i18n } from 'i18n';
import actions from 'modules/educDirector/view/educDirectorViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/educDirector/view/educDirectorViewSelectors';
import EducDirectorViewToolbar from 'view/educDirector/view/educDirectorViewToolbar';

class EducDirectorPage extends Component {
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
                        [i18n('entities.EducDirector.menu'), '/educDirector'],
                        [i18n('entities.EducDirector.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.EducDirector.view.title')}
                    </PageTitle>

                    <EducDirectorViewToolbar match={this.props.match} />

                    <EducDirectorView
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

export default connect(select)(Layout(EducDirectorPage));