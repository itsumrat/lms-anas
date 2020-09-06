import model from 'modules/sector/sectorModel';

const { fields } = model;

export default [
    fields.id,
    fields.name,
    fields.createdAt,
    fields.updatedAt,
    fields.createdAtRange,
];