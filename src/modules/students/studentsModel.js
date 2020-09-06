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
  return i18n(`entities.Students.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.Students.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  first_name: new StringField(
    'first_name',
    label('first_name'),
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
  code_massar: new StringField(
    'code_massar',
    label('code_massar'),
    {
      required: true,
    },
  ),
  phone: new StringField('phone', label('phone'), {
    required: true,
  }),
  email: new StringField('email', label('email'), {
    required: true,
  }),
  classroom: new JsonField(
    'classroom',
    label('classroom'),
    {
      required: true,
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
  father: new JsonField('father', label('father'), {
    required: false,
  }),
  mother: new JsonField('mother', label('mother'), {
    required: false,
  }),
  tutor1: new JsonField('tutor1', label('tutor1'), {
    required: false,
  }),
  tutor2: new JsonField('tutor2', label('tutor2'), {
    required: false,
  }),
  quality_tutor1: new EnumeratorField(
    'quality_tutor1',
    label('quality_tutor1'),
    [
      {
        id: '0',
        label: enumeratorLabel('quality_tutor1', 'friend'),
      },
      {
        id: '1',
        label: enumeratorLabel('quality_tutor1', 'brother'),
      },
      {
        id: '2',
        label: enumeratorLabel(
          'quality_tutor1',
          'grand father',
        ),
      },
      {
        id: '3',
        label: enumeratorLabel('quality_tutor1', 'uncle'),
      },
      {
        id: '4',
        label: enumeratorLabel('quality_tutor1', 'sister'),
      },
      {
        id: '5',
        label: enumeratorLabel('quality_tutor1', 'aunt'),
      },
    ],
    {
      required: false,
    },
  ),
  quality_tutor2: new EnumeratorField(
    'quality_tutor2',
    label('quality_tutor2'),
    [
      {
        id: '0',
        label: enumeratorLabel('quality_tutor2', 'friend'),
      },
      {
        id: '1',
        label: enumeratorLabel('quality_tutor2', 'brother'),
      },
      {
        id: '2',
        label: enumeratorLabel(
          'quality_tutor2',
          'grand father',
        ),
      },
      {
        id: '3',
        label: enumeratorLabel('quality_tutor2', 'uncle'),
      },
      {
        id: '4',
        label: enumeratorLabel('quality_tutor2', 'sister'),
      },
      {
        id: '5',
        label: enumeratorLabel('quality_tutor2', 'aunt'),
      },
    ],
    {
      required: false,
    },
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export default {
  fields,
};
