
import { getPayloadClient } from './payload'

const getOfferings = async () => {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "offerings",
    sort : 'order',
    limit: 0,
  });

  return docs;
};
export default getOfferings
