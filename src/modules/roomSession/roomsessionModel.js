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
import TimeField from 'modules/shared/fields/timeField';
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`entities.Roomsession.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.Roomsession.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  week: new JsonField('week', label('week'), {
    required: true,
  }),
  start_time: new TimeField(
    'start_time',
    label('start_time'),
    {
      required: true,
    },
  ),
  end_time: new TimeField('end_time', label('end_time'), {
    required: true,
  }),
  day: new EnumeratorField(
    'day',
    label('day'),
    [
      { id: '0', label: enumeratorLabel('day', 'Sunday') },
      { id: '1', label: enumeratorLabel('day', 'Monday') },
      { id: '2', label: enumeratorLabel('day', 'Tuesday') },
      {
        id: '3',
        label: enumeratorLabel('day', 'Wednesday'),
      },
      {
        id: '4',
        label: enumeratorLabel('day', 'Thursday'),
      },
      { id: '5', label: enumeratorLabel('day', 'Friday') },
      {
        id: '6',
        label: enumeratorLabel('day', 'Saturday'),
      },
    ],
    {
      required: true,
    },
  ),

  classroom: new JsonField(
    'classroom',
    label('classroom'),
    {
      required: true,
    },
  ),

  element: new JsonField('element', label('element'), {
    required: true,
  }),

  cycle: new JsonField('cycle', label('cycle'), {
    required: true,
  }),

  level: new JsonField('level', label('level'), {
    required: true,
  }),

  sector: new JsonField('sector', label('sector'), {
    required: true,
  }),

  teacher: new JsonField('teacher', label('teacher'), {
    required: true,
  }),

  matter: new JsonField('matter', label('matter'), {
    required: true,
  }),

  schoolYear: new JsonField(
    'schoolYear',
    label('schoolYear'),
    {
      required: true,
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
