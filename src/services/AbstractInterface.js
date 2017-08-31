
import axios from 'axios'

class AbstractInterface {

  /**
   * @param {Object} strategyContext Context from strategy
   */
  constructor () {
    this.initializeAllClientRequesters()
  }

  /**
   * Create all clients
   * @return {undefined}
   */
  initializeAllClientRequesters () {
    // Put $httpClient available to all strategies
    this.$httpClient = this._createHttpClient()
    // Put $webSocketClient available to all strategies
    this.$webSocketClient = this._createWebSocketClient()
  }

  /**
  * Create axios instance to
  * use on all of strategies
  * @return {Object} axios instance
  */
  _createHttpClient () {
    return axios.create({
      baseURL: 'http://pokeapi.co/',
      timeout: 1000
    })
  }

  /**
   * Create Web socket instance to
   * use on all of strategies
   * @return {Object} web socket instance
   */
  _createWebSocketClient () {
    return () => ({})
  }

  /**
   * Force strategies to have handler
   * function such as request method
   * @return {Object} Error if not implemented
   */
  handler () {
    throw new Error('Not implemented yet')
  }
}

export default AbstractInterface
