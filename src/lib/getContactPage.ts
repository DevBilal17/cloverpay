import { getPayloadClient } from './payload'

export async function getContactPage() {
  // "use cache"
  const payload = await getPayloadClient()

  return payload.findGlobal({
    slug: 'contact-page',
    depth: 1,
  })
}
