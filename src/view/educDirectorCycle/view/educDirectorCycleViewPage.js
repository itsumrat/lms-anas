import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EducDirectorCycleView from 'view/educDirectorCycle/view/educDirectorCycleView';
import { i18n } from 'i18n';
import actions from 'modules/educDirectorCycle/view/educDirectorCycleViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/educDirectorCycle/view/educDirectorCycleViewSelectors';
import EducDirectorCycleViewToolbar from 'view/educDirectorCycle/view/educDirectorCycleViewToolbar';

class EducDirectorCyclePage extends Component {
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
                        [i18n('entities.EducDirectorCycle.menu'), '/educDirectorCycle'],
                        [i18n('entities.EducDirectorCycle.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.EducDirectorCycle.view.title')}
                    </PageTitle>

                    <EducDirectorCycleViewToolbar match={this.props.match} />

                    <EducDirectorCycleView
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

export default connect(select)(Layout(EducDirectorCyclePage));