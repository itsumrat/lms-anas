import list from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListReducers';
import form from 'modules/classroomTeacherMatter/form/classroomTeacherMatterFormReducers';
import view from 'modules/classroomTeacherMatter/view/classroomTeacherMatterViewReducers';
import destroy from 'modules/classroomTeacherMatter/destroy/classroomTeacherMatterDestroyReducers';
import importerReducer from 'modules/classroomTeacherMatter/importer/classroomTeacherMatterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});