import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.MatterRead,
        ),
);

const selectPermissionToEdit = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.MatterEdit,
        ),
);

const selectPermissionToCreate = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.MatterCreate,
        ),
);

const selectPermissionToImport = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.MatterImport,
        ),
);

const selectPermissionToDestroy = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.MatterDestroy,
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