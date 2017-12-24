'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
var voteSchema = new mongoose.Schema({ ip: 'String' }); 
var choiceSchema = new mongoose.Schema({
 text: String, 
 votes: [voteSchema] 
}); 
module.exports.PollSchema = new mongoose.Schema({ 
	question: { type: String, required: true }, 
	choices: [choiceSchema] 
});	


