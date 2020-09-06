import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ResponsiblesForm from 'view/responsibles/form/responsiblesForm';
import { i18n } from 'i18n';

class ResponsiblesFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.Responsibles.edit.title')
            : i18n('entities.Responsibles.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.Responsibles.menu'), '/responsibles'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <ResponsiblesForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(ResponsiblesFormPage);