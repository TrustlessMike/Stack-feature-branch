import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ 
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
    nodeEnv: process.env.NODE_ENV
  })
}
