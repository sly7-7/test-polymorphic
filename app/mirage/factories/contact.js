import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.firstName,
  phone: faker.name.phoneNumber,
  address: i => `${i + 1 }`,
  type: 'Contact'
});
