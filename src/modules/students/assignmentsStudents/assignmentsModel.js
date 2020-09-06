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
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`entities.Assignments.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.Assignments.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  assignmentsName: new StringField(
    'assignment_name',
    label('assignmentsName'),
    {
      required: true,
    },
  ),
  file: new FilesField('payload', label('file'), 'file', {
    size: 3000000,
  }),
  level: new JsonField('level', label('level'), {
    required: true,
  }),
  level: new JsonField('level', label('level'), {
    required: true,
  }),
  matter: new JsonField('matter', label('matter'), {
    required: true,
  }),
  class: new JsonField('classroom', label('class'), {
    required: true,
  }),
  types_assignements: new JsonField(
    'types_assignment',
    label('types_assignements'),
    {
      required: true,
    },
  ),
  createdAt: new JsonField('createdAt', label('createdAt')),
  updatedAt: new JsonField('updatedAt', label('updatedAt')),
  createdAtRange: new JsonField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export default {
  fields,
};
