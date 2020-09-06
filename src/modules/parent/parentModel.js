import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.Parent.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.Parent.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  first_name: new StringField(
    'first_name',
    label('first_name'),
    {
      required: true,
    },
  ),
  phone: new StringField(
    'phone',
    label('phone'),
    {
      required: true,
    },
  ),
  last_name: new StringField(
    'last_name',
    label('last_name'),
    {
      required: true,
    },
  ),
  email: new StringField(
    'email',
    label('email'),
    {
      required: true,
    },
  ),
  created_at: new DateTimeField(
    'created_at',
    label('created_at'),
  ),
  updated_at: new DateTimeField(
    'updated_at',
    label('updated_at'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export default {
  fields,
};
