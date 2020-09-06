import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import LevelView from 'view/level/view/levelView';
import { i18n } from 'i18n';
import actions from 'modules/level/view/levelViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/level/view/levelViewSelectors';
import LevelViewToolbar from 'view/level/view/levelViewToolbar';

class LevelPage extends Component {
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
                        [i18n('entities.Level.menu'), '/level'],
                        [i18n('entities.Level.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Level.view.title')}
                    </PageTitle>

                    <LevelViewToolbar match={this.props.match} />

                    <LevelView
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

export default connect(select)(Layout(LevelPage));