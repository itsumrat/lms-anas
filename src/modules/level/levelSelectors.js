import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelRead,
        ),
);

const selectPermissionToEdit = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelEdit,
        ),
);

const selectPermissionToCreate = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelCreate,
        ),
);

const selectPermissionToImport = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelImport,
        ),
);

const selectPermissionToDestroy = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.LevelDestroy,
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