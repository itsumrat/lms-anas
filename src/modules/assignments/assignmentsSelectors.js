import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.AssignmentsRead,
        ),
);

const selectPermissionToEdit = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.AssignmentsEdit,
        ),
);

const selectPermissionToCreate = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.AssignmentsCreate,
        ),
);

const selectPermissionToImport = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.AssignmentsImport,
        ),
);

const selectPermissionToDestroy = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.AssignmentsDestroy,
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