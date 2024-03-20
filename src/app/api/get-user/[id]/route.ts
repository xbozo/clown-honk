import { prisma } from '@/lib/prisma'

export async function GET(_: any, { params }: { params: { id: string } }) {
  if (!params.id) {
    return null
  }

  const databaseUser = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!databaseUser) {
    return null
  }

  return new Response(JSON.stringify(databaseUser), { status: 200 })
}
