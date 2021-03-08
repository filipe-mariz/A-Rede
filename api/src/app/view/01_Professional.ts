import Professional from '../model/01_Professional';
import imagesView from './01_ProfessionalImage';

export default {
  Render(professional: Professional) {
    return {
      name: professional.name,
      activity: professional.activity,
      email: professional.email,
      whatsapp: professional.whatsapp,
      state: professional.state,
      city: professional.city,
      bio: professional.bio,
      days: professional.days,
      hours: professional.hours,
      images: imagesView.renderMany(professional.image),
    };
  },

  renderMany(professional: Professional[]) {
    return professional.map((professional) => this.render(professional));
  },
};
