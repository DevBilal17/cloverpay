import { getPayloadClient } from "./payload"



const getFeatures = async() => {
    const payload = await getPayloadClient()
    const {docs} = await payload.find({
        collection : "features",
                sort : 'order',
        limit : 0
    })
    return docs
}

export default getFeatures
