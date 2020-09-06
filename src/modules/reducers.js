import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import matter from 'modules/matter/matterReducers';
import teachers from 'modules/teachers/teachersReducers';
import classroom from 'modules/classroom/classroomReducers';
import level from 'modules/level/levelReducers';
import students from 'modules/students/studentsReducers';
import classroomTeacherMatter from 'modules/classroomTeacherMatter/classroomTeacherMatterReducers';
import roomsession from 'modules/roomSession/roomSessionReducers';
import assignments from 'modules/assignments/assignmentsReducers';
import responsibles from 'modules/responsibles/responsiblesReducers';
import educDirector from 'modules/educDirector/educDirectorReducers';
import responsibleCycle from 'modules/responsibleCycle/responsibleCycleReducers';
import educDirectorCycle from 'modules/educDirectorCycle/educDirectorCycleReducers';
import cycle from 'modules/cycle/cycleReducers';
import parent from 'modules/parent/parentReducers';
import sector from 'modules/sector/sectorReducers';
import framer from 'modules/framer/framerReducers';
import element from 'modules/element/elementReducers';
import register from 'modules/register/registerReducers';
import levelSector from 'modules/levelSector/levelSectorReducers';
import schoolYear from 'modules/schoolYear/schoolYearReducers';
import chat from 'modules/chat/chatReducers';
import courseStudents from 'modules/courseStudents/courseStudentsReducers';
import timeTableTeacher from 'modules/timeTableTeacher/timeTableTeacherReducers';
import framerMatterCycle from 'modules/framerMatterCycle/framerMatterCycleReducers';
import week from 'modules/week/weekReducers';

import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    matter,
    classroom,
    level,
    cycle,
    chat,
    element,
    timeTableTeacher,
    schoolYear,
    register,
    students,
    week,
    assignments,
    responsibles,
    responsibleCycle,
    courseStudents,
    levelSector,
    educDirectorCycle,
    educDirector,
    framerMatterCycle,
    parent,
    framer,
    sector,
    roomsession,
    classroomTeacherMatter,
    auditLog,
    teachers,
    settings,
  });
