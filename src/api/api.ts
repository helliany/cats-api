import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "60757304-0c5d-4a34-a108-7e2165df9c4f",
  },
});

export const catsAPI = {
  getBreeds() {
    return instance.get(`/breeds`);
  },
  getCategories() {
    return instance.get(`/categories`);
  },
  getImage(data: { breed: string; category: string; fileType: string }) {
    return instance.get(
      `/images/search?breed_ids=${data.breed}&category_ids=${data.category}&mime_types=${data.fileType}`
    );
  },
};
