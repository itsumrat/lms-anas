const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    publish: 'Publish',
    closing: 'Closing',
    duplicate: 'Duplicate',
    archive: 'Archive',
    cancelPub: 'Cancel the publication',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
  },

  app: {
    title: 'QraMenDar',
  },

  auth: {
    accountSeting: {
      title: 'Settings',
    },
    menu: 'Settings',

    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    editpassword: {
      title: 'Edit Password',
      success: 'Password updated successfully',
      error: 'Password Incorrect',
      errornewpassword: 'Passwords do not match',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyUsed: 'Already used',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordReset: {
      message: 'Send password reset email',
      message1: 'Resend mail',
      error: `Email not recognized`,
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    alreadyActive: 'Account already Active',

    passwordResetSuccess: `Password reset email sent successfully`,

    passwordResetErrorEmail: `Email is invalid`,
  },

  Home: {
    Classe: 'Class',
    Classes: 'Class list',
    menu: {
      Cours: 'Courses',
      Classes: 'Live Classe',
      records: 'Records',
      Access: 'Access',
    },
  },

  entities: {
    Assignments: {
      menu: 'Assignments',
      list: {
        title: 'Assignments list',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        assignmentsName: 'assignment Name',
      },
    },
    Matter: {
      menu: 'matters',
      list: {
        title: 'matters',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        name: 'Matter Name',
        createdAtRange: 'Created At Range',
      },
    },
    Teachers: {
      menu: 'Teachers',
      list: {
        title: 'Teachers',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        name: 'Username',
        first_name: 'First Name',
        last_name: 'Last Name',
        email: 'E-mail',
      },
    },
    ClassroomStudent: {
      menu: 'Student - Classe',
      list: {
        title: 'Student - Classe',
      },
      fields: {
        id: 'id',
        created_at: 'Created At',
        updated_at: 'Updated At',
        createdAtRange: 'Created At Range',
        students: 'Student',
        class: 'Class',
        level: 'Level',
        level: 'Level',
        matter: 'Matter',
      },
    },
    Level: {
      menu: 'Level',
      list: {
        title: 'School Levels',
      },
      fields: {
        id: 'id',
        name: 'Level Name',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
      },
    },
    Students: {
      menu: 'Students',
      list: {
        title: 'School Students',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        name: 'Username',
        first_name: 'First Name',
        last_name: 'Last Name',
        email: 'E-mail',
      },
    },
    Responsibles: {
      menu: 'Responsibles',
      list: {
        title: 'School Responsibles',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        Username: 'Username',
        Firstname: 'First Name',
        Lastname: 'Last Name',
        Email: 'E-mail',
      },
    },
    Level: {
      menu: 'Levels',
      list: {
        title: 'Levels',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        name: 'Level Name',
        level: 'Level',
      },
    },
    Classroom: {
      menu: 'Class Names',
      list: {
        title: 'Class Names',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        name: 'Class Name',
        level: 'Level',
        level: 'Level',
        matter: 'Matter',
      },
    },
    ClassroomTeacherMatter: {
      menu: 'Class - Teacher - Matter',
      list: {
        title: 'Class - Teacher - Matter',
      },
      fields: {
        id: 'id',
        created_at: 'Created At',
        updated_at: 'Updated At',
        createdAtRange: 'Created At Range',
        class: 'Class',
        level: 'Level',
        level: 'Level',
        matter: 'Matter',
        teachers: 'Teacher',
      },
    },
    Roomsession: {
      menu: 'Room Sessions Confuguration',
      list: {
        title: 'Room Sessions Confuguration (Classroom)',
      },
      fields: {
        id: 'id',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        createdAtRange: 'Created At Range',
        RoomName: 'Room Name',
        classroomStudent: 'Classroom - Student',
        days: 'Day',
        start_time: 'Start Time',
        end_time: 'End Time',
        class: 'Class',
        level: 'Level',
        level: 'Level',
        matter: 'Matter',
        teacher: 'Teacher',
      },
    },
    Departments: {
      menu: 'Departments',
      list: {
        title: 'School Departments',
      },
      fields: {
        id: 'id',
        created_at: 'Created At',
        updated_at: 'Updated At',
        createdAtRange: 'Created At Range',
        name: 'Department Name',
      },
    },
  },

  roles: {
    user: {
      label: 'user',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars_url: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      name: 'Username',

      first_name: 'First Name',
      last_name: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      created_at: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      confirmPassword: 'Confirm password',

      newpassword: 'New Password',

      confirm_password: 'Confirm Password',
      rememberMe: 'Remember me',
      language: 'language',
      timezone: 'timezone',
      placeholder: {
        timezone: 'Select a timzone',
      },
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Accueil',
    message: `Cette page utilise de fausses données à des fins de démonstration uniquement. Vous pouvez la modifier à l'adresse frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Journée',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      sales: 'Ventes',
      visitor: 'Visiteurs',
      months: {
        1: 'Janvier',
        2: 'Février',
        3: 'Mars',
        4: 'Avril',
        5: 'Mai',
        6: 'Juin',
        7: 'Juillet',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  live: {
    menu: 'Live',
  },

  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} impo removed successfully',
  },
  roles: {
    label: 'Roles',
    doRemoveAllSelectedSuccess:
      rted, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
