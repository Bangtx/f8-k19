import Navigo from 'navigo'
import {HomePage, ProductsPage} from './pages'

const router = new Navigo('/')

router.on('', function () {
  HomePage()
})

router.on('/products', function () {
  ProductsPage()
})

router.on('/customers', function () {
  console.log('day la customers')
})

router.resolve()