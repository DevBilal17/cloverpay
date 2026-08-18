import { getPayloadClient } from './payload'

export const getSiteSettings = async () => {
  // 'use cache'
  const payload = await getPayloadClient()
  return payload.findGlobal({
    slug: 'site-settings',
    depth: 1,
  })
}
