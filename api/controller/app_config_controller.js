'use strict';


var mongoose = require('mongoose');

var Project = mongoose.model('Projects');

exports.list_all_projects = function(req, res) {
  Project.find({}, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};


exports.create_a_project = function(req, res) {
  var new_project = new Project(req.body);
  new_project.save(function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};


exports.read_a_project = function(req, res) {
  Project.findById(req.params.projectId, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};


exports.update_a_project = function(req, res) {
  Project.findOneAndUpdate({_id: req.params.projectId}, req.body, {new: true}, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};



exports.delete_a_project = function(req, res) {
  Project.remove({
    _id: req.params.projectId
  }, function(err, project) {
    if (err)
      res.send(err);
    res.json({ message: 'project successfully deleted' });
  });
};