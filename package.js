Package.describe({
  summary: "Authorization package for Meteor",
  version: "2.4.0",
  git: "https://github.com/clinical-meteor/clinical-roles.git",
  name: "clinical:roles"
});

Package.onUse(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom("METEOR@1.1.0.3");

  api.use(['underscore',
           'accounts-base',
           'tracker',
           'mongo',
           'check'], both);

  api.use(['blaze'], 'client', {weak: true});


  api.addFiles(['client/debug.js',
                'client/uiHelpers.js',
                'client/subscriptions.js'], 'client');
  api.addFiles('lib/roles_common.js');
  api.addFiles('server/roles_server.js', 'server');

  api.export('Roles');
});

Package.onTest(function (api) {
  var both = ['client', 'server'];

  // `accounts-password` is included so `Meteor.users` exists

  api.use(['alanning:roles',
           'accounts-password',
           'underscore',
           'tinytest'], both);

  api.addFiles('tests/client.js', 'client');
  api.addFiles('tests/server.js', 'server');
});
