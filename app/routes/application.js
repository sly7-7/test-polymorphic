import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      contacts: this.store.find('contact'),
      users: this.store.find('user'),
      addresses: this.store.find('address'),
      groups: this.store.find('group')
    });
  }
});
