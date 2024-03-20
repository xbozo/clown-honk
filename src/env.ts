import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  KINDE_CLIENT_ID: z.string(),
  KINDE_CLIENT_SECRET: z.string(),
  KINDE_ISSUER_URL: z.string().url(),
  KINDE_SITE_URL: z.string().url(),
  KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
  KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),
  DATABASE_URL: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (parsedEnv.success === false) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format())

  throw new Error('❌ Invalid environment variables!')
}

export const env = parsedEnv.data
