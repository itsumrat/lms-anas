import model from "modules/chat/chatModel";

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt,
  fields.createdAtRange,
];
