import model from 'modules/classroom/classroomModel';

const { fields } = model;

export default [
    fields.id,
    fields.name,
    fields.createdAt,
    fields.updatedAt,
    fields.createdAtRange,
];