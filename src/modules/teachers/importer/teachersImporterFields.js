import model from 'modules/teachers/teachersModel';

const { fields } = model;

export default [
    fields.owner,
    fields.pet,
    fields.arrival,
    fields.departure,
    fields.clientNotes,
    fields.employeeNotes,
    fields.photos,
    fields.status,
    fields.cancellationNotes,
    fields.fee,
    fields.receipt,
];