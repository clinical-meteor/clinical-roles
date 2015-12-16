
describe('clinical:roles', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

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
});
