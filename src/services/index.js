
import RequestFatherComposite from './RequestFatherComposite'
import Strategies from './strategies'

const RequestFather = new RequestFatherComposite()

/**
 * Register all strategies
 */
Strategies.map((strategy) => RequestFather.add(strategy))

export { RequestFather }
