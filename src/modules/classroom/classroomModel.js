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
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`entities.Classroom.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.Classroom.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  cycle: new JsonField('cycle', label('cycle'), {
    required: true,
  }),
  sector: new JsonField('sector', label('sector'), {
    required: true,
  }),
  level: new JsonField('level', label('level'), {
    required: true,
  }),
  schedule: new FilesField(
    'schedule',
    label('schedule'),
    'schedule/',
    {
      size: 3000000,
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
