Package.describe({
  summary: "Authorization package for Meteor",
  version: "2.4.4",
  git: "https://github.com/clinical-meteor/clinical-roles.git",
  name: "clinical:roles"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.1.0.3");

  api.use(['underscore',
           'accounts-base',
           'tracker',
           'mongo',
           'check']);

  api.use(['templating'], 'client', {weak: true});


  api.addFiles('lib/roles_common.js');
  api.addFiles('server/roles_server.js', 'server');

  api.addFiles(['client/debug.js',
                'client/uiHelpers.js',
                'client/subscriptions.js'], 'client');


  api.export('Roles');
});

Package.onTest(function (api) {
  api.use(['clinical:roles',
           'accounts-password',
           'underscore',
           'tinytest'], ['client', 'server']);

  api.addFiles('tests/tinytests/client.js', 'client');
  api.addFiles('tests/tinytests/server.js', 'server');
});
