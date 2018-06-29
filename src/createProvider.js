import RpcEngine from 'json-rpc-engine'
import providerFromEngine from 'eth-json-rpc-middleware/providerFromEngine'

import createUbiqMiddleware from './index'

export default function createProvider(opts) {
  const engine = new RpcEngine()
  engine.push(createUbiqMiddleware(opts))
  return providerFromEngine(engine)
}
