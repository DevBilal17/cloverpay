import { revalidationMatrix } from '@/lib/revalidation'
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { section, secret } = await request.json()

  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ success: false }, { status: 401 })
  }
  const paths = revalidationMatrix[section as keyof typeof revalidationMatrix]
  if (!paths) {
    return Response.json(
      {
        success: false,
        message: 'Unknown section',
      },
      { status: 400 },
    )
  }
  paths.forEach((path) => {
    revalidatePath(path)
  })

  return Response.json({
    success: true,
    section,
    paths,
  })
}
