import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/sector/importer/sectorImporterSelectors';
import actions from 'modules/sector/importer/sectorImporterActions';
import fields from 'modules/sector/importer/sectorImporterFields';

class SectorImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.Sector.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.Sector.menu'),
                            '/Sector',
                        ],
                        [
                            i18n(
                                'entities.Sector.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.Sector.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(SectorImportPage);