const fr = {
  common: {
    or: 'ou',
    cancel: 'Annuler',
    reset: 'Réinitialiser',
    save: 'Sauvegarder',
    search: 'Recherche',
    edit: 'Modifier',
    publish: 'Publier',
    closing: 'Clôturer',
    duplicate: 'Dupliquer',
    archive: 'Archiver',
    cancelPub: 'Annuler la publication',
    remove: 'Supprimer',
    new: 'Nouveau',
    export: 'Exporter en Excel',
    noDataToExport: 'Pas de données à exporter',
    import: 'Importer',
    discard: 'Jetez',
    yes: 'Oui',
    no: 'Non',
    pause: 'Pause',
    areYouSure: 'Êtes-vous sûr ?',
    view: 'Consulter',
    destroy: 'Supprimer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
  },

  app: {
    title: 'SkyUp',
  },

  auth: {
    accountSeting: {
      title: 'Langue & Fuseau horaire',
    },
    menu: 'Paramétrage',
    profile: {
      title: 'Modifier le profil',
      success: 'Profil mis à jour avec succès',
    },
    editpassword: {
      title: 'Modifier le mot de passe',
      success: 'Mot de passe mis à jour avec succès',
      error: 'Mot de passe incorrect',
      errornewpassword:
        'Les mots de passes ne sont pas identiques',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Souvenez-vous de moi.',
    forgotPassword: 'Mot de passe oublié',
    signin: "S'identifier",
    signup: "S'inscrire",
    signout: 'Se déconnecter',
    alreadyUsed: 'Cette adresse email est déjà utilisée',

    alreadyHaveAnAccount:
      'Vous avez déjà un compte ? Connectez-vous.',
    signinWithAnotherAccount:
      'Vous avez déjà un compte ? Connectez-vous.',
    emailUnverified: {
      message: `Veuillez confirmer votre courriel à <strong>{0}</strong> pour continuer.`,
      submit: `Renvoyer la vérification de l'email`,
    },
    emptyPermissions: {
      message: `Vous n'avez pas encore d'autorisations. Attendez que l'administrateur vous accorde des privilèges`,
    },
    passwordReset: {
      message:
        'Envoyer un courriel de réinitialisation du mot de passe',
      message1: 'Renvoyer le courriel',
      error: `Courriel non reconnu`,
    },
    emailAddressVerificationEmail: {
      error: `Courriel non reconnu`,
    },
    verificationEmailSuccess: `Courriel de vérification envoyé avec succès`,
    alreadyActive: 'Le compte est deja activé',
    passwordResetSuccess: `Courriel de réinitialisation du mot de passe envoyé avec succès`,
  },

  liveButtons: {
    chat: {
      title: 'Chat de la Classe',
    },
  },

  Home: {
    Classe: 'Classe',
    Classes: 'Liste des Classes',
    menu: {
      Cours: 'Cours',
      Classes: 'Classes',
      records: 'Enregistrements',
      Access: 'Accéder',
      Meetings: 'Réunions',
      Statistics: 'Statistiques',
    },
  },

  entities: {
    CourseCreation: {
      menu: 'Création des cours',
    },
    CourseStudents: {
      menu: 'Cours',
    },
    LevelSector: {
      list: {
        title: 'Affectation niveaux filière',
      },
      menu: 'Affectation niveaux filière',
      edit: {
        title: 'Modifier affectation',
      },
      new: {
        title: 'Ajout affectation',
      },
      view: {
        title: 'Niveau Filière',
      },
      fields: {
        id: 'id',
        sector: 'Filière',
        level: 'Niveau',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
      },
    },
    Assignments: {
      menu: 'insertion des fichiers cours',
      list: {
        title: 'Espace des Cours',
      },
      view: {
        title: 'Cours',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        assignmentsName: "Nom d'assignement",
      },
    },
    Matter: {
      menu: 'matières',
      list: {
        title: 'matière',
      },
      view: {
        title: 'Matière',
      },
      edit: {
        title: 'Modifier Matière',
      },
      new: {
        title: 'Ajout Matière',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        name: 'Nom de matière',
        subname: 'Matière',
        createdAtRange: 'Période',
      },
    },
    Teachers: {
      menu: 'enseignants',
      list: {
        title: 'Enseignants',
      },
      edit: {
        title: 'Modifier enseignant',
      },
      new: {
        title: 'Ajout enseignant',
      },
      view: {
        title: 'Enseignant',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
      },
    },
    Level: {
      menu: 'Niveaux',
      list: {
        title: "Niveaux de l'école",
      },
      edit: {
        title: 'Modifier niveau',
      },
      new: {
        title: 'Ajout niveau',
      },
      view: {
        title: 'Niveau',
      },
      fields: {
        id: 'id',
        name: 'Nom de niveaux',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
      },
    },
    Students: {
      menu: 'Etudiants',
      list: {
        title: "Etudiants de l'école",
      },
      edit: {
        title: 'Modifier étudiant',
      },
      new: {
        title: 'Ajout étudiant',
      },
      view: {
        title: 'étudiant',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
        code_massar: 'Code Massar',
        father: 'Père',
        mother: 'Mère',
        tutor1: 'Tuteur 1',
        tutor2: 'Tuteur 2',
        quality_tutor1: 'Qualité Tuteur 1',
        quality_tutor2: 'Qualité Tuteur 2',
      },
    },
    Responsibles: {
      menu: 'Responsables',
      list: {
        title: "Responsables de l'école",
      },
      edit: {
        title: 'Modifier responsable',
      },
      new: {
        title: 'Ajout responsable',
      },
      view: {
        title: 'Responsable',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        Username: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
      },
    },
    Classroom: {
      menu: 'Noms des Classes',
      list: {
        title: 'Noms des Classes',
      },
      edit: {
        title: 'Modifier classe',
      },
      new: {
        title: 'Ajout classe',
      },
      view: {
        title: 'Classe',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        name: 'Nom de la classe',
        subname: 'Classe',
        level: 'Niveau',
        matter: 'Matière',
        cycle: 'Cycle',
        sector: 'Filière',
      },
    },
    FramerMatterCycle: {
      menu: 'Encadrant - Cycle - Matière',
      list: {
        title: 'Affectation Encadrant - Cycle - Matières',
      },
      edit: {
        title: 'Modifier Affectation ECM',
      },
      new: {
        title: 'Ajout Affectation ECM',
      },
      view: {
        title: 'Encadrant - Cycle - Matière',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        cycle: 'Cycle',
        level: 'Niveau',
        matter: 'Matière',
        framer: 'Encadrant',
      },
    },
    ClassroomTeacherMatter: {
      menu: 'Classe - Enseignant - Matière',
      list: {
        title:
          'Affectation classes - enseignants - matières',
      },
      edit: {
        title: 'Modifier Affectation CEM',
      },
      new: {
        title: 'Ajout Affectation CEM',
      },
      view: {
        title: 'Classe - Enseignant - Matière',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        class: 'Classe',
        level: 'Niveau',
        matter: 'Matière',
        teachers: 'Enseignants',
      },
    },
    Roomsession: {
      menu: 'Emploi Du Temps',
      list: {
        title: 'Emploi Du Temps',
      },
      edit: {
        title: 'Modifier Emploi Du Temps',
      },
      new: {
        title: 'Ajout Emploi Du Temps',
      },
      view: {
        title: 'Emploi Du Temps',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: 'Nom de la session',
        classroomStudent: 'Classe - Etudiant',
        day: 'Jour',
        start_time: 'Heure de début',
        end_time: 'Heure de fin',
        classroom: 'Classe',
        level: 'Niveau',
        matter: 'Matière',
        teacher: 'Enseignants',
        cycle: 'Cycle',
        sector: 'Filière',
        element: 'Element de matière',
      },
      enumerators: {
        day: {
          Sunday: 'Dimanche',
          Monday: 'Lundi',
          Tuesday: 'Mardi',
          Wednesday: 'Mercredi',
          Thursday: 'Jeudi',
          Friday: 'Vendredi',
          Saturday: 'Samedi',
        },
      },
    },
    Framer: {
      menu: 'Encadrant',
      list: {
        title: "Encadrants de l'école",
      },
      edit: {
        title: 'Modifier Encadrant',
      },
      new: {
        title: 'Ajout Encadrant',
      },
      view: {
        title: 'Encadrant',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        Username: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
      },
    },
    Cycle: {
      menu: 'Cycles',
      list: {
        title: "Cycles de l'école",
      },
      edit: {
        title: 'Modifier Cycle',
      },
      new: {
        title: 'Ajout Cycle',
      },
      view: {
        title: 'Cycle',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: 'Nom du cycle',
      },
    },
    Sector: {
      menu: 'Filières',
      list: {
        title: "Filières de l'école",
      },
      edit: {
        title: 'Modifier Filière',
      },
      new: {
        title: 'Ajout Filière',
      },
      view: {
        title: 'Filière',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: 'Nom de la filière',
      },
    },
    TimeTableTeacher: {
      menu: 'Emploi du temps',
      list: {
        title: 'Emploi du temps',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        classroom: 'Classe',
        matter: 'Matière',
      },
    },
    Element: {
      menu: 'Elements de matières',
      list: {
        title: 'Elements de matières',
      },
      edit: {
        title: 'Modifier Element',
      },
      new: {
        title: 'Ajout Element',
      },
      view: {
        title: 'Element de Matière',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: "Nom de l'element",
        matter: 'Matière',
        sector: 'Filière',
        cycle: 'Cycle',
        level: 'Niveau',
      },
    },
    SchoolYear: {
      menu: 'Années Scolaires',
      list: {
        title: 'Années Scolaires',
      },
      edit: {
        title: 'Modifier Année Scolaire',
      },
      new: {
        title: 'Ajout Année Scolaire',
      },
      view: {
        title: 'Année Scolaire',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: "Nom de l'année scolaire",
      },
    },
    Register: {
      menu: 'Inscription des éléves',
      list: {
        title: 'Inscription des éléves',
      },
      edit: {
        title: 'Modifier Inscription',
      },
      new: {
        title: 'Ajout Nouveau Inscrit',
      },
      view: {
        title: 'Inscrit',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        schoolYear: "Nom de l'année scolaire",
        cycle: 'Cycle',
        level: 'Niveau',
        sector: 'Filière',
        classroom: 'Classe',
        student: 'Etudiant',
      },
    },
    Chat: {
      menu: 'Chat',
      list: {
        title: 'Chat',
      },
      fields: {
        id: 'id',
        createdAt: 'Créer à',
        updatedAt: 'Modifier à',
        createdAtRange: 'Période',
        name: 'Chat',
      },
    },
    EducDirector: {
      menu: 'Directeurs Pédagogiques',
      list: {
        title: "Directeurs Pédagogiques de l'école",
      },
      edit: {
        title: 'Modifier Directeur Pédagogique',
      },
      new: {
        title: 'Ajout Directeur Pédagogique',
      },
      view: {
        title: 'Directeur Pédagogique',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        Username: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
      },
    },
    Parent: {
      menu: 'Parents',
      list: {
        title: 'Parents',
      },
      edit: {
        title: 'Modifier Parent',
      },
      new: {
        title: 'Ajout Parent',
      },
      view: {
        title: 'Parent',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        Username: "Nom d'utilisateur",
        first_name: 'Prénom',
        last_name: 'Nom',
        email: 'E-mail',
        phone: 'Téléphone',
      },
    },
    ResponsibleCycle: {
      menu: 'Affectation Responsables - Cycles',
      list: {
        title: 'Affectation Responsables - Cycles',
      },
      edit: {
        title: 'Modifier RC',
      },
      new: {
        title: 'Ajout RC',
      },
      view: {
        title: 'Affectation Responsable - Cycle',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        responsible: 'Responsable',
        cycle: 'Cycle',
      },
    },
    EducDirectorCycle: {
      menu: 'Affectation Directeurs Pédagogiques - Cycles',
      list: {
        title:
          'Affectation Directeurs Pédagogiques - Cycles',
      },
      edit: {
        title: 'Modifier DC',
      },
      new: {
        title: 'Ajout DC',
      },
      view: {
        title: 'Affectation Directeur Pédagogique - Cycle',
      },
      fields: {
        id: 'id',
        created_at: 'Créer à',
        updated_at: 'Modifier à',
        createdAtRange: 'Période',
        educDirector: 'Directeur Pédagogique',
        cycle: 'Cycle',
      },
    },
  },

  roles: {
    user: {
      label: 'utilisateur',
      description: 'Accès complet à toutes les ressources',
    },
    editor: {
      label: 'Rédacteur en chef',
      description:
        "Modifier l'accès à toutes les ressources",
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
      email: 'Courriel',
      emails: 'Courriel(s)',
      fullName: 'Nom',
      name: "Nom d'utilisateur",

      first_name: 'Prénom',
      last_name: 'Nom',
      status: 'Statut',
      disabled: 'Desactivé ?',
      phoneNumber: 'Téléphone',
      role: 'Rôle',
      created_at: 'Crée le',
      updatedAt: 'Mise à jour le',
      roleUser: 'Rôle utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Crée le',
      password: 'Mot de passe',
      newpassword: 'Nouveau Mot de passe',
      confirmPassword: 'Confirmation de mot de passe',
      confirm_password: 'Confirmation de mot de passe',

      rememberMe: 'Se souvenir de moi',
      language: 'Langue',
      timezone: 'Fuseau horaire',
      placeholder: {
        timezone: 'Sélectionnez un fuseau horaire',
      },
    },
    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
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
    title: 'Réglages',
    menu: 'Réglages',
    save: {
      success:
        'Réglages enregistrés avec succès. La page se rechargera dans {0} secondes pour que les changements prennent effet.',
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
    backToHome: 'Retour à l Accueil',
    403: `Désolé, vous n'avez pas accès à cette page`,
    404: "Désolé, la page que vous avez visitée n'existe pas",
    500: 'Désolé, le serveur signale une erreur',
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: 'Une erreur est survenue',
    },
    defaultErrorMessage: 'Ops, Une erreur est survenue',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} est invalide',
      required: '${path} est exigé',
      oneOf:
        "${path} doit être l'une des valeurs suivantes :  ",
      notOneOf:
        "${path} ne doit pas être l'une des valeurs suivantes : ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} doit être un ${type}`;
      },
    },
    string: {
      length:
        '${path} doivent être exactement des caractères ',
      min: '${path} doit être au moins ${min} characters',
      max: '${path} doit être au maximum ${max} characters',
      matches:
        '${path} doit correspondre à ce qui suit : "${regex}"',
      email: '${path} doit être un email valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une corde coupée',
      lowercase:
        '${path} doit être une chaîne en minuscules',
      uppercase:
        '${path} doit être une chaîne en majuscules',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieure ou égale à ',
      max: '${path} doit être inférieure ou égale à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieure à ${more}',
      notEqual:
        '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} doit être un nombre positif',
      negative: '${path} doit être un nombre négatif',
      integer: '${path} doit être un nombre entier',
    },
    date: {
      min: '${path} Le champ doit être postérieur à ${min}',
      max:
        '${path}  le champ doit être à une date antérieure à ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} Le champ ne peut pas avoir de clés non spécifiées dans la forme de l'objet",
    },
    array: {
      min:
        '${path} Le champ doit avoir au moins ${min} items',
      max:
        "${path} Le champ doit avoir un nombre d'éléments inférieur ou égal à ${max}.",
    },
  },

  /* eslint-disable */
  fileUploader: {
    upload: 'Télécharger',
    image: 'Vous devez télécharger une image',
    size:
      'Le dossier est trop gros. La taille maximale autorisée est {0}',
    formats: `Format non valide. Doit être '{0}'.`,
  },

  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'En attente',
    imported: 'Imported',
    error: 'Erreur',
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

export default fr;
