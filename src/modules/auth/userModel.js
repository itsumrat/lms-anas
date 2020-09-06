import { i18n } from 'i18n';
import StringField from 'modules/shared/fields/stringField';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import ImagesField from 'modules/shared/fields/imagesField';
import BooleanField from 'modules/shared/fields/booleanField';
import StringArrayField from 'modules/shared/fields/stringArrayField';
import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';
import Roles from 'security/roles';
import EnumeratorField from 'modules/shared/fields/enumeratorField';

class RolesField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);

    this.options = Roles.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
              .map((value) => Roles.labelOf(value))
              .join(' ')
          : null,
      );
  }
}

class EmailsField extends StringArrayField {
  forForm() {
    let yupChain = yup
      .array()
      .label(this.label)
      .of(
        yup
          .string()
          .email(i18n('user.validations.email'))
          .label(i18n('user.fields.email'))
          .max(255)
          .required(),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}

function label(name) {
  return i18n(`user.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  first_name: new StringField(
    'first_name',
    label('first_name'),
    {
      max: 80,
    },
  ),
  authenticationUid: new StringField(
    'authenticationUid',
    label('authenticationUid'),
  ),
  last_name: new StringField(
    'last_name',
    label('last_name'),
    {
      max: 175,
    },
  ),

  password: new StringField('password', label('password'), {
    required: true,
  }),
  confirmPassword: new StringField(
    'confirmPassword',
    label('confirmPassword'),
    {
      required: true,
    },
  ),

  newPassword: new StringField(
    'newpassword',
    label('newpassword'),
    {
      required: true,
    },
  ),
  confirmNewPassword: new StringField(
    'confirm_password',
    label('confirm_password'),
    {
      required: true,
    },
  ),
  fullName: new StringField('fullName', label('fullName')),

  language: new StringField('language', label('language')),
  timezone: new StringField('timezone', label('timezone')),

  username: new StringField('username', label('username'), {
    required: true,
    max: 255,
  }),

  email: new StringField('email', label('email'), {
    required: true,
    max: 255,
  }),
  role: new EnumeratorField(
    'role',
    label('role'),
    Roles.selectOptions,
  ),
  rememberMe: new BooleanField(
    'rememberMe',
    label('rememberMe'),
  ),
  disabledAsStatus: new BooleanField(
    'disabled',
    label('status'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  disabled: new BooleanField(
    'disabled',
    label('disabled'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  phone: new StringField('phone', label('phone'), {
    matches: /^[0-9]/,
    max: 24,
  }),

  avatar_url: new ImagesField(
    'avatar_url',
    label('avatars_url'),
    (id) => `user/avatars/profile/${id}`,
    { max: 1, size: 5 },
  ),

  rolesRequired: new RolesField('roles', label('roles'), {
    required: true,
  }),
  roles: new RolesField('roles', label('roles')),
  created_at: new DateTimeField(
    'created_at',
    label('created_at'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  roleUser: new GenericField('roleUser', label('roleUser')),
  status: new EnumeratorField('status', label('status'), [
    {
      id: 'enabled',
      label: i18n('user.enabled'),
    },
    {
      id: 'disabled',
      label: i18n('user.disabled'),
    },
  ]),
};

export default {
  fields,
};
