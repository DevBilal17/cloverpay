import { getPayloadClient } from "./payload"


const getIntegratedSolutions = async() => {
    const payload = await getPayloadClient()
    const {docs} = await payload.find({
        collection : "integrated-solutions",
        sort : 'order',
        limit : 0
    })
  return docs
}

export default getIntegratedSolutions
