import model from 'modules/week/weekModel';

const { fields } = model;

export default [
  fields.id,
  fields.created_at,
  fields.updated_at,
  fields.createdAtRange,
  fields.start_date,
  fields.end_date,
  fields.name,
];
