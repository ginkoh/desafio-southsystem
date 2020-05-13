// React.
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Ducks
import { fetchAPIData } from "../ducks/content";

/**
 * Retrieves either specific or all entities from the api's state.
 *
 * @param {String} entityId - If there's an id to search, then retrive a specific resource.
 *
 * @returns {Object}
 */
function useEntitiesInformation(entityId) {
  const dispatch = useDispatch();
  const { entity, entities, loading } = useSelector((state) => ({
    entity: state.content.entity,
    entities: state.content.entities,
    loading: state.content.loading,
  }));

  useEffect(() => {
    dispatch(fetchAPIData(entityId));
  }, [dispatch, entityId]);

  return {
    entity,
    entities,
    loading,
  };
}

export default useEntitiesInformation;
