import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MatterView from 'view/matter/view/matterView';
import { i18n } from 'i18n';
import actions from 'modules/matter/view/matterViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/matter/view/matterViewSelectors';
import MatterViewToolbar from 'view/matter/view/matterViewToolbar';

class MatterPage extends Component {
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
            [i18n('entities.Matter.menu'), '/Matter'],
            [i18n('entities.Matter.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Matter.view.title')}
          </PageTitle>

          <MatterViewToolbar match={this.props.match} />

          <MatterView
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

export default connect(select)(Layout(MatterPage));
