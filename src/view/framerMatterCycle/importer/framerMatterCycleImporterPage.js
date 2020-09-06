import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/framerMatterCycle/importer/framerMatterCycleImporterSelectors';
import actions from 'modules/framerMatterCycle/importer/framerMatterCycleImporterActions';
import fields from 'modules/framerMatterCycle/importer/framerMatterCycleImporterFields';

class FramerMatterCycleImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.FramerMatterCycle.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.FramerMatterCycle.menu'),
                            '/FramerMatterCycle',
                        ],
                        [
                            i18n(
                                'entities.FramerMatterCycle.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.FramerMatterCycle.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(FramerMatterCycleImportPage);