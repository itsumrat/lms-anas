import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ClassroomTeacherMatterForm from 'view/classroomTeacherMatter/form/classroomTeacherMatterForm';
import { i18n } from 'i18n';

class ClassroomTeacherMatterFormPage extends Component {
    isEditing = () => {
        const { match } = this.props;
        return !!match.params.id;
    };

    title = () => {
        return this.isEditing()
            ? i18n('entities.ClassroomTeacherMatter.edit.title')
            : i18n('entities.ClassroomTeacherMatter.new.title');
    };

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [i18n('entities.ClassroomTeacherMatter.menu'), '/classroomTeacherMatter'],
                        [this.title()],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{this.title()}</PageTitle>

                    <ClassroomTeacherMatterForm match={this.props.match} />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(ClassroomTeacherMatterFormPage);