import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    sub: string
  }

  export interface VerifyPayloadType {
    sub: string
  }
}
