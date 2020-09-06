import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ParentView from 'view/parent/view/parentView';
import { i18n } from 'i18n';
import actions from 'modules/parent/view/parentViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/parent/view/parentViewSelectors';
import ParentViewToolbar from 'view/parent/view/parentViewToolbar';

class ParentPage extends Component {
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
                        [i18n('entities.Parent.menu'), '/parent'],
                        [i18n('entities.Parent.view.title')],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n('entities.Parent.view.title')}
                    </PageTitle>

                    <ParentViewToolbar match={this.props.match} />

                    <ParentView
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

export default connect(select)(Layout(ParentPage));