import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientIdStatus = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID ? 'Set' : 'Not set';
  res.status(200).json({ 
    clientIdStatus,
    nodeEnv: process.env.NODE_ENV
  })
}
