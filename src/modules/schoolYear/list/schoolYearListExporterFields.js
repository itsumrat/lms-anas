import model from "modules/schoolYear/schoolYearModel";

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.createdAtRange,
];
