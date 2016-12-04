Package.describe({
  summary: "Authorization package for Meteor",
  version: "2.5.0",
  git: "https://github.com/clinical-meteor/clinical-roles.git",
  name: "clinical:roles"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.1.0.3");

  api.use([
           'meteor-platform',
           'underscore',
           'accounts-base@1.2.14',
           'tracker',
           'mongo',
           'check']);

  api.addFiles('lib/roles_common.js');
  api.addFiles('server/roles_server.js', 'server');

  api.addFiles(['client/debug.js',
                'client/uiHelpers.js',
                'client/subscriptions.js'], 'client');


  api.export('Roles');
});
