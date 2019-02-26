import cookie from 'js-cookie';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/',
});

const buildHeaders = () => JSON.parse(cookie.get('authHeaders') || '{}');

const SkillService = {
  async getSkills() {
    const { data } = await axiosInstance({
      method: 'GET',
      url: '/user',
      headers: buildHeaders(),
    });
    const { profession_categories: skillsArray } = data;
    return skillsArray;
  },

  async updateSkills(newSkills) {
    await axiosInstance({
      method: 'POST',
      url: '/',
      headers: buildHeaders(),
      data: {
        categories: newSkills,
      },
    });
  },
};


export default SkillService;
