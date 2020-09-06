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
  name: new StringField('name', label('name'), {
    required: true,
  }),

  coursHtml: new StringField(
    'coursHTML',
    label('coursHTML'),
    {
      required: false,
    },
  ),
  file: new FilesField(
    'payload',
    label('file'),
    'assignement/',
    {
      size: 3000000,
    },
  ),
  level: new JsonField('level', label('level'), {
    required: true,
  }),
  sector: new JsonField('sector', label('sector'), {
    required: true,
  }),
  cycle: new JsonField('cycle', label('cycle'), {
    required: true,
  }),
  matter: new JsonField('matter', label('matter'), {
    required: true,
  }),
  classroom: new JsonField(
    'classroom',
    label('classroom'),
    {
      required: true,
    },
  ),
  types_assignment: new JsonField(
    'types_assignment',
    label('types_assignment'),
    {
      required: true,
    },
  ),
  type_course: new EnumeratorField(
    'type_course',
    label('type_course'),
    [
      {
        id: 0,
        label: enumeratorLabel('type_course', 'Standard'),
      },
      {
        id: 1,
        label: enumeratorLabel('type_course', 'Editable'),
      },
    ],
    {
      required: true,
    },
  ),
  element: new JsonField('element', label('element'), {
    required: true,
  }),
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
