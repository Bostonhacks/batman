module.exports = function (mongoose ){
  // SCHEMAS
  var Schema = mongoose.Schema;

  // CONFIRMED_SPONSOR SCHEMA
  const confirmed_sponsorSchema = new Schema ({
          "company_name" : { type : String, required: true },
          "amount" : { type : Number, required: true },
          "swags" : { type : Boolean, required: true },
          "workshop" : { type : Boolean, required: true },
          "minievent" : { type : Boolean, required: true }
  });

  // INIT SCHEMAS
  const model = mongoose.model('confirmed_sponsor', confirmed_sponsorSchema);
  model.createCollection().then(function(collection) {
      console.log('Confirmed Sponsor Collection is created!');
    });

};
