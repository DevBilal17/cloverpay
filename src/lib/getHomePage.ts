
import { getPayloadClient } from './payload'

export async function getHomePage() {
  // "use cache"
  const payload = await getPayloadClient()

  return payload.findGlobal({
    slug: 'home-page',
    depth: 1,
  })
}