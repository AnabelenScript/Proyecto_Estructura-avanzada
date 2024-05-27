      class Node {
  constructor(product) {
      this.product = product;
      this.left = null;
      this.right = null;
  }
}

       class BinarySearchTree {
  constructor() {
      this.root = null;
  }

       add(product) {
      const newNode = new Node(product);
      if (!this.root) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

       insertNode(node, newNode) {
      if (newNode.product.name < node.product.name) {
          if (!node.left) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (!node.right) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

       inOrder(node, callback) {
      if (node !== null) {
          this.inOrder(node.left, callback);
          callback(node.product);
          this.inOrder(node.right, callback);
      }
  }

       searchCategory(node, category, callback) {
      if (node !== null) {
          this.searchCategory(node.left, category, callback);
          if (node.product.category === category) {
              callback(node.product);
          }
          this.searchCategory(node.right, category, callback);
      }
  }

       searchByName(node, name, callback) {
      if (node !== null) {
          if (node.product.name === name) {
              alert(`El producto "${name}" se encuentra en la categoría "${node.product.category}"`);
              return;
          }
          if (name < node.product.name) {
              this.searchByName(node.left, name, callback);
          } else {
              this.searchByName(node.right, name, callback);
          }
      } else {
          alert(`El producto "${name}" no existe.`);
      }
  }
}

      let products = [
          { name: "El abrazo", category: "esculturas", price: 15000 },
          { name: "Bici Doctor", category: "esculturas", price: 3000 },
          { name: "Cabeza de Indio", category: "esculturas", price: 28000 },
          { name: "Azul", category: "esculturas", price: 140000},
          { name: "Filtro de carbón", category: "pintura", price: 25000 },
          { name: "Nadadora", category: "pintura", price: 12000 },
          { name: "Los pasteles", category: "pintura", price: 32000 },
          { name: "Pop!!!", category: "pintura", price: 15000},
          { name: "Reflejos marinos", category: "fotografia", price: 5200},
          { name: "RUN RUN EL NAGUAL SE FUE PA'L NORTE", category: "fotografia", price: 37200},
          { name: "TOUCAN AU LEVER DU JOUR", category: "fotografia", price: 3890},
          { name: "PREPARÁNDOSE PARA LA VICTORIA", category: "fotografia", price: 4450},
          { name: "-312947-", category: "grabado", price: 49800},
          { name: "TOTEM 1", category: "grabado", price: 67600},
          { name: "DON'T LOSE A DIAMOND WHILE CHASING GLITTER - SCROOGE MCDUCK", category: "grabado", price: 30500},
          { name: "UTOPIA", category: "grabado", price: 36500},
];

          const productTree = new BinarySearchTree();
          products.forEach(product => productTree.add(product));

          function imprimirCategoria(category) {
          let productList = document.getElementById("productList");
          productList.innerHTML = '';

          productTree.searchCategory(productTree.root, category, (product) => {
    productList.innerHTML += `<div>${product.name} <br> $${product.price}<br><br> 
    <button onclick="addToCart('${product.name}', ${product.price})" style="border:none; background:none; padding: 0; margin:0; cursor: pointer;" id="enlace">Agregar al carrito</button>
    </div><br><br><br><br><br><br><br><br><br><br>`;
});
}

           function imprimirEsculturas() {
imprimirCategoria('esculturas');
}

           function imprimirPinturas() {
imprimirCategoria('pintura');
}

           function imprimirFotografias() {
imprimirCategoria('fotografia');
}

           function imprimirGrabados() {
imprimirCategoria('grabado');
}

           function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let found = false;
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
          cart[i].quantity +=
          found = true;
          break;
      }
      }
      if (!found) {
      cart.push({ name, price, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      }
      displayProducts();

function mostrarTodos() {
    let contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = '';

    function preOrder(node) {
        if (node !== null) {
            contenedorProductos.innerHTML += `<div>${node.product.name} <br> $${node.product.price}<br><br> 
            <button onclick="addToCart('${node.product.name}', ${node.product.price})" style="border:none; background:none; padding: 0; margin:0; cursor: pointer;" id="enlace">Agregar al carrito</button>
            </div><br><br>`;
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    preOrder(productTree.root);
}


function mostrarPrimerodeLista() {
    function minNode(node) {
        if (node == null || node.left == null) {
            return node;
        } else {
            return minNode(node.left);
        }
    }

    let minName = minNode(productTree.root);
    let minPrice = minName.product.price;
    let firstProduct = minName.product.name;

    alert(`El primer producto de la lista por orden alfabetico es: ${firstProduct} con un precio de $${minPrice}`);
}

function mostrarUltimodeLista() {
    function maxNode(node) {
        if (node == null || node.right == null) {
            return node;
        } else {
            return maxNode(node.right);
        }
    }

    let maxName = maxNode(productTree.root);
    let maxPrice = maxName.product.price;
    let ultimateProduct = maxName.product.name;

    alert(`El ultimo producto de la lista por orden alfabetico es: ${ultimateProduct} con un precio de $${maxPrice}`);
}
