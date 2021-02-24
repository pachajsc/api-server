import axios from 'axios'
class CourseServices {
URL = "http://localhost:3004";
  async getAll() {
    return await axios(`${this.URL}/cursos/1/temas?_embed=subtemas`);
  }

  async getCourse() {
    return await axios(`${this.URL}/cursos`);
  }

  async getNotes() {
    return await axios(`${this.URL}/notas`);
  }


}

export default CourseServices;





