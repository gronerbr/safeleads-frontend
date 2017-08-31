
import AbstractInterface from '../../AbstractInterface'

class GetDebtors extends AbstractInterface {

  get NAME () {
    return 'GetDebtors'
  }

  constructor () {
    super()
    this.handler = this.handler.bind(this)
  }

  handler () {
    return this.$httpClient.get('api/v2/')
  }

}

export default new GetDebtors()
