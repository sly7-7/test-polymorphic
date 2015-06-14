import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  profile : DS.belongsTo('profile', {polymorphic: true, inverse: 'address'})
});
