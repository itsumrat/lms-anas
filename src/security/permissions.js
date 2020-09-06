import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      Addresponsible: {
        id: 'Addresponsible',
        allowedRoles: [roles.administrator],
      },
      HomeAdmin: {
        id: 'HomeAdmin',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      AddUsers: {
        id: 'AddUsers',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      ListClasses: {
        id: 'ListClasses',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      LiveAdmin: {
        id: 'LiveAdmin',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      AddNiveaux: {
        id: 'AddNiveaux',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      Sessions: {
        id: 'Sessions',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
        ],
      },
      HomePage: {
        id: 'HomePage',
        allowedRoles: [roles.student],
      },
      LivePage: {
        id: 'LivePage',
        allowedRoles: [roles.student, roles.teacher],
      },
      HomeProf: {
        id: 'HomeProf',
        allowedRoles: [roles.teacher],
      },
      HomeParent: {
        id: 'HomeParent',
        allowedRoles: [roles.parent],
      },
      HomeFramer: {
        id: 'HomeFramer',
        allowedRoles: [roles.framer],
      },
      Standard_users: {
        id: 'Standard_users',
        allowedRoles: [
          roles.student,
          roles.teacher,
          roles.framer,
          roles.parent,
        ],
      },
      Managing_users: {
        id: 'Standard_users',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
          roles.educDirector,
        ],
      },

      //

      // Dashboard

      LiveDashboard: {
        id: 'LiveDashboard',
        allowedRoles: [roles.teacher],
      },

      // Screenshare

      LiveScreenShare: {
        id: 'LiveScreenShare',
        allowedRoles: [roles.teacher],
      },

      // Matter (Done)

      MatterImport: {
        id: 'MatterImport',
        allowedRoles: [roles.administrator],
      },
      MatterCreate: {
        id: 'MatterCreate',
        allowedRoles: [roles.administrator],
      },
      MatterEdit: {
        id: 'MatterEdit',
        allowedRoles: [roles.administrator],
      },
      MatterDestroy: {
        id: 'MatterDestroy',
        allowedRoles: [roles.administrator],
      },
      MatterRead: {
        id: 'MatterRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Week (Done)

      WeekImport: {
        id: 'WeekImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      WeekCreate: {
        id: 'WeekCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      WeekEdit: {
        id: 'WeekEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      WeekDestroy: {
        id: 'WeekDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      WeekRead: {
        id: 'WeekRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // CourseStudents

      CourseStudentsRead: {
        id: 'CourseStudents',
        allowedRoles: [
          roles.student,
          roles.framer,
          roles.parent,
        ],
      },

      // LevelSector (Done)

      LevelSectorImport: {
        id: 'LevelSectorImport',
        allowedRoles: [roles.administrator],
      },
      LevelSectorCreate: {
        id: 'LevelSectorCreate',
        allowedRoles: [roles.administrator],
      },
      LevelSectorEdit: {
        id: 'LevelSectorEdit',
        allowedRoles: [roles.administrator],
      },
      LevelSectorDestroy: {
        id: 'LevelSectorDestroy',
        allowedRoles: [roles.administrator],
      },
      LevelSectorRead: {
        id: 'LevelSectorRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Teachers (Done)

      TeachersImport: {
        id: 'TeachersImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      TeachersCreate: {
        id: 'TeachersCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      TeachersEdit: {
        id: 'TeachersEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      TeachersDestroy: {
        id: 'TeachersDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      TeachersRead: {
        id: 'TeachersRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Level

      LevelImport: {
        id: 'LevelImport',
        allowedRoles: [roles.administrator],
      },
      LevelCreate: {
        id: 'LevelCreate',
        allowedRoles: [roles.administrator],
      },
      LevelEdit: {
        id: 'LevelEdit',
        allowedRoles: [roles.administrator],
      },
      LevelDestroy: {
        id: 'LevelDestroy',
        allowedRoles: [roles.administrator],
      },
      LevelRead: {
        id: 'LevelRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Framer

      FramerImport: {
        id: 'FramerImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerCreate: {
        id: 'FramerCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerEdit: {
        id: 'FramerEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerDestroy: {
        id: 'FramerDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerRead: {
        id: 'FramerRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Cycle

      CycleImport: {
        id: 'CylceImport',
        allowedRoles: [roles.administrator],
      },
      CycleCreate: {
        id: 'CylceCreate',
        allowedRoles: [roles.administrator],
      },
      CycleEdit: {
        id: 'CylceEdit',
        allowedRoles: [roles.administrator],
      },
      CylceDestroy: {
        id: 'CylceDestroy',
        allowedRoles: [roles.administrator],
      },
      CycleRead: {
        id: 'CylceRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Students

      StudentsImport: {
        id: 'StudentsImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      StudentsCreate: {
        id: 'StudentsCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      StudentsEdit: {
        id: 'StudentsEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      StudentsDestroy: {
        id: 'StudentsDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      StudentsRead: {
        id: 'StudentsRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // ClassTeachMat

      ClassTeachMatImport: {
        id: 'ClassTeachMatImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassTeachMatCreate: {
        id: 'ClassTeachMatCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassTeachMatEdit: {
        id: 'ClassTeachMatEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassTeachMatDestroy: {
        id: 'ClassTeachMatDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassTeachMatRead: {
        id: 'ClassTeachMatRead',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
          roles.educDirector,
        ],
      },

      // RoomSession

      RoomSessionImport: {
        id: 'RoomSessionImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomSessionCreate: {
        id: 'RoomSessionCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomSessionEdit: {
        id: 'RoomSessionEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomSessionDestroy: {
        id: 'RoomSessionDestroy',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
          roles.educDirector,
        ],
      },
      RoomSessionRead: {
        id: 'RoomSessionRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Classroom

      ClassroomImport: {
        id: 'ClassroomImport',
        allowedRoles: [roles.administrator],
      },
      ClassroomCreate: {
        id: 'ClassroomCreate',
        allowedRoles: [roles.administrator],
      },
      ClassroomEdit: {
        id: 'ClassroomEdit',
        allowedRoles: [roles.administrator],
      },
      ClassroomDestroy: {
        id: 'ClassroomDestroy',
        allowedRoles: [roles.administrator],
      },
      ClassroomRead: {
        id: 'ClassroomRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // ClassroomTeacherMatter

      ClassroomTeacherMatterImport: {
        id: 'ClassroomTeacherMatterImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassroomTeacherMatterCreate: {
        id: 'ClassroomTeacherMatterCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      ClassroomTeacherMatterEdit: {
        id: 'ClassroomTeacherMatterEdit',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
          roles.educDirector,
        ],
      },
      ClassroomTeacherMatterDestroy: {
        id: 'ClassroomTeacherMatterDestroy',
        allowedRoles: [
          roles.responsible,
          roles.educDirector,
          roles.administrator,
        ],
      },
      ClassroomTeacherMatterRead: {
        id: 'ClassroomTeacherMatterRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // FramerMatterCycle

      FramerMatterCycleImport: {
        id: 'FramerMatterCycleImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerMatterCycleCreate: {
        id: 'FramerMatterCycleCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerMatterCycleEdit: {
        id: 'FramerMatterCycleEdit',
        allowedRoles: [
          roles.administrator,
          roles.responsible,
          roles.educDirector,
        ],
      },
      FramerMatterCycleDestroy: {
        id: 'FramerMatterCycleDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      FramerMatterCycleRead: {
        id: 'FramerMatterCycleRead',
        allowedRoles: [
          roles.responsible,
          roles.educDirector,
          roles.administrator,
        ],
      },

      // Roomsession

      RoomsessionImport: {
        id: 'RoomsessionImport',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomsessionCreate: {
        id: 'RoomsessionCreate',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomsessionEdit: {
        id: 'RoomsessionEdit',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomsessionDestroy: {
        id: 'RoomsessionDestroy',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },
      RoomsessionRead: {
        id: 'RoomsessionRead',
        allowedRoles: [
          roles.responsible,
          roles.educDirector,
          roles.administrator,
        ],
      },

      // Assignments

      AssignmentsImport: {
        id: 'AssignmentsImport',
        allowedRoles: [roles.teacher],
      },
      AssignmentsCreate: {
        id: 'AssignmentsCreate',
        allowedRoles: [roles.teacher],
      },
      AssignmentsEdit: {
        id: 'AssignmentsEdit',
        allowedRoles: [roles.teacher],
      },
      AssignmentsDestroy: {
        id: 'AssignmentsDestroy',
        allowedRoles: [roles.teacher],
      },
      AssignmentsRead: {
        id: 'AssignmentsRead',
        allowedRoles: [roles.teacher],
      },

      // TimeTableTeacher

      TimeTableTeacherRead: {
        id: 'AssignmentsImport',
        allowedRoles: [roles.teacher],
      },

      // Element

      ElementImport: {
        id: 'ElementImport',
        allowedRoles: [roles.administrator],
      },
      ElementCreate: {
        id: 'ElementCreate',
        allowedRoles: [roles.administrator],
      },
      ElementEdit: {
        id: 'ElementEdit',
        allowedRoles: [roles.administrator],
      },
      ElementDestroy: {
        id: 'ElementDestroy',
        allowedRoles: [roles.administrator],
      },
      ElementRead: {
        id: 'ElementRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // SchoolYear

      SchoolYearImport: {
        id: 'SchoolYearImport',
        allowedRoles: [roles.administrator],
      },
      SchoolYearCreate: {
        id: 'SchoolYearCreate',
        allowedRoles: [roles.administrator],
      },
      SchoolYearEdit: {
        id: 'SchoolYearEdit',
        allowedRoles: [roles.administrator],
      },
      SchoolYearDestroy: {
        id: 'SchoolYearDestroy',
        allowedRoles: [roles.administrator],
      },
      SchoolYearRead: {
        id: 'SchoolYearRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // Register

      RegisterImport: {
        id: 'RegisterImport',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      RegisterCreate: {
        id: 'RegisterCreate',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      RegisterEdit: {
        id: 'RegisterEdit',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      RegisterDestroy: {
        id: 'RegisterDestroy',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      RegisterRead: {
        id: 'RegisterRead',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },

      // AssignmentsStudents
      AssignmentsStudentsRead: {
        id: 'AssignmentsStudentsRead',
        allowedRoles: [roles.student],
      },

      // AssignmentsLive

      AssignmentsLiveImport: {
        id: 'AssignmentsLiveImport',
        allowedRoles: [roles.teacher],
      },
      AssignmentsLiveCreate: {
        id: 'AssignmentsLiveCreate',
        allowedRoles: [roles.teacher],
      },
      AssignmentsLiveEdit: {
        id: 'AssignmentsLiveEdit',
        allowedRoles: [roles.teacher],
      },
      AssignmentsLiveDestroy: {
        id: 'AssignmentsLiveDestroy',
        allowedRoles: [roles.teacher],
      },
      AssignmentsLiveRead: {
        id: 'AssignmentsLiveRead',
        allowedRoles: [roles.teacher],
      },

      // Responsible

      ResponsibleImport: {
        id: 'ResponsibleImport',
        allowedRoles: [roles.administrator],
      },
      ResponsibleCreate: {
        id: 'ResponsibleCreate',
        allowedRoles: [roles.administrator],
      },
      ResponsibleEdit: {
        id: 'ResponsibleEdit',
        allowedRoles: [roles.administrator],
      },
      ResponsibleDestroy: {
        id: 'ResponsibleDestroy',
        allowedRoles: [roles.administrator],
      },
      ResponsibleRead: {
        id: 'ResponsibleRead',
        allowedRoles: [roles.administrator],
      },

      // EducDirector

      EducDirectorImport: {
        id: 'EducDirectorImport',
        allowedRoles: [roles.administrator],
      },
      EducDirectorCreate: {
        id: 'EducDirectorCreate',
        allowedRoles: [roles.administrator],
      },
      EducDirectorEdit: {
        id: 'EducDirectorEdit',
        allowedRoles: [roles.administrator],
      },
      EducDirectorDestroy: {
        id: 'EducDirectorDestroy',
        allowedRoles: [roles.administrator],
      },
      EducDirectorRead: {
        id: 'EducDirectorRead',
        allowedRoles: [roles.administrator],
      },

      // ResponsibleCycle

      ResponsibleCycleImport: {
        id: 'ResponsibleCycleImport',
        allowedRoles: [roles.administrator],
      },
      ResponsibleCycleCreate: {
        id: 'ResponsibleCycleCreate',
        allowedRoles: [roles.administrator],
      },
      ResponsibleCycleEdit: {
        id: 'ResponsibleCycleEdit',
        allowedRoles: [roles.administrator],
      },
      ResponsibleCycleDestroy: {
        id: 'ResponsibleCycleDestroy',
        allowedRoles: [roles.administrator],
      },
      ResponsibleCycleRead: {
        id: 'ResponsibleCycleRead',
        allowedRoles: [roles.administrator],
      },

      // Parent

      ParentImport: {
        id: 'ParentImport',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      ParentCreate: {
        id: 'ParentCreate',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      ParentEdit: {
        id: 'ParentEdit',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      ParentDestroy: {
        id: 'ParentDestroy',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },
      ParentRead: {
        id: 'ParentRead',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
        ],
      },

      // Chat

      ChatImport: {
        id: 'ChatImport',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
          roles.framer,
          roles.parent,
          roles.student,
          roles.teacher,
        ],
      },
      ChatCreate: {
        id: 'ChatCreate',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
          roles.framer,
          roles.parent,
          roles.student,
          roles.teacher,
        ],
      },
      ChatEdit: {
        id: 'ChatEdit',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
          roles.framer,
          roles.parent,
          roles.student,
          roles.teacher,
        ],
      },
      ChatDestroy: {
        id: 'ChatDestroy',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
          roles.framer,
          roles.parent,
          roles.student,
          roles.teacher,
        ],
      },
      ChatRead: {
        id: 'ChatRead',
        allowedRoles: [
          roles.educDirector,
          roles.administrator,
          roles.responsible,
          roles.framer,
          roles.parent,
          roles.student,
          roles.teacher,
        ],
      },

      // Sector

      SectorImport: {
        id: 'SectorImport',
        allowedRoles: [roles.administrator],
      },
      SectorCreate: {
        id: 'SectorCreate',
        allowedRoles: [roles.administrator],
      },
      SectorEdit: {
        id: 'SectorEdit',
        allowedRoles: [roles.administrator],
      },
      SectorDestroy: {
        id: 'SectorDestroy',
        allowedRoles: [roles.administrator],
      },
      SectorRead: {
        id: 'SectorRead',
        allowedRoles: [
          roles.responsible,
          roles.administrator,
          roles.educDirector,
        ],
      },

      // EducDirectorCycle

      EducDirectorCycleImport: {
        id: 'EducDirectorCycleImport',
        allowedRoles: [roles.administrator],
      },
      EducDirectorCycleCreate: {
        id: 'EducDirectorCycleCreate',
        allowedRoles: [roles.administrator],
      },
      EducDirectorCycleEdit: {
        id: 'EducDirectorCycleEdit',
        allowedRoles: [roles.administrator],
      },
      EducDirectorCycleDestroy: {
        id: 'EducDirectorCycleDestroy',
        allowedRoles: [roles.administrator],
      },
      EducDirectorCycleRead: {
        id: 'EducDirectorCycleRead',
        allowedRoles: [roles.administrator],
      },
    };
  }

  // First

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
