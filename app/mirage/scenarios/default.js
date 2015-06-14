export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('address', 3);
  server.create('address', {id: 4, city: 'VKHA', profileType: 'User', profile: 1});

  server.create('user');

  server.create('contact', {group: [1,2]});
  server.create('contact', {group: [1,2]});
  server.create('contact', {group: [3]});

  server.create('group', {name: 'Group1', contacts: [1 ,2 ]});
  server.create('group', {name: 'Group2', contacts: [3 ]});
}
