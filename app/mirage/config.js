export default function() {

  this.get('/users', function(db) {
    return {users: db.users, addresses: db.addresses}
  });

  this.get('/contacts', function(db) {
    return {contacts: db.contacts, addresses: db.addresses}
  });

  this.get('/addresses', function(db) {
    return {contacts: db.contacts, addresses: db.addresses, users: db.users}
  });

  this.get('/addresses/:id', function(db, request) {
    var id = parseInt(request.params.id),
    address = db.addresses.find(id + 1);
    return {address: db.addresses.find(id + 1)};
  });

  this.get('/groups');
  this.put('/addresses/:id');
  this.put('/users/:id');
  this.put('/contacts/:id');
}
