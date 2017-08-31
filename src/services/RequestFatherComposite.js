class RequestFatherComposite {
  add (Requester) {
    this[Requester.NAME] = Requester.handler
  }
}

export default RequestFatherComposite
