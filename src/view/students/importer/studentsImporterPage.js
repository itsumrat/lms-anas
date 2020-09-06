import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/students/importer/studentsImporterSelectors';
import actions from 'modules/students/importer/studentsImporterActions';
import fields from 'modules/students/importer/studentsImporterFields';

class StudentsImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.Students.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.Students.menu'),
                            '/Students',
                        ],
                        [
                            i18n(
                                'entities.Students.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.Students.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(StudentsImportPage);