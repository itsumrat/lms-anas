import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CycleView from 'view/cycle/view/cycleView';
import { i18n } from 'i18n';
import actions from 'modules/cycle/view/cycleViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/cycle/view/cycleViewSelectors';
import CycleViewToolbar from 'view/cycle/view/cycleViewToolbar';

class CyclePage extends Component {
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
                        [i18n('entities.Cycle.menu'), '/cycle'],
                        [i18n('entities.Cycle.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Cycle.view.title')}
                    </PageTitle>

                    <CycleViewToolbar match={this.props.match} />

                    <CycleView
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

export default connect(select)(Layout(CyclePage));