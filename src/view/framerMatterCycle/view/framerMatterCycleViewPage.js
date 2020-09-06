import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import FramerMatterCycleView from 'view/framerMatterCycle/view/framerMatterCycleView';
import { i18n } from 'i18n';
import actions from 'modules/framerMatterCycle/view/framerMatterCycleViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/framerMatterCycle/view/framerMatterCycleViewSelectors';
import FramerMatterCycleViewToolbar from 'view/framerMatterCycle/view/framerMatterCycleViewToolbar';

class FramerMatterCyclePage extends Component {
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
                        [i18n('entities.FramerMatterCycle.menu'), '/framerMatterCycle'],
                        [i18n('entities.FramerMatterCycle.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.FramerMatterCycle.view.title')}
                    </PageTitle>

                    <FramerMatterCycleViewToolbar match={this.props.match} />

                    <FramerMatterCycleView
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

export default connect(select)(Layout(FramerMatterCyclePage));