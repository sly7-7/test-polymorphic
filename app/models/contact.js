import DS from 'ember-data';
import Profile from 'testp/models/profile';

export default Profile.extend({
  groups: DS.hasMany('group')
});
