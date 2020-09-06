import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.EducDirectorRead,
        ),
);

const selectPermissionToEdit = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.EducDirectorEdit,
        ),
);

const selectPermissionToCreate = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.EducDirectorCreate,
        ),
);

const selectPermissionToImport = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.EducDirectorImport,
        ),
);

const selectPermissionToDestroy = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.EducDirectorDestroy,
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