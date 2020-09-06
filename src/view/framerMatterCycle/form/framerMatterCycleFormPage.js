import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import FramerMatterCycleForm from 'view/framerMatterCycle/form/framerMatterCycleForm';
import { i18n } from 'i18n';

class FramerMatterCycleFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.FramerMatterCycle.edit.title')
            : i18n('entities.FramerMatterCycle.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.FramerMatterCycle.menu'), '/framerMatterCycle'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <FramerMatterCycleForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(FramerMatterCycleFormPage);