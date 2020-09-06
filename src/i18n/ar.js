const ar = {
  common: {
    or: 'أو',
    cancel: 'الغاء',
    reset: 'إعادة تعيين',
    save: 'حفظ',
    search: 'بحث',
    edit: 'تعديل',
    publish: 'ينشر',
    closing: 'إغلاق',
    duplicate: 'كرر',
    archive: 'أرشيف',
    cancelPub: 'قم بإلغاء النشر',
    remove: 'حذف',
    new: 'جديد',
    export: 'تصدير',
    noDataToExport: 'لا توجد بيانات للتصدير',
    import: 'استيراد',
    discard: 'تخلص من',
    yes: 'نعم',
    no: 'لا',
    pause: 'استراحة',
    areYouSure: 'هل انت متأكد ؟',
    view: 'استشر',
    destroy: 'حذف',
    mustSelectARow: 'يجب تحديد خط',
  },

  app: {
    title: 'SkyUp Academy',
  },

  auth: {
    accountSeting: {
      title: 'اللغة والمنطقة الزمنية',
    },
    menu: 'التكوين',
    profile: {
      title: 'تحرير ملف التعريف',
      success: 'تم تحديث ملف التعريف بنجاح',
    },
    editpassword: {
      title: 'تغيير كلمة المرور',
      success: 'تم تحديث كلمة المرور بنجاح',
      error: 'كلمة المرور غير صحيحة',
      errornewpassword: 'كلمات المرور ليست هي نفسها',
    },
    createAnAccount: 'إفتح حساب',
    rememberMe: 'تذكرني.',
    forgotPassword: 'نسيت كلمة المرور',
    signin: 'حدد',
    signup: 'سجل',
    signout: 'تسجيل الخروج',
    alreadyUsed:
      'عنوان البريد الإلكتروني هذا قيد الاستخدام بالفعل',

    alreadyHaveAnAccount:
      'هل لديك حساب بالفعل؟ تسجيل الدخول.',
    signinWithAnotherAccount:
      'هل لديك حساب بالفعل؟ تسجيل الدخول.',
    emailUnverified: {
      message: `يرجى تأكيد بريدك الإلكتروني على <strong> {0} </strong> للمتابعة.`,
      submit: `إعادة إرسال التحقق من البريد الإلكتروني`,
    },
    emptyPermissions: {
      message: `ليس لديك أذونات حتى الآن. انتظر حتى يمنحك المشرف الامتيازات`,
    },
    passwordReset: {
      message:
        'إرسال بريد إلكتروني لإعادة تعيين كلمة المرور',
      message1: 'إعادة إرسال البريد الإلكتروني',
      error: `بريد إلكتروني غير معروف`,
    },
    emailAddressVerificationEmail: {
      error: `بريد إلكتروني غير معروف`,
    },
    verificationEmailSuccess: `تم إرسال رسالة التحقق بنجاح`,
    alreadyActive: 'تم تنشيط الحساب بالفعل',
    passwordResetSuccess: `تم إرسال البريد الإلكتروني لإعادة تعيين كلمة المرور بنجاح`,
  },

  Home: {
    Classe: 'الصف',
    Classes: 'قائمة الصفوف',
    menu: {
      Cours: 'الدروس',
      Classes: 'الصفوف',
      records: 'التسجيلات',
      Access: 'ولوج',
    },
  },

  entities: {
    Matter: {
      menu: 'المواد',
      list: {
        title: 'المواد',
      },
      fields: {
        id: 'هوية',
        createdAt: 'إنشاء في',
        updatedAt: 'تم التعديل في',
        name: 'اسم المادة',
        createdAtRange: 'الفترة',
      },
    },
    Assignments: {
      menu: 'تعيينات',
      list: {
        title: 'قائمة الدروس',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        assignmentsName: 'اسم الملف',
      },
    },
    Teachers: {
      menu: 'المعلمين',
      list: {
        title: 'المعلمين',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        name: 'إسم المستخدم',
        first_name: 'الاسم الاول',
        last_name: 'الاسم العائلي',
        email: 'البريد الإلكتروني',
      },
    },
    ClassroomStudent: {
      menu: 'وصل الفصل والطالب',
      list: {
        title: 'وصل الفصل والطالب',
      },
      fields: {
        id: 'id',
        created_at: 'إنشاء في',
        updated_at: 'تحرير إلى',
        createdAtRange: 'فترة',
        students: 'الطلاب',
        class: 'الصف دراسي',
        level: 'فوج',
        level: 'مستوى',
        matter: 'المادة',
      },
    },
    Level: {
      menu: 'المستويات',
      list: {
        title: 'مستويات المدرسة',
      },
      fields: {
        id: 'id',
        name: 'اسم المستوى',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
      },
    },
    Students: {
      menu: 'الطلاب',
      list: {
        title: 'طلاب المدرسة',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        name: 'إسم المستخدم',
        first_name: 'الاسم الاول',
        last_name: 'الاسم العائلي',
        email: 'البريد الإلكتروني',
      },
    },
    Responsibles: {
      menu: 'مسؤول',
      list: {
        title: 'مسؤولو المدرسة',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        Username: 'إسم المستخدم',
        Firstname: 'الاسم الاول',
        Lastname: 'الاسم العائلي',
        Email: 'البريد الإلكتروني',
      },
    },
    Level: {
      menu: 'أفواج',
      list: {
        title: 'أفواج',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        name: 'اسم الفوج',
        level: 'مستوى',
      },
    },
    Classroom: {
      menu: 'أسماء الصف',
      list: {
        title: 'أسماء الصف',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        name: 'اسم الفصل',
        level: 'فوج',
        level: 'مستوى',
        matter: 'المادة',
      },
    },
    ClassroomTeacherMatter: {
      menu: 'وصل مواد - صف - المعلم',
      list: {
        title: 'وصل مواد - صف - المعلم',
      },
      fields: {
        id: 'id',
        created_at: 'إنشاء في',
        updated_at: 'تحرير إلى',
        createdAtRange: 'فترة',
        class: 'صف دراسي',
        level: 'فوج',
        level: 'مستوى',
        matter: 'المادة',
        teachers: 'معلمون',
      },
    },
    Roomsession: {
      menu: 'تعديل الدروس المباشرة',
      list: {
        title: 'تعديل الدروس المباشرة',
      },
      fields: {
        id: 'id',
        createdAt: 'إنشاء في',
        updatedAt: 'تحرير إلى',
        createdAtRange: 'فترة',
        RoomName: 'اسم الحصة',
        classroomStudent: 'صف دراسي - الطلاب',
        days: 'يوم',
        start_time: 'وقت البدء',
        end_time: 'وقت النهاية',
        class: 'صف دراسي',
        level: 'فوج',
        level: 'مستوى',
        matter: 'المادة',
        teacher: 'معلمون',
      },
    },
  },

  roles: {
    user: {
      label: 'المستخدم',
      description: 'الوصول الكامل إلى جميع الموارد',
    },
    editor: {
      label: 'رئيس التحرير',
      description: 'تغيير الوصول إلى جميع الموارد',
    },
    viewer: {
      label: 'مشاهد',
      description: 'عرض الوصول إلى جميع الموارد',
    },
  },

  user: {
    fields: {
      id: 'هوية',
      authenticationUid: 'المصادقة Uid',
      avatars_url: 'الصورة الرمزية',
      email: 'البريد الإلكتروني',
      emails: 'البريد الإلكتروني',
      fullName: 'الاسم',
      name: 'إسم المستخدم',

      first_name: 'الاسم الأول',
      last_name: 'الاسم الأخير',
      status: 'الحالة',
      disabled: 'تعطيل؟',
      phoneNumber: 'الهاتف',
      role: 'الدور',
      created_at: 'إنشاء في',
      updatedAt: 'تم التحديث في',
      roleUser: 'دور المستخدم',
      roles: 'الأدوار',
      createdAtRange: 'إنشاء في',
      password: 'كلمة السر',
      newpassword: 'كلمة مرور جديدة',
      confirmPassword: 'تأكيد كلمة المرور',
      confirm_password: 'تأكيد كلمة المرور',

      rememberMe: 'تذكرني',
      language: 'اللغة',
      timezone: 'منطقة زمنية',
      placeholder: {
        timezone: 'حدد منطقة زمنية',
      },
    },
    enabled: 'نشطة ؟',
    disabled: 'نعطيل؟',
    validations: {
      // eslint-disable-next-line
      email: 'عنوان البريد الإلكتروني ${value} غير صالح',
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
    title: 'الإعدادات',
    menu: 'الإعدادات',
    save: {
      success:
        'تم حفظ الإعدادات بنجاح. ستتم إعادة تحميل الصفحة خلال {0} ثانية حتى تصبح التغييرات سارية المفعول.',
    },
    fields: {
      theme: 'قالب',
    },
    colors: {
      default: 'إفتراضي',
      cyan: 'سماوي',
      'geek-blue': 'المهوس الأزرق',
      gold: 'ذهب',
      lime: 'جير',
      magenta: '1 الأرجواني',
      orange: 'برتقالي',
      'polar-green': 'القطبية الخضراء',
      purple: 'أرجواني',
      red: 'أحمر',
      volcano: 'بركان',
      yellow: 'الأصفر',
    },
  },
  home: {
    menu: 'ترحيب',
    message: `تستخدم هذه الصفحة بيانات خاطئة لأغراض العرض التوضيحي فقط. يمكنك تغييره في الواجهة الأمامية / view / home / HomePage.js.`,
    charts: {
      day: 'يوم',
      red: 'أحمر',
      green: 'أخضر',
      yellow: 'أصفر',
      grey: 'رمادي',
      blue: 'أزرق',
      sales: 'المبيعات',
      visitor: 'الزوار',
      months: {
        1: 'يناير',
        2: 'فبراير',
        3: 'مارس',
        4: 'أبريل',
        5: 'مايو',
        6: 'يونيو',
        7: 'يوليو',
      },
      eating: 'يتناول الطعام',
      drinking: 'الشرب',
      sleeping: 'نائم',
      designing: 'تصميم',
      coding: 'الترميز',
      cycling: 'ركوب الدراجات',
      running: 'ادارة',
      customer: 'الزبون',
    },
  },
  live: {
    menu: 'بث على الهواء',
  },
  errors: {
    backToHome: 'عودة إلى الإستقبال',
    403: `عذرا ، لا يمكنك الوصول إلى هذه الصفحة`,
    404: 'عذرا ، الصفحة التي زرتها غير موجودة',
    500: 'عذرًا ، أبلغ الخادم عن خطأ',
    forbidden: {
      message: 'ممنوع',
    },
    validation: {
      message: 'حدث خطأ',
    },
    defaultErrorMessage: 'عذرًا ، حدث خطأ',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} غير صالح',
      required: '${path} مطلوب',
      oneOf: '${path} يجب أن تكون إحدى القيم التالية:',
      notOneOf:
        '${path} يجب ألا تكون إحدى القيم التالية: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} يجب أن يكون أ ${type}`;
      },
    },
    string: {
      length: '${path} يجب أن تكون الأحرف بالضبط ',
      min:
        '${path} يجب أن يكون $ {min} من الأحرف على الأقل',
      max: '${path}يجب ألا يزيد عدد الحروف عن $ {max}',
      matches:
        '${path} يجب أن يتطابق مع ما يلي: "${regex}"',
      email: '${path} يجب أن يكون بريدًا إلكترونيًا صالحًا',
      url: '${path} يجب أن يكون عنوان URL صالحًا',
      trim: '${path} يجب أن يكون حبل قطع',
      lowercase: '${path} يجب أن تكون سلسلة صغيرة',
      uppercase: '${path} يجب أن تكون سلسلة صغيرة',
      selected: '${path} يجب تحديده',
    },
    number: {
      min: '${path} يجب أن يكون أكبر من أو يساوي',
      max: '${path} يجب أن يكون أقل من أو يساوي ${max}',
      lessThan: '${path} يجب أن يكون أقل من ${less}',
      moreThan: '${path} يجب أن يكون أكبر من ${more}',
      notEqual:
        '${path} لا ينبغي أن تكون مساوية لـ ${notEqual}',
      positive: '${path} يجب أن يكون رقمًا موجبًا',
      negative: '${path} يجب أن يكون رقمًا سالبًا',
      integer: '${path} يجب أن يكون عددًا صحيحًا',
    },
    date: {
      min: '${path} يجب أن يكون الحقل بعد ${min}',
      max:
        '${path}  يجب أن يكون الحقل في تاريخ أقدم من ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} لا يمكن أن يحتوي الحقل على مفاتيح غير محددة في شكل الكائن',
    },
    array: {
      min:
        '${path} يجب أن يحتوي الحقل على عناصر $ {min} على الأقل',
      max:
        '${path} يجب أن يحتوي الحقل على عدد من العناصر أقل من أو يساوي ${max}.',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'تحميل',
    image: 'يجب عليك تحميل صورة',
    size: 'الملف كبير جدًا. الحجم الأقصى المسموح به هو {0}',
    formats: `تنسيق غير صالح. يجب أن يكون '{0}'.`,
  },
  importer: {
    line: 'الخط',
    status: 'الحالة',
    pending: 'في الانتظار',
    imported: 'مستورد',
    error: 'خطأ',
    total: `{0} تمت إزالة impo بنجاح',
  },
  roles: {
    label: 'Roles',
    doRemoveAllSelectedSuccess:
    rted ، {1} معلق و {2} به خطأ`,
    importedMessage: `تمت معالجة {0} من {1}.`,
    noNavigateAwayMessage:
      'لا تنتقل بعيدًا عن هذه الصفحة وإلا فسيتم إيقاف الاستيراد.',
    completed: {
      success:
        'اكتمل الاستيراد. تم استيراد جميع الصفوف بنجاح.',
      someErrors:
        'اكتملت المعالجة ، ولكن تعذر استيراد بعض الصفوف.',
      allErrors: 'فشل الاستيراد. لا توجد صفوف صالحة.',
    },
    form: {
      downloadTemplate: 'قم بتنزيل القالب',
      hint: 'انقر أو اسحب الملف إلى هذه المنطقة للمتابعة',
    },
    list: {
      discardConfirm:
        'هل أنت واثق؟ ستفقد البيانات غير المستوردة.',
    },
    errors: {
      invalidFileEmpty: 'الملف فارغ',
      invalidFileExcel: 'يُسمح فقط بملفات excel (.xlsx)',
      invalidFileUpload:
        'ملف غير صالح. تأكد من أنك تستخدم أحدث إصدار من القالب.',
      importHashRequired: 'مطلوب تجزئة الاستيراد',
      importHashExistent: 'تم استيراد البيانات بالفعل',
    },
  },

  autocomplete: {
    loading: 'جار التحميل...',
  },

  imagesViewer: {
    noImage: 'لا يوجد صورة',
  },
};

export default ar;
