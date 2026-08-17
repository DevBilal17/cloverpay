import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header'
import { SiteSettings } from './globals/SiteSettings'
import { ContactPage, HomePage } from './globals/Pages'
import { Apps, Features, Industries, IntegratedSolutions, Offerings } from './collections/Content'
import { ContactSubmission } from './collections/ContactSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media , Offerings,Features,Apps,IntegratedSolutions,Industries,ContactSubmission ],
  globals : [Header,SiteSettings,HomePage,ContactPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
plugins: [
  vercelBlobStorage({
    enabled: true,

    collections: {
      media: true,
    },

    token: process.env.BLOB_READ_WRITE_TOKEN,
  }),
],
})
