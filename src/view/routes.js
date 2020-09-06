import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/homeController'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },
  {
    path: '/live',
    icon: 'right',
    label: i18n('Home.Classe'),
    loader: () => import('view/live/live'),
    permissionRequired: null,
    exact: true,
    menu: true,
  },
  {
    path: '/editpassword',
    loader: () =>
      import('view/auth/ProfileFormEditPasswordPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  // Matter
  {
    path: '/Matter',
    loader: () => import('view/matter/list/matterListPage'),
    permissionRequired: permissions.MatterRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Matter.menu'),
    menu: true,
  },
  {
    path: '/Matter/new',
    loader: () => import('view/matter/form/matterFormPage'),
    menu: false,
    permissionRequired: permissions.MatterCreate,
    exact: true,
  },
  {
    path: '/Matter/importer',
    loader: () =>
      import('view/matter/importer/matterImporterPage'),
    menu: false,
    permissionRequired: permissions.MatterImport,
    exact: true,
  },
  {
    path: '/Matter/:id/edit',
    loader: () => import('view/matter/form/matterFormPage'),
    menu: false,
    permissionRequired: permissions.MatterEdit,
    exact: true,
  },
  {
    path: '/Matter/:id',
    loader: () => import('view/matter/view/matterViewPage'),
    menu: false,
    permissionRequired: permissions.MatterRead,
    exact: true,
  },

  // Week
  {
    path: '/Week',
    loader: () => import('view/week/list/weekListPage'),
    permissionRequired: permissions.WeekRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Week.menu'),
    menu: true,
  },
  {
    path: '/Week/new',
    loader: () => import('view/week/form/weekFormPage'),
    menu: false,
    permissionRequired: permissions.WeekCreate,
    exact: true,
  },
  {
    path: '/Week/importer',
    loader: () =>
      import('view/week/importer/weekImporterPage'),
    menu: false,
    permissionRequired: permissions.WeekImport,
    exact: true,
  },
  {
    path: '/Week/:id/edit',
    loader: () => import('view/week/form/weekFormPage'),
    menu: false,
    permissionRequired: permissions.WeekEdit,
    exact: true,
  },
  {
    path: '/Week/:id',
    loader: () => import('view/week/view/weekViewPage'),
    menu: false,
    permissionRequired: permissions.WeekRead,
    exact: true,
  },

  // LevelSector
  {
    path: '/LevelSector',
    loader: () =>
      import('view/levelSector/list/levelSectorListPage'),
    permissionRequired: permissions.LevelSectorRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.LevelSector.menu'),
    menu: true,
  },
  {
    path: '/LevelSector/new',
    loader: () =>
      import('view/levelSector/form/levelSectorFormPage'),
    menu: false,
    permissionRequired: permissions.LevelSectorCreate,
    exact: true,
  },
  {
    path: '/LevelSector/importer',
    loader: () =>
      import(
        'view/levelSector/importer/levelSectorImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.LevelSectorImport,
    exact: true,
  },
  {
    path: '/LevelSector/:id/edit',
    loader: () =>
      import('view/levelSector/form/levelSectorFormPage'),
    menu: false,
    permissionRequired: permissions.LevelSectorEdit,
    exact: true,
  },
  {
    path: '/LevelSector/:id',
    loader: () =>
      import('view/levelSector/view/levelSectorViewPage'),
    menu: false,
    permissionRequired: permissions.LevelSectorRead,
    exact: true,
  },

  // Teachers
  {
    path: '/teachers',
    loader: () =>
      import('view/teachers/list/teachersListPage'),
    permissionRequired: permissions.TeachersRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Teachers.menu'),
    menu: true,
  },
  {
    path: '/teachers/new',
    loader: () =>
      import('view/teachers/form/teachersFormPage'),
    menu: false,
    permissionRequired: permissions.TeachersCreate,
    exact: true,
  },
  {
    path: '/teachers/importer',
    loader: () =>
      import('view/teachers/importer/teachersImporterPage'),
    menu: false,
    permissionRequired: permissions.TeachersImport,
    exact: true,
  },
  {
    path: '/teachers/:id/edit',
    loader: () =>
      import('view/teachers/form/teachersFormPage'),
    menu: false,
    permissionRequired: permissions.TeachersEdit,
    exact: true,
  },
  {
    path: '/teachers/:id',
    loader: () =>
      import('view/teachers/view/teachersViewPage'),
    menu: false,
    permissionRequired: permissions.TeachersRead,
    exact: true,
  },

  // Classroom
  {
    path: '/classroom',
    loader: () =>
      import('view/classroom/list/classroomListPage'),
    permissionRequired: permissions.ClassroomRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Classroom.menu'),
    menu: true,
  },
  {
    path: '/classroom/new',
    loader: () =>
      import('view/classroom/form/classroomFormPage'),
    menu: false,
    permissionRequired: permissions.ClassroomCreate,
    exact: true,
  },
  {
    path: '/classroom/importer',
    loader: () =>
      import(
        'view/classroom/importer/classroomImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.ClassroomImport,
    exact: true,
  },
  {
    path: '/classroom/:id/edit',
    loader: () =>
      import('view/classroom/form/classroomFormPage'),
    menu: false,
    permissionRequired: permissions.ClassroomEdit,
    exact: true,
  },
  {
    path: '/classroom/:id',
    loader: () =>
      import('view/classroom/view/classroomViewPage'),
    menu: false,
    permissionRequired: permissions.ClassroomRead,
    exact: true,
  },

  // FramerMatterCycle
  {
    path: '/framerMatterCycle',
    loader: () =>
      import(
        'view/framerMatterCycle/list/framerMatterCycleListPage'
      ),
    permissionRequired: permissions.FramerMatterCycleRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.FramerMatterCycle.menu'),
    menu: true,
  },
  {
    path: '/framerMatterCycle/new',
    loader: () =>
      import(
        'view/framerMatterCycle/form/framerMatterCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.FramerMatterCycleCreate,
    exact: true,
  },
  {
    path: '/framerMatterCycle/importer',
    loader: () =>
      import(
        'view/framerMatterCycle/importer/framerMatterCycleImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.FramerMatterCycleImport,
    exact: true,
  },
  {
    path: '/framerMatterCycle/:id/edit',
    loader: () =>
      import(
        'view/framerMatterCycle/form/framerMatterCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.FramerMatterCycleEdit,
    exact: true,
  },
  {
    path: '/framerMatterCycle/:id',
    loader: () =>
      import(
        'view/framerMatterCycle/view/framerMatterCycleViewPage'
      ),
    menu: false,
    permissionRequired: permissions.FramerMatterCycleRead,
    exact: true,
  },

  // Level
  {
    path: '/level',
    loader: () => import('view/level/list/levelListPage'),
    permissionRequired: permissions.LevelRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Level.menu'),
    menu: true,
  },
  {
    path: '/level/new',
    loader: () => import('view/level/form/levelFormPage'),
    menu: false,
    permissionRequired: permissions.LevelCreate,
    exact: true,
  },
  {
    path: '/level/importer',
    loader: () =>
      import('view/level/importer/levelImporterPage'),
    menu: false,
    permissionRequired: permissions.LevelImport,
    exact: true,
  },
  {
    path: '/level/:id/edit',
    loader: () => import('view/level/form/levelFormPage'),
    menu: false,
    permissionRequired: permissions.LevelEdit,
    exact: true,
  },
  {
    path: '/level/:id',
    loader: () => import('view/level/view/levelViewPage'),
    menu: false,
    permissionRequired: permissions.LevelRead,
    exact: true,
  },

  // Framer
  {
    path: '/framer',
    loader: () => import('view/framer/list/framerListPage'),
    permissionRequired: permissions.FramerRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Framer.menu'),
    menu: true,
  },
  {
    path: '/framer/new',
    loader: () => import('view/framer/form/framerFormPage'),
    menu: false,
    permissionRequired: permissions.FramerCreate,
    exact: true,
  },
  {
    path: '/framer/importer',
    loader: () =>
      import('view/framer/importer/framerImporterPage'),
    menu: false,
    permissionRequired: permissions.FramerImport,
    exact: true,
  },
  {
    path: '/framer/:id/edit',
    loader: () => import('view/framer/form/framerFormPage'),
    menu: false,
    permissionRequired: permissions.FramerEdit,
    exact: true,
  },
  {
    path: '/framer/:id',
    loader: () => import('view/framer/view/framerViewPage'),
    menu: false,
    permissionRequired: permissions.FramerRead,
    exact: true,
  },

  // Cycle
  {
    path: '/cycle',
    loader: () => import('view/cycle/list/cycleListPage'),
    permissionRequired: permissions.CycleRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Cycle.menu'),
    menu: true,
  },
  {
    path: '/cycle/new',
    loader: () => import('view/cycle/form/cycleFormPage'),
    menu: false,
    permissionRequired: permissions.CycleCreate,
    exact: true,
  },
  {
    path: '/cycle/importer',
    loader: () =>
      import('view/cycle/importer/cycleImporterPage'),
    menu: false,
    permissionRequired: permissions.CycleImport,
    exact: true,
  },
  {
    path: '/cycle/:id/edit',
    loader: () => import('view/cycle/form/cycleFormPage'),
    menu: false,
    permissionRequired: permissions.CycleEdit,
    exact: true,
  },
  {
    path: '/cycle/:id',
    loader: () => import('view/cycle/view/cycleViewPage'),
    menu: false,
    permissionRequired: permissions.CycleRead,
    exact: true,
  },

  // Students
  {
    path: '/students',
    loader: () =>
      import('view/students/list/studentsListPage'),
    permissionRequired: permissions.StudentsRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Students.menu'),
    menu: true,
  },
  {
    path: '/students/new',
    loader: () =>
      import('view/students/form/studentsFormPage'),
    menu: false,
    permissionRequired: permissions.StudentsCreate,
    exact: true,
  },
  {
    path: '/students/importer',
    loader: () =>
      import('view/students/importer/studentsImporterPage'),
    menu: false,
    permissionRequired: permissions.StudentsImport,
    exact: true,
  },
  {
    path: '/students/:id/edit',
    loader: () =>
      import('view/students/form/studentsFormPage'),
    menu: false,
    permissionRequired: permissions.StudentsEdit,
    exact: true,
  },
  {
    path: '/students/:id',
    loader: () =>
      import('view/students/view/studentsViewPage'),
    menu: false,
    permissionRequired: permissions.StudentsRead,
    exact: true,
  },

  // ClassroomTeacherMatter
  {
    path: '/classroomTeacherMatter',
    loader: () =>
      import(
        'view/classroomTeacherMatter/list/classroomTeacherMatterListPage'
      ),
    permissionRequired:
      permissions.ClassroomTeacherMatterRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.ClassroomTeacherMatter.menu'),
    menu: true,
  },
  {
    path: '/classroomTeacherMatter/new',
    loader: () =>
      import(
        'view/classroomTeacherMatter/form/classroomTeacherMatterFormPage'
      ),
    menu: false,
    permissionRequired:
      permissions.ClassroomTeacherMatterCreate,
    exact: true,
  },
  {
    path: '/classroomTeacherMatter/importer',
    loader: () =>
      import(
        'view/classroomTeacherMatter/importer/classroomTeacherMatterImporterPage'
      ),
    menu: false,
    permissionRequired:
      permissions.ClassroomTeacherMatterImport,
    exact: true,
  },
  {
    path: '/classroomTeacherMatter/:id/edit',
    loader: () =>
      import(
        'view/classroomTeacherMatter/form/classroomTeacherMatterFormPage'
      ),
    menu: false,
    permissionRequired:
      permissions.ClassroomTeacherMatterEdit,
    exact: true,
  },
  {
    path: '/classroomTeacherMatter/:id',
    loader: () =>
      import(
        'view/classroomTeacherMatter/view/classroomTeacherMatterViewPage'
      ),
    menu: false,
    permissionRequired:
      permissions.ClassroomTeacherMatterRead,
    exact: true,
  },

  // Roomsession
  {
    path: '/roomsession',
    loader: () =>
      import('view/roomsession/list/roomsessionListPage'),
    permissionRequired: permissions.RoomsessionRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Roomsession.menu'),
    menu: true,
  },
  {
    path: '/roomsession/new',
    loader: () =>
      import('view/roomsession/form/roomsessionFormPage'),
    menu: false,
    permissionRequired: permissions.RoomsessionCreate,
    exact: true,
  },
  {
    path: '/roomsession/importer',
    loader: () =>
      import(
        'view/roomsession/importer/roomsessionImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.RoomsessionImport,
    exact: true,
  },
  {
    path: '/roomsession/:id/edit',
    loader: () =>
      import('view/roomsession/form/roomsessionFormPage'),
    menu: false,
    permissionRequired: permissions.RoomsessionEdit,
    exact: true,
  },
  {
    path: '/roomsession/:id',
    loader: () =>
      import('view/roomsession/view/roomsessionViewPage'),
    menu: false,
    permissionRequired: permissions.RoomsessionRead,
    exact: true,
  },

  // Assignments
  {
    path: '/assignments',
    loader: () =>
      import('view/assignments/list/assignmentsListPage'),
    permissionRequired: permissions.AssignmentsRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Assignments.menu'),
    menu: true,
  },
  {
    path: '/assignments/new',
    loader: () =>
      import('view/assignments/form/assignmentsFormPage'),
    menu: false,
    permissionRequired: permissions.AssignmentsCreate,
    exact: true,
  },
  {
    path: '/assignments/importer',
    loader: () =>
      import(
        'view/assignments/importer/assignmentsImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.AssignmentsImport,
    exact: true,
  },
  {
    path: '/assignments/:id/edit',
    loader: () =>
      import('view/assignments/form/assignmentsFormPage'),
    menu: false,
    permissionRequired: permissions.AssignmentsEdit,
    exact: true,
  },
  {
    path: '/assignments/:id',
    loader: () =>
      import('view/assignments/view/assignmentsViewPage'),
    menu: false,
    permissionRequired: permissions.AssignmentsRead,
    exact: true,
  },

  // Element
  {
    path: '/element',
    loader: () =>
      import('view/element/list/elementListPage'),
    permissionRequired: permissions.ElementRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Element.menu'),
    menu: true,
  },
  {
    path: '/element/new',
    loader: () =>
      import('view/element/form/elementFormPage'),
    menu: false,
    permissionRequired: permissions.ElementCreate,
    exact: true,
  },
  {
    path: '/element/importer',
    loader: () =>
      import('view/element/importer/elementImporterPage'),
    menu: false,
    permissionRequired: permissions.ElementImport,
    exact: true,
  },
  {
    path: '/element/:id/edit',
    loader: () =>
      import('view/element/form/elementFormPage'),
    menu: false,
    permissionRequired: permissions.ElementEdit,
    exact: true,
  },
  {
    path: '/element/:id',
    loader: () =>
      import('view/element/view/elementViewPage'),
    menu: false,
    permissionRequired: permissions.ElementRead,
    exact: true,
  },

  // SchoolYear
  {
    path: '/schoolYear',
    loader: () =>
      import('view/schoolYear/list/schoolYearListPage'),
    permissionRequired: permissions.SchoolYearRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.SchoolYear.menu'),
    menu: true,
  },
  {
    path: '/schoolYear/new',
    loader: () =>
      import('view/schoolYear/form/schoolYearFormPage'),
    menu: false,
    permissionRequired: permissions.SchoolYearCreate,
    exact: true,
  },
  {
    path: '/schoolYear/importer',
    loader: () =>
      import(
        'view/schoolYear/importer/schoolYearImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.SchoolYearImport,
    exact: true,
  },
  {
    path: '/schoolYear/:id/edit',
    loader: () =>
      import('view/schoolYear/form/schoolYearFormPage'),
    menu: false,
    permissionRequired: permissions.SchoolYearEdit,
    exact: true,
  },
  {
    path: '/schoolYear/:id',
    loader: () =>
      import('view/schoolYear/view/schoolYearViewPage'),
    menu: false,
    permissionRequired: permissions.SchoolYearRead,
    exact: true,
  },

  // TimeTableTeacher
  {
    path: '/timeTableTeacher',
    loader: () =>
      import(
        'view/timeTableTeacher/list/timeTableTeacherListPage'
      ),
    permissionRequired: permissions.TimeTableTeacherRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.TimeTableTeacher.menu'),
    menu: true,
  },

  // Register
  {
    path: '/register',
    loader: () =>
      import('view/register/list/registerListPage'),
    permissionRequired: permissions.RegisterRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Register.menu'),
    menu: true,
  },
  {
    path: '/register/new',
    loader: () =>
      import('view/register/form/registerFormPage'),
    menu: false,
    permissionRequired: permissions.RegisterCreate,
    exact: true,
  },
  {
    path: '/register/importer',
    loader: () =>
      import('view/register/importer/registerImporterPage'),
    menu: false,
    permissionRequired: permissions.RegisterImport,
    exact: true,
  },
  {
    path: '/register/:id/edit',
    loader: () =>
      import('view/register/form/registerFormPage'),
    menu: false,
    permissionRequired: permissions.RegisterEdit,
    exact: true,
  },
  {
    path: '/register/:id',
    loader: () =>
      import('view/register/view/registerViewPage'),
    menu: false,
    permissionRequired: permissions.RegisterRead,
    exact: true,
  },

  // Chat
  {
    path: '/chat',
    loader: () => import('view/chat/list/chatListPage'),
    permissionRequired: permissions.ChatRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Chat.menu'),
    menu: true,
  },
  {
    path: '/chat/new',
    loader: () => import('view/chat/form/chatFormPage'),
    menu: false,
    permissionRequired: permissions.ChatCreate,
    exact: true,
  },
  {
    path: '/chat/importer',
    loader: () =>
      import('view/chat/importer/chatImporterPage'),
    menu: false,
    permissionRequired: permissions.ChatImport,
    exact: true,
  },
  {
    path: '/chat/:id/edit',
    loader: () => import('view/chat/form/chatFormPage'),
    menu: false,
    permissionRequired: permissions.ChatEdit,
    exact: true,
  },
  {
    path: '/chat/:id',
    loader: () => import('view/chat/view/chatViewPage'),
    menu: false,
    permissionRequired: permissions.ChatRead,
    exact: true,
  },

  // Responsible
  {
    path: '/responsibles',
    loader: () =>
      import('view/responsibles/list/responsiblesListPage'),
    permissionRequired: permissions.ResponsibleRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Responsibles.menu'),
    menu: true,
  },
  {
    path: '/responsibles/new',
    loader: () =>
      import('view/responsibles/form/responsiblesFormPage'),
    menu: false,
    permissionRequired: permissions.ResponsibleCreate,
    exact: true,
  },
  {
    path: '/responsibles/importer',
    loader: () =>
      import(
        'view/responsibles/importer/responsiblesImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.ResponsibleImport,
    exact: true,
  },
  {
    path: '/responsibles/:id/edit',
    loader: () =>
      import('view/responsibles/form/responsiblesFormPage'),
    menu: false,
    permissionRequired: permissions.ResponsibleEdit,
    exact: true,
  },
  {
    path: '/responsibles/:id',
    loader: () =>
      import('view/responsibles/view/responsiblesViewPage'),
    menu: false,
    permissionRequired: permissions.ResponsibleRead,
    exact: true,
  },

  // CourseStudents
  {
    path: '/courseStudents',
    loader: () =>
      import(
        'view/courseStudents/list/courseStudentsListPage'
      ),
    permissionRequired: permissions.CourseStudentsRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.CourseStudents.menu'),
    menu: true,
  },

  // EducDirector
  {
    path: '/educDirector',
    loader: () =>
      import('view/educDirector/list/educDirectorListPage'),
    permissionRequired: permissions.EducDirectorRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.EducDirector.menu'),
    menu: true,
  },
  {
    path: '/educDirector/new',
    loader: () =>
      import('view/educDirector/form/educDirectorFormPage'),
    menu: false,
    permissionRequired: permissions.EducDirectorCreate,
    exact: true,
  },
  {
    path: '/educDirector/importer',
    loader: () =>
      import(
        'view/educDirector/importer/educDirectorImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.EducDirectorImport,
    exact: true,
  },
  {
    path: '/educDirector/:id/edit',
    loader: () =>
      import('view/educDirector/form/educDirectorFormPage'),
    menu: false,
    permissionRequired: permissions.EducDirectorEdit,
    exact: true,
  },
  {
    path: '/educDirector/:id',
    loader: () =>
      import('view/educDirector/view/educDirectorViewPage'),
    menu: false,
    permissionRequired: permissions.EducDirectorRead,
    exact: true,
  },

  // Parent
  {
    path: '/parent',
    loader: () => import('view/parent/list/parentListPage'),
    permissionRequired: permissions.ParentRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Parent.menu'),
    menu: true,
  },
  {
    path: '/parent/new',
    loader: () => import('view/parent/form/parentFormPage'),
    menu: false,
    permissionRequired: permissions.ParentCreate,
    exact: true,
  },
  {
    path: '/parent/importer',
    loader: () =>
      import('view/parent/importer/parentImporterPage'),
    menu: false,
    permissionRequired: permissions.ParentImport,
    exact: true,
  },
  {
    path: '/parent/:id/edit',
    loader: () => import('view/parent/form/parentFormPage'),
    menu: false,
    permissionRequired: permissions.ParentEdit,
    exact: true,
  },
  {
    path: '/parent/:id',
    loader: () => import('view/parent/view/parentViewPage'),
    menu: false,
    permissionRequired: permissions.ParentRead,
    exact: true,
  },

  // Sector
  {
    path: '/sector',
    loader: () => import('view/sector/list/sectorListPage'),
    permissionRequired: permissions.SectorRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.Sector.menu'),
    menu: true,
  },
  {
    path: '/sector/new',
    loader: () => import('view/sector/form/sectorFormPage'),
    menu: false,
    permissionRequired: permissions.SectorCreate,
    exact: true,
  },
  {
    path: '/sector/importer',
    loader: () =>
      import('view/sector/importer/sectorImporterPage'),
    menu: false,
    permissionRequired: permissions.SectorImport,
    exact: true,
  },
  {
    path: '/sector/:id/edit',
    loader: () => import('view/sector/form/sectorFormPage'),
    menu: false,
    permissionRequired: permissions.SectorEdit,
    exact: true,
  },
  {
    path: '/sector/:id',
    loader: () => import('view/sector/view/sectorViewPage'),
    menu: false,
    permissionRequired: permissions.SectorRead,
    exact: true,
  },

  // ResponsibleCycle
  {
    path: '/responsibleCycle',
    loader: () =>
      import(
        'view/responsibleCycle/list/responsibleCycleListPage'
      ),
    permissionRequired: permissions.ResponsibleCycleRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.ResponsibleCycle.menu'),
    menu: true,
  },
  {
    path: '/responsibleCycle/new',
    loader: () =>
      import(
        'view/responsibleCycle/form/responsibleCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.ResponsibleCycleCreate,
    exact: true,
  },
  {
    path: '/responsibleCycle/importer',
    loader: () =>
      import(
        'view/responsibleCycle/importer/responsibleCycleImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.ResponsibleCycleImport,
    exact: true,
  },
  {
    path: '/responsibleCycle/:id/edit',
    loader: () =>
      import(
        'view/responsibleCycle/form/responsibleCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.ResponsibleCycleEdit,
    exact: true,
  },
  {
    path: '/responsibleCycle/:id',
    loader: () =>
      import(
        'view/responsibleCycle/view/responsibleCycleViewPage'
      ),
    menu: false,
    permissionRequired: permissions.ResponsibleCycleRead,
    exact: true,
  },

  // EducDirectorCycle
  {
    path: '/educDirectorCycle',
    loader: () =>
      import(
        'view/educDirectorCycle/list/educDirectorCycleListPage'
      ),
    permissionRequired: permissions.EducDirectorCycleRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.EducDirectorCycle.menu'),
    menu: true,
  },
  {
    path: '/educDirectorCycle/new',
    loader: () =>
      import(
        'view/educDirectorCycle/form/educDirectorCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.EducDirectorCycleCreate,
    exact: true,
  },
  {
    path: '/educDirectorCycle/importer',
    loader: () =>
      import(
        'view/educDirectorCycle/importer/educDirectorCycleImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.EducDirectorCycleImport,
    exact: true,
  },
  {
    path: '/educDirectorCycle/:id/edit',
    loader: () =>
      import(
        'view/educDirectorCycle/form/educDirectorCycleFormPage'
      ),
    menu: false,
    permissionRequired: permissions.EducDirectorCycleEdit,
    exact: true,
  },
  {
    path: '/educDirectorCycle/:id',
    loader: () =>
      import(
        'view/educDirectorCycle/view/educDirectorCycleViewPage'
      ),
    menu: false,
    permissionRequired: permissions.EducDirectorCycleRead,
    exact: true,
  },

  // {
  //   path: '/account_setting',
  //   loader: () => import('view/auth/AccountSetting'),

  //   permissionRequired: null,
  //   exact: true,
  //   icon: 'setting',
  //   label: i18n('auth.menu'),
  //   menu: true,
  // },
  // {
  //   path: '/settings',
  //   icon: 'setting',
  //   label: i18n('settings.menu'),
  //   loader: () => import('view/settings/SettingsFormPage'),
  //   permissionRequired: permissions.iamEdit,
  //   menu: true,
  // },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
  {
    path: '/auth/forgot-password/code',
    loader: () =>
      import('view/auth/ForgotPasswordPageCode'),
  },
  {
    path: '/auth/forgot-password/new-password',
    loader: () =>
      import('view/auth/ForgotPasswordPageReset'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const errorRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  errorRoutes,
};
