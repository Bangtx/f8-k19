type Subscribe = (payload: any) => void

interface Listener {
  [key: string]: Subscribe[]
}

// {
//   'product:imported': [payForLogistic, updateStore, sendNotu]
// }

class EventDispatcher {
  private listeners: Listener

  constructor() {
    this.listeners = {}
  }

  subscribe(event_type: string, listener: Subscribe) {
    /*
    * event_type: product:created, sale:updated
    * listener: callable (function)
    * */
    if (!Object.keys(this.listeners).includes(event_type)) {
      this.listeners[event_type] = []
    }
    // @ts-ignore
    this.listeners[event_type].push(listener)
  }

  dispatch(event_type: string, payload: any) {

  }
}