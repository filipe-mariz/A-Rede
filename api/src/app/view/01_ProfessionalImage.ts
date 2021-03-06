import Image from '../model/01_professionalImage';

export default {
  Render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.Render(image));
  },
}; 
