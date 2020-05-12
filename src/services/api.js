import axios from "axios";

class APIService {
  constructor(entityServiceInfo) {
    const { apiUrl, prefix } = entityServiceInfo;
    this.apiInstance = axios.create({ baseURL: apiUrl + prefix });
  }

  async getAllEntities() {
    try {
      const allEntities = await this.apiInstance.get();
      if (allEntities) return allEntities.data;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  async getEntity(entityId) {
    try {
      const singleEntity = await this.apiInstance.get("/" + entityId);
      if (singleEntity) return singleEntity.data;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  async createEntity(entityInfo) {
    try {
      const entity = await this.apiInstance.post("/", entityInfo);
      if (entity) return entity;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  async updateEntity(entityId, entityInfo) {
    try {
      const entity = await this.apiInstance.put("/" + entityId, ...entityInfo);
      if (entity) return entity;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  async deleteEntity(entityId) {
    try {
      const entity = await this.apiInstance.delete("/" + entityId);
      if (entity) return entity;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }
}

export default APIService;
