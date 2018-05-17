module.exports = function(app){
	var appConfig = require('../controller/app_config_controller');

	app.route('/projects')
	.get(appConfig.list_all_projects)
	.post(appConfig.create_a_project);


	app.route('/projects/:projectId')
	.get(appConfig.read_a_project)
    .put(appConfig.update_a_project)
    .delete(appConfig.delete_a_project);
}