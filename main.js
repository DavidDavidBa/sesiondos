class Product {
  constructor(name, price, tipo) {
    this.name = name
    this.price = price
    this.tipo = tipo
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list')
    const element = document.createElement('div')
    element.innerHTML = `
            <div class="tarjeta text-center mb-4">
                <div class="cuerpos-tarjetas">
                    <strong>Producto</strong>: ${product.name} -
                    <strong>Precio</strong>: ${product.price} - 
                    <strong>Tipo</strong>: ${product.tipo}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `
    productList.appendChild(element)
  }

  resetForm() {
    document.getElementById('product-form').reset()
  }

  deleteProduct(element) {
    if (element.name === 'delete') {
      element.parentElement.parentElement.remove()
      this.showMessage('Producto eliminado correctamente', 'success')
    }
  }
  showMessage(message, cssClass) {
    const div = document.createElement('div')
    div.className = `alert alert-${cssClass} mt-2`
    div.appendChild(document.createTextNode(message))
    const contenedor = document.querySelector('.contenedor')
    const cuerpo = document.querySelector('#cuerpo')
    contenedor.insertBefore(div, cuerpo)
    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 3000)
  }
}
document
  .getElementById('product-form')
  .addEventListener('submit', function (e) {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const tipo = document.getElementById('tipo').value

    const product = new Product(name, price, tipo)

    const ui = new UI()

    if (name === '' || price === '' || tipo === '') {
      ui.showMessage('Por favor, inserte datos en todos los campos', 'danger')
    }

    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage('Producto agregado correctamente', 'success')

    e.preventDefault()
  })

document.getElementById('product-list').addEventListener('click', (e) => {
  const ui = new UI()
  ui.deleteProduct(e.target)
  e.preventDefault()
})

const menuForm$$ = document.querySelector('.menu-form')
const form$$ = document.querySelector('form')
let formVisible = false
const toggleForm = () => {
  if (formVisible) {
    form$$.classList.add('cuerpo-tarjeta')
    formVisible = false
  } else {
    form$$.classList.remove('cuerpo-tarjeta')
    formVisible = true
  }
}
menuForm$$.addEventListener('click', toggleForm)
