module.exports = function (mongoose){
  // SCHEMAS
  var Schema = mongoose.Schema;

  // SPONSER SCHEMA
  const sponsersSchema = new Schema ({
          "company_name" : { type : String, required: true },
          "company_first" : { type : String, required: true },
          "company_last" : { type : String, required: true },
          "contact_email" : { type : String, required: true },
          "phone_number" : { type : String, required: true },
          "previous_sponser" : { type : Boolean, required: true },
          "this_year_sponser" : { type : Boolean, required: true },
          "last_contacted" : { type : Date, required: true },
  });


  // INIT SCHEMAS
  const model = mongoose.model('sponsers', sponsersSchema);
  model.createCollection().then(function(collection) {
      console.log('Sponser is created!');

    });

}
