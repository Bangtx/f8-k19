type Subscribe = (payload: any) => void

interface Listener {
  [key: string]: Subscribe[]
}

// {
//   'PRODUCT:CREATED': [onCreateProduct, onCreateProduct2]
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

  dispatch(event_type: string, payload: any = null) {
    for (const func of this.listeners[event_type]) {
      func(payload)
    }
  }
}

const onCreateProduct = (payload) => {
  console.log(payload, 123456)
}

const onCreateProduct2 = (payload) => {
  console.log(payload, 'proudtc 2')
}

const event_dispatcher = new EventDispatcher()
// event_dispatcher.subscribe('PRODUCT:CREATED', onCreateProduct)
// event_dispatcher.subscribe('PRODUCT:CREATED', onCreateProduct2)
//
// event_dispatcher.dispatch('PRODUCT:CREATED', {})

const products = []

const sendNotiToCustomers = () => console.log('send notification to customers')
const sendNotiToParentBranch = () => console.log('send notification to parent branch')
const sendNotiToPartner = () => console.log('send notification to partner')

event_dispatcher.subscribe('PRODUCT:CREATED', sendNotiToCustomers)
event_dispatcher.subscribe('PRODUCT:CREATED', sendNotiToParentBranch)
event_dispatcher.subscribe('PRODUCT:CREATED', sendNotiToPartner)

const createProduct = (product) => {
  products.push(product)

  event_dispatcher.dispatch('PRODUCT:CREATED')
}

createProduct({id: 1, name: 'test'})






