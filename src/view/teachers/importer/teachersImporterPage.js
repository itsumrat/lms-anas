import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/teachers/importer/teachersImporterSelectors';
import actions from 'modules/teachers/importer/teachersImporterActions';
import fields from 'modules/teachers/importer/teachersImporterFields';

class TeachersImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.Teachers.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.Teachers.menu'),
                            '/Teachers',
                        ],
                        [
                            i18n(
                                'entities.Teachers.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.Teachers.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(TeachersImportPage);