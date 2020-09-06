import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SectorView from 'view/sector/view/sectorView';
import { i18n } from 'i18n';
import actions from 'modules/sector/view/sectorViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/sector/view/sectorViewSelectors';
import SectorViewToolbar from 'view/sector/view/sectorViewToolbar';

class SectorPage extends Component {
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
                        [i18n('entities.Sector.menu'), '/sector'],
                        [i18n('entities.Sector.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Sector.view.title')}
                    </PageTitle>

                    <SectorViewToolbar match={this.props.match} />

                    <SectorView
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

export default connect(select)(Layout(SectorPage));