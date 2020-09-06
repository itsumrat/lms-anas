import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelSectorRead,
        ),
);

const selectPermissionToEdit = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelSectorEdit,
        ),
);

const selectPermissionToCreate = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelSectorCreate,
        ),
);

const selectPermissionToImport = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelSectorImport,
        ),
);

const selectPermissionToDestroy = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelSectorDestroy,
        ),
);

const selectors = {
    selectPermissionToRead,
    selectPermissionToEdit,
    selectPermissionToCreate,
    selectPermissionToDestroy,
    selectPermissionToImport,
};

export default selectors;