import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ResponsiblesView from 'view/responsibles/view/responsiblesView';
import { i18n } from 'i18n';
import actions from 'modules/responsibles/view/responsiblesViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/responsibles/view/responsiblesViewSelectors';
import ResponsiblesViewToolbar from 'view/responsibles/view/responsiblesViewToolbar';

class ResponsiblesPage extends Component {
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
                        [i18n('entities.Responsibles.menu'), '/responsibles'],
                        [i18n('entities.Responsibles.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Responsibles.view.title')}
                    </PageTitle>

                    <ResponsiblesViewToolbar match={this.props.match} />

                    <ResponsiblesView
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

export default connect(select)(Layout(ResponsiblesPage));