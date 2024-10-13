// create a new data
const createRecord = async (schema, data) => {
    return await new schema(data).save();
}

// read the data
const readRecord = async (schema) => {
    return await schema.find().sort({ _id: -1 });
}

// update the  data
const updateRecord = async (schema, id, data) => {
    return await schema.findByIdAndUpdate(id, data, { new: true });
}

// delete the data
const deleteRecord = async (schema, id) => {
    return await schema.findByIdAndDelete(id);
}

module.exports = { createRecord, readRecord, updateRecord, deleteRecord };