import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';
import _get from 'lodash/get';

const selectRaw = (state) => state.roomsession.live;

const SelectRoom = createSelector(
  [selectRaw],
  (raw) => raw.room,
);
const SelectLoading = createSelector(
  [selectRaw],
  (raw) => raw.loading,
);

const selectPermissionToLiveScreenShare = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.LiveScreenShare,
    ),
);

const selectPermissionToLiveDashboardEdit = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.LiveDashboardEdit,
    ),
);

const selectPermissionToLive = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.LivePage,
    ),
);

const selectPermissionToLiveAdmin = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.LiveAdmin,
    ),
);

const selectors = {
  selectPermissionToLiveScreenShare,
  selectPermissionToLiveDashboardEdit,
  selectPermissionToLive,
  selectPermissionToLiveAdmin,
  SelectRoom,
  SelectLoading,
};

export default selectors;
