export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('address', 3);

  server.create('address', {id: 1, city: 'City1', profileType: 'Contact', profile: 1});
  server.create('address', {id: 2, city: 'City2', profileType: 'Contact', profile: 2});
  server.create('address', {id: 3, city: 'City3', profileType: 'Contact', profile: 3});
  server.create('address', {id: 4, city: 'City4', profileType: 'User', profile: 1});

  server.create('user');

  server.create('contact', {group: [1,2]});
  server.create('contact', {group: [1,2]});
  server.create('contact', {group: [3]});

  server.create('group', {name: 'Group1', contact_ids: [1 ,2 ]});
  server.create('group', {name: 'Group2', contact_ids: [3 ]});
}
