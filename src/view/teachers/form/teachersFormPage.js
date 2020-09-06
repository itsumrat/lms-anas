import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import TeachersForm from 'view/teachers/form/teachersForm';
import { i18n } from 'i18n';

class TeachersFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.Teachers.edit.title')
            : i18n('entities.Teachers.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.Teachers.menu'), '/teachers'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <TeachersForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(TeachersFormPage);