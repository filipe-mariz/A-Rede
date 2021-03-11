import Person from '../model/02_Person';
import personImage from './02_PersonImage';

export default {
  Render(person: Person) {
    return {
      name: person.name,
      contact: person.contact,
      city: person.city,
      district: person.district,
      street: person.street,
      complement: person.complement,
      number: person.number,
      help: person.help,
      lat: person.lat,
      long: person.long,
      image: personImage.renderMany(person.image),
    };
  },

  renderMany(person: Person[]) {
    return person.map((person) => this.Render(person));
  },
};
