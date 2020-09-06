import model from 'modules/educDirector/educDirectorModel';

const { fields } = model;

export default [
    fields.id,
    fields.created_at,
    fields.updated_at,
    fields.createdAtRange,
    fields.first_name,
    fields.last_name,
    fields.email,
    fields.phone,
];