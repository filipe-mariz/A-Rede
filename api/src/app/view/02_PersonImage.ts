import PersonImage from '../model/02_PersonImage';

export default {
    Render(image: PersonImage) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`
        }
    },

    renderMany(image: PersonImage[]) {
        return image.map(image => this.render(image))
    }
}
