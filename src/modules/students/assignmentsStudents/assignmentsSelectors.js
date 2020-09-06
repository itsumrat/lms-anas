import { createSelector } from 'reselect';

const selectRaw = (state) =>
  state.students.assignmentsStudents;

const selectLoading = createSelector(
  [selectRaw],
  (payload) => !!payload.loading,
);

const selectListAssignments = createSelector(
  [selectRaw],
  (payload) => payload.assignments,
);

const selectListMatters = createSelector(
  [selectRaw],
  (payload) => payload.matters,
);

export default {
  selectLoading,
  selectListAssignments,
  selectListMatters,
};
