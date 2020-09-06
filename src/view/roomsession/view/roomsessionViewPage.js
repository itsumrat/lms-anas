import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import RoomsessionView from 'view/roomsession/view/roomsessionView';
import { i18n } from 'i18n';
import actions from 'modules/roomSession/view/roomsessionViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/roomSession/view/roomsessionViewSelectors';
import RoomsessionViewToolbar from 'view/roomsession/view/roomsessionViewToolbar';

class RoomsessionPage extends Component {
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
            [
              i18n('entities.Roomsession.menu'),
              '/roomsession',
            ],
            [i18n('entities.Roomsession.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.Roomsession.view.title')}
          </PageTitle>

          <RoomsessionViewToolbar
            match={this.props.match}
          />

          <RoomsessionView
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

export default connect(select)(Layout(RoomsessionPage));
