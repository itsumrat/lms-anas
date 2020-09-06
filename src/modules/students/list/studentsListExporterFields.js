import model from 'modules/students/studentsModel';

const { fields } = model;

export default [
    fields.id,
    fields.createdAt,
    fields.updatedAt,
    fields.createdAtRange,
    fields.first_name,
    fields.last_name,
    fields.email,
    fields.quality_tutor1,
    fields.quality_tutor2,
    fields.phone,
    fields.code_massar,
];