import { getPayloadClient } from "./payload"


const getIndustries = async() => {
    const payload = await getPayloadClient()
    const {docs} = await payload.find({
        collection : "industries",
                sort : 'order',
        limit : 0
    })
  return docs
}

export default getIndustries
