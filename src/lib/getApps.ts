import { getPayloadClient } from "./payload"


const getApps = async() => {
    const payload = await getPayloadClient()
    const {docs} = await payload.find({
        collection : "apps",
                sort : 'order',
        limit : 0
    })
  return docs
}

export default getApps
