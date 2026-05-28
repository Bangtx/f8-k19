const getProducts = async () => {
  // https://fakestoreapi.com/products
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products'
    )

    const data = await response.json()

    return data
  } catch (e) {
    alert('get data failed')
  }
}

const renderProductCard = (product) => {
  const cardContainer = document.createElement('div')
  cardContainer.classList = 'product-item'
  cardContainer.setAttribute('data-id', product.id)

  const prodItemImg = document.createElement('div')
  prodItemImg.classList = 'product-item-img'

  const prodImg = document.createElement('img')
  prodImg.setAttribute('src', product.image)

  prodItemImg.append(prodImg)

  const prodItemTitle = document.createElement('p')
  prodItemTitle.setAttribute('class', "product-item-title")
  prodItemTitle.innerText = product.title

  const prodItemStar = document.createElement('p')
  prodItemStar.classList = 'product-item-star'

  const prodItemStarIcon = document.createElement('i')
  prodItemStarIcon.classList = 'fa-solid fa-star'

  const prodItemStarRate = document.createElement('span')
  prodItemStarRate.innerText = product.rating.rate

  const prodItemStarStar = document.createElement('span')
  prodItemStarStar.innerText = product.rating.count
  prodItemStarStar.classList = 'quantity-star'

  const productItemFooter = document.createElement('div')
  productItemFooter.classList = 'product-item-footer'

  const productItemPrice = document.createElement('p')
  productItemPrice.classList = 'product-item-price'
  productItemPrice.innerText = product.price

  const productItemButton = document.createElement('button')
  productItemButton.setAttribute('title', 'Thêm vào giỏ hàng')
  productItemButton.setAttribute('class', 'btn-cart')

  const productItemButtonIcon = document.createElement('i')
  productItemButtonIcon.classList = 'bi bi-cart2'

  productItemButton.append(productItemButtonIcon)

  productItemFooter.append(productItemPrice)
  productItemFooter.append(productItemButton)

  prodItemStar.append(prodItemStarIcon)
  prodItemStar.append(prodItemStarRate)
  prodItemStar.append(prodItemStarStar)

  cardContainer.append(prodItemImg)
  cardContainer.append(prodItemTitle)
  cardContainer.append(prodItemStar)
  cardContainer.append(productItemFooter)

  return cardContainer
}

const renderProductList = async (products) => {
  const productList = document.querySelector('.product-list')

  products.forEach(product => {
    productList.append(renderProductCard(product))
  })
}

const renderCategoryList = (categories, onClick) => {
  const sidebarContent = document.querySelector('.sidebar-content')

  categories.forEach(category => {
    const categorieItem = document.createElement('div')
    categorieItem.classList = 'categorie-item active'
    categorieItem.innerText = category

    categorieItem.addEventListener('click', () => {
      onClick(category)
    })

    sidebarContent.append(categorieItem)
  })
}

const init = async () => {
  const products = await getProducts()

  let categoryNames = [...products.map(p => p.category)]
  categoryNames = new Set(categoryNames)
  categoryNames = Array.from(categoryNames)

  renderCategoryList(categoryNames, (categoryName) => {
    console.log(categoryName)

    // filter products
    // renderCategoryList(filteredProducts)
  })
}

init()