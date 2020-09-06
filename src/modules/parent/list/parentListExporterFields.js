import model from 'modules/parent/parentModel';

const { fields } = model;

export default [
    fields.id,
    fields.created_at,
    fields.updated_at,
    fields.createdAtRange,
    fields.firstname,
    fields.lastname,
    fields.phone,
    fields.email,
];