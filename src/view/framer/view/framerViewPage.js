import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import FramerView from 'view/framer/view/framerView';
import { i18n } from 'i18n';
import actions from 'modules/framer/view/framerViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/framer/view/framerViewSelectors';
import FramerViewToolbar from 'view/framer/view/framerViewToolbar';

class FramerPage extends Component {
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
                        [i18n('entities.Framer.menu'), '/framer'],
                        [i18n('entities.Framer.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Framer.view.title')}
                    </PageTitle>

                    <FramerViewToolbar match={this.props.match} />

                    <FramerView
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

export default connect(select)(Layout(FramerPage));