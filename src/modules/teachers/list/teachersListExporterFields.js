import model from 'modules/teachers/teachersModel';

const { fields } = model;

export default [
    fields.id,
    fields.createdAt,
    fields.updatedAt,
    fields.createdAtRange,
    fields.first_name,
    fields.last_name,
    fields.email,
    fields.phone,
    fields.schedule,
];