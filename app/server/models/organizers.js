module.exports = function (mongoose){
  // SCHEMAS
  var Schema = mongoose.Schema;

  // ORGANIZERS SCHEMA
  const organizersSchema = new Schema ({
          "email" : { type : String, required: true },
          "first" : { type : String, required: true },
          "last" : { type : String, required: true },
          "phone_number" : { type : String, required: true },
  });

  // INIT SCHEMAS
  const model = mongoose.model('organizers', organizersSchema);
  model.createCollection().then(function(collection) {
      console.log('Organizers Collection is created!');
    });

}
