import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/responsibleCycle/importer/responsibleCycleImporterSelectors';
import actions from 'modules/responsibleCycle/importer/responsibleCycleImporterActions';
import fields from 'modules/responsibleCycle/importer/responsibleCycleImporterFields';

class ResponsibleCycleImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.ResponsibleCycle.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.ResponsibleCycle.menu'),
                            '/ResponsibleCycle',
                        ],
                        [
                            i18n(
                                'entities.ResponsibleCycle.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.ResponsibleCycle.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(ResponsibleCycleImportPage);