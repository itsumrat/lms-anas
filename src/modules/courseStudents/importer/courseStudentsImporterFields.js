import model from "modules/courseStudents/courseStudentsModel";

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.createdAtRange,
];
