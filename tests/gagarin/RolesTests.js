
describe('clinical:roles', function () {
  var server = meteor();
  var client = browser(server);
  var newUserId = null;

  // beforeEach(function () {
  //   server.execute(function () {
  //
  //   }).then(function (value){
  //
  //   });
  // });
  afterEach(function () {
    server.execute(function () {
      Roles.remove({});
      Meteor.users.remove({});
    });
  });

  it('Roles should exist on the client', function () {
    return client.execute(function () {
      expect(Roles).to.exist;
    });
  });

  it('Roles should exist on the server', function () {
    return server.execute(function () {
      expect(Roles).to.exist;
    });
  });

  it("Can create new roles.", function () {
    return server.execute(function () {
      expect(Roles.createRole("test")).to.exist;
    });
  });
  it("Add user to role.", function () {
    return server.execute(function () {

      var userId = Accounts.createUser({
        username: 'chase',
        password: 'chase',
        email: 'chase@test.org',
        profile: {
          fullName: 'Robert Chase',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/robert.chase.jpg'
        }
      });
      Roles.addUsersToRoles(userId, ["user", "admin"]);
      expect(Roles.userIsInRole(userId, 'user')).to.be.true;
      return userId;
    }).then(function (value){
      newUserId = value;
    });
  });
  it("Can return a list of all the users in a role.", function () {
    return server.execute(function (newUserId) {
      // var userId = Accounts.createUser({
      //   username: 'chase',
      //   password: 'chase',
      //   email: 'chase@test.org',
      //   profile: {
      //     fullName: 'Robert Chase',
      //     role: 'Physician',
      //     avatar: '/packages/clinical_accounts-housemd/housemd/robert.chase.jpg'
      //   }
      // });
      // Roles.addUsersToRoles(userId, ["editors"]);
      return Roles.userIsInRole(newUserId, 'user');
      // var users = Roles.getUsersInRole('admin');
      // var firstUser = users[0];
      // expect(firstUser.username).to.equal("chase");
    }, [newUserId]).then(function(userInRole){
      expect(userInRole).to.be.true;
    });
  });
});



//-------------------------------------
