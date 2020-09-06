import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import LevelSectorView from 'view/levelSector/view/levelSectorView';
import { i18n } from 'i18n';
import actions from 'modules/levelSector/view/levelSectorViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/levelSector/view/levelSectorViewSelectors';
import LevelSectorViewToolbar from 'view/levelSector/view/levelSectorViewToolbar';

class LevelSectorPage extends Component {
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
                        [i18n('entities.LevelSector.menu'), '/levelSector'],
                        [i18n('entities.LevelSector.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.LevelSector.view.title')}
                    </PageTitle>

                    <LevelSectorViewToolbar match={this.props.match} />

                    <LevelSectorView
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

export default connect(select)(Layout(LevelSectorPage));