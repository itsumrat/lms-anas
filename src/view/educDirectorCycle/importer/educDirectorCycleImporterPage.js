import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/educDirectorCycle/importer/educDirectorCycleImporterSelectors';
import actions from 'modules/educDirectorCycle/importer/educDirectorCycleImporterActions';
import fields from 'modules/educDirectorCycle/importer/educDirectorCycleImporterFields';

class EducDirectorCycleImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.EducDirectorCycle.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.EducDirectorCycle.menu'),
                            '/EducDirectorCycle',
                        ],
                        [
                            i18n(
                                'entities.EducDirectorCycle.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.EducDirectorCycle.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(EducDirectorCycleImportPage);