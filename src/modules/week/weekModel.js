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
  return i18n(`entities.Week.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.Week.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  schoolYear: new JsonField(
    'schoolYear',
    label('schoolYear'),
    {
      required: true,
    },
  ),
  start_date: new StringField(
    'start_date',
    label('start_date'),
    {
      required: true,
    },
  ),
  end_date: new StringField('end_date', label('end_date'), {
    required: true,
  }),
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
