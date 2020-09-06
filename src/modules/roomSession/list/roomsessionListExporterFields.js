import model from 'modules/roomSession/roomsessionModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.day,
  fields.createdAtRange,
  fields.start_time,
  fields.end_time,
];
