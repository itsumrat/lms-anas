import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EducDirectorCycleForm from 'view/educDirectorCycle/form/educDirectorCycleForm';
import { i18n } from 'i18n';

class EducDirectorCycleFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.EducDirectorCycle.edit.title')
            : i18n('entities.EducDirectorCycle.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.EducDirectorCycle.menu'), '/educDirectorCycle'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <EducDirectorCycleForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(EducDirectorCycleFormPage);