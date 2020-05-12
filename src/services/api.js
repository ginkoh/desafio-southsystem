import axios from "axios";

class APIService {
  constructor(entityServiceInfo) {
    const { apiUrl, prefix } = entityServiceInfo;
    this.apiInstance = axios.create({ baseURL: apiUrl + prefix });
  }

  async getAllEntities() {
    try {
      const allEntities = await this.apiInstance.get();
      return allEntities.data;
    } catch (err) {}
  }

  async getEntity(entityId) {
    try {
      const singleEntity = await this.apiInstance.get("/" + entityId);
      return singleEntity.data;
    } catch (err) {}
  }

  async createEntity(entityInfo) {
    try {
      const entity = await this.apiInstance.post("/", entityInfo);
      return entity;
    } catch (err) {}
  }

  async updateEntity(entityId, entityInfo) {
    try {
      const entity = await this.apiInstance.put("/" + entityId, ...entityInfo);
      return entity;
    } catch (err) {}
  }

  async deleteEntity(entityId) {
    try {
      const entity = await this.apiInstance.delete("/" + entityId);
      return entity;
    } catch (err) {}
  }
}

export default APIService;
