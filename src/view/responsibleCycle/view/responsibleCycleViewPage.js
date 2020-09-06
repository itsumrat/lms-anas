import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ResponsibleCycleView from 'view/responsibleCycle/view/responsibleCycleView';
import { i18n } from 'i18n';
import actions from 'modules/responsibleCycle/view/responsibleCycleViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/responsibleCycle/view/responsibleCycleViewSelectors';
import ResponsibleCycleViewToolbar from 'view/responsibleCycle/view/responsibleCycleViewToolbar';

class ResponsibleCyclePage extends Component {
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
                        [i18n('entities.ResponsibleCycle.menu'), '/responsibleCycle'],
                        [i18n('entities.ResponsibleCycle.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.ResponsibleCycle.view.title')}
                    </PageTitle>

                    <ResponsibleCycleViewToolbar match={this.props.match} />

                    <ResponsibleCycleView
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

export default connect(select)(Layout(ResponsibleCyclePage));