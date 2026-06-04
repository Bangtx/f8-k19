const renderDialog = (data, isEdit) => {
  /*
  * data: {
  *   id: number,
  *   name: string ...
  * }
  *
  * isEdit: bool
  * */

  const overlay = document.createElement('div')

  const label = document.createElement('label')
  label.classList = 'popup-backdrop'
  label.setAttribute('for', 'popup-toggle')

  const popupContent = document.createElement('div')
  popupContent.setAttribute('class', 'panel popup-content')

  const panelHeader = document.createElement('div')
  panelHeader.setAttribute('class', 'panel-header')
  panelHeader.setAttribute('style', 'border-bottom: none; padding-bottom: 0;')

  const panelTitle = document.createElement('h2')
  panelTitle.innerText = 'Customer details'
  panelHeader.append(panelTitle)

  const popupBody = document.createElement('div')
  popupBody.setAttribute('class', 'popup-body')

  const formGrid = document.createElement('div')
  formGrid.setAttribute('class', 'form-grid')

  popupBody.append(formGrid)


  popupContent.append(panelHeader)
}

export {
  renderDialog
}