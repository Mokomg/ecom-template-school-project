products = [
  {
    title: "nike Sneaker 1",
    Size: ["S", "M", "XL"],
    Quantity: 8,
    price: 35,
    ratings: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  },
  {
    title: "addidas Sneaker 1",
    Size: ["M", "S"],
    Quantity: 3,
    price: 40,
    ratings: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  },
  {
    title: "puma Sneaker 1",
    size: ["L", "M", "XL"],
    quantity: 5,
    price: 45,
    ratings: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  },
  {
    title: "addidas Sneaker 2",
    size: ["L", "XL", "XXL"],
    quantity: 2,
    price: 25,
    ratings: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  },
  {
    title: "Nike Sneaker 2",
    size: ["S", "L"],
    quantity: 7,
    price: 30,
    ratings: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  },
  {
    title: "Reebok",
    size: ["S", "L"],
    quantity: 7,
    price: 80,
    ratings: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
  }
]


document.getElementsByTagName('body').onload = products.forEach(product => {
  generateHTML(product)
});


var search_box = document.getElementById('search')
var input = ""
var results = []

search_box.addEventListener("input", (e) => {
  input = e.target.value;
  search()
})

function search() {
  clear()
  products.filter(
    product => product.title.toLowerCase().includes(input.toLowerCase())
  ).forEach(product => {
    generateHTML(product)})
}

function clear() {
  const display = document.querySelector(".product-wrapper");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

function generateHTML(item) {
    const productWrapper = document.querySelector(".product-wrapper");
    const product = document.createElement('div');
    const productImage = document.createElement('div');
    const pTag = document.createElement("p")
    const imageTag = document.createElement("img")
    const productMeta = document.createElement("product-meta")
    const productName = document.createElement("p")
    const productNameLink = document.createElement("a")
    const productPrice = document.createElement("p")
    const productRating = document.createElement("p")

    product.classList.add("product")
    productImage.classList.add("product-image")

    productMeta.classList.add("product-meta");
    productName.classList.add("product-name");
    productPrice.classList.add("price");
    pTag.innerText = "Quick View"
    imageTag.src = item.image;
    imageTag.width = 200;
    productNameLink.href = "product.html"
    productNameLink.innerText = item.title;
    productPrice.style.fontSize = 15 + "px";
    productPrice.innerText = "$" + item.price;
    productRating.innerText = "Rating: " + item.ratings;

    productWrapper.appendChild(product);
    product.appendChild(productImage);
    product.appendChild(productMeta)
    productImage.appendChild(imageTag);
    productMeta.appendChild(productName);
    productName.appendChild(productNameLink)
    productMeta.appendChild(productPrice)
    productMeta.appendChild(productRating)

}

document.querySelector(".lowestTohighest").addEventListener("click", function(){
  const results = products.sort((a, b) => a.price - b.price);

  clear()
  for (var i = 0, l = results.length; i < l; i++) {
    generateHTML(results[i])

  }
})

document.querySelector(".highestToLowest").addEventListener("click", function(){
  var results = products.sort((a, b) => b.price - a.price);

  clear()
  for (var i = 0, l = results.length; i < l; i++) {
    generateHTML(results[i])

  }
})

function showVal(newVal){
  clear()
  results = []
  for (var i = 0; i <products.length; i++) {
    if (products[i].price >= newVal) {
      generateHTML(products[i])
    }

  }

}


/////////////////////////////// sort by ratings ////////////////////
function sort(value) {
  clear()
  products.filter(
    product => product.ratings >= value
  ).forEach(product => {
    generateHTML(product)})
}
