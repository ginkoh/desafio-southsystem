// Third party.
import axios from "axios";

class APIService {
  constructor(entityServiceInfo) {
    const { apiUrl, prefix } = entityServiceInfo;

    // Expose the axios instance to the whole class.
    this.apiInstance = axios.create({ baseURL: apiUrl + prefix });
  }

  /**
   * Retrivies an array containing all the entities resources from the api.
   * If an error occurs, either returns a message or an object describing the error.
   * 
   * @method getAllEntities
   * 
   * @returns {(Object[]|Object|String)}
   */
  async getAllEntities() {
    try {
      const allEntities = await this.apiInstance.get();
      if (allEntities) return allEntities.data;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  /**
   * Retrieves an object containing the requested entity resource from the api.
   * If an error occurs, either returns a message or an object describing the error.
   * 
   * @method getEntity
   *  
   * @param {String} entityId - The specific entity id to get the resource from the api.
   * 
   * @returns {(Object[]|Object|String)}
   */
  async getEntity(entityId) {
    try {
      const singleEntity = await this.apiInstance.get("/" + entityId);
      if (singleEntity) return singleEntity.data;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  /**
   * Creates a new entity object into the api.
   * If an error occurs, either returns a message or an object describing the error.
   * 
   * @method createEntity
   * 
   * @param {Object} entityInfo - The attributes to create the resource into the api.
   * 
   * @returns {Object|String}
   */
  async createEntity(entityInfo) {
    try {
      const entity = await this.apiInstance.post("/", entityInfo);
      if (entity) return entity;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  /**
   * Updates an existent object in the api.
   * If an error occurs, either returns a message or an object describing the error.
   * 
   * @method updateEntity
   * 
   * @param {String} entityId - The specific entity id to update the resource in the api.
   * @param {String} entityInfo - The attributes to update the resource into the api.
   * 
   * @returns {Object|String}
   */
  async updateEntity(entityId, entityInfo) {
    try {
      const entity = await this.apiInstance.put("/" + entityId, ...entityInfo);
      if (entity) return entity;

      return "Error.";
    } catch (err) {
      return err.response;
    }
  }

  /**
   * Deletes an existent object in the api.
   * If an error occurs, either returns a message or an object describing the error.
   * 
   * @param {String} entityId - The specific entity id to delete the resource from the api.
   * 
   * @returns {Object|String}
   */
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
