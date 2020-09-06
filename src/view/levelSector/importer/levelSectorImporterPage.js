import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/levelSector/importer/levelSectorImporterSelectors';
import actions from 'modules/levelSector/importer/levelSectorImporterActions';
import fields from 'modules/levelSector/importer/levelSectorImporterFields';

class LevelSectorImportPage extends Component {
    render() {
        const Importer = importerHoc(
            selectors,
            actions,
            fields,
            i18n('entities.LevelSector.importer.hint'),
        );

        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        [i18n('home.menu'), '/'],
                        [
                            i18n('entities.LevelSector.menu'),
                            '/LevelSector',
                        ],
                        [
                            i18n(
                                'entities.LevelSector.importer.title',
                            ),
                        ],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>
                        {i18n(
                            'entities.LevelSector.importer.title',
                        )}
                    </PageTitle>

                    <Importer />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Layout(LevelSectorImportPage);