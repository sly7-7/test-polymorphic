import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.internet.domainWord,
  // contact: i => `${i + 1}`
});
