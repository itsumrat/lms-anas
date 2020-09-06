import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import StudentsForm from 'view/students/form/studentsForm';
import { i18n } from 'i18n';

class StudentsFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.Students.edit.title')
            : i18n('entities.Students.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.Students.menu'), '/students'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <StudentsForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(StudentsFormPage);