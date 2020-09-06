import model from 'modules/responsibles/responsiblesModel';

const { fields } = model;

export default [
    fields.id,
    fields.created_at,
    fields.updated_at,
    fields.createdAtRange,
    fields.firstname,
    fields.phone,
    fields.lastname,
    fields.email,
];