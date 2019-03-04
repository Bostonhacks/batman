module.exports = function (mongoose){
  // SCHEMAS
  var Schema = mongoose.Schema;

  // ASSIGMENT SCHEMA
  const assigment = new Schema ({
          "organizer_email" : { type : String, required: true },            
          "sponsor" : { type : String, required: true }
  });


  // INIT SCHEMAS
  const model = mongoose.model('assigment', assigment);
  model.createCollection().then(function(collection) {
      console.log('Assigment Collection is created!');

    });

}
