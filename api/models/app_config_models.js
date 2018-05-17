'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var appConfigSchema = new Schema({
	project_id: { type: String },
	name_space: { type: String, enum: ['iOS', 'android', 'app'] },
	key: { type: String },
	value: { type: String, },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Projects', appConfigSchema);