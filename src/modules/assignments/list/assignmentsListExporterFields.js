import model from 'modules/assignments/assignmentsModel';

const { fields } = model;

export default [
    fields.id,
    fields.assignmentsName,
    fields.assignmentsFileImporter,
    fields.createdAt,
    fields.updatedAt,
    fields.createdAtRange,
];