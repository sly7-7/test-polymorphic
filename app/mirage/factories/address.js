import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  city: faker.address.city,
  profile: i => `${i + 1}`,
  profileType: 'Contact'
});
