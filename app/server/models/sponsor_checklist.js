module.exports = function (mongoose){
  // SCHEMAS
  var Schema = mongoose.Schema;

  // SPONSOR_CHECKLIST SCHEMA
  const sponsor_checklistSchema = new Schema ({
          "company_name" : { type : String, required: true },
          "blurb" : { type : String, required: true },
          "payment" : { type : Boolean, required: true },
          "logo_sent" : { type : Boolean, required: true },
          "logo_loc" : { type : String, required: true },
          "swags_sent" : { type : Boolean, required: true }
  });

  // INIT SCHEMAS
  const model = mongoose.model('sponsor_checklist', sponsor_checklistSchema);
  model.createCollection().then(function(collection) {
      console.log('Sponsor Checklist Collection is created!');

    });

}
