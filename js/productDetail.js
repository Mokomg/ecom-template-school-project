document.querySelector(".detail-wrapper");

const product = {
  title: "nike Sneaker 1",
  Size: ["S", "M", "XL"],
  Quantity: 8,
  price: 35,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
}

const productImage = document.querySelector(".product-image");
const imageTagMain = document.createElement('img');
imageTagMain.width = 550
imageTagMain.height = 800
imageTagMain.src = product.image;
const imageTag1 = document.createElement('img');
imageTag1.width = 106
imageTag1.height = 150
imageTag1.src = product.image;
const imageTag2 = document.createElement('img');
imageTag2.width = 106
imageTag2.height = 150
imageTag2.src = product.image;
const imageTag3 = document.createElement('img');
imageTag3.width = 106
imageTag3.height = 150
imageTag3.src = product.image;
const imageTag4 = document.createElement('img');
imageTag4.width = 106
imageTag4.height = 150
imageTag4.src = product.image;
const imageTag5 = document.createElement('img');
imageTag5.width = 106
imageTag5.height = 150
imageTag5.src = product.image;

console.log(productImage);
productImage.appendChild(imageTagMain)
productImage.appendChild(imageTag1)
productImage.appendChild(imageTag2)
productImage.appendChild(imageTag3)
productImage.appendChild(imageTag4)
productImage.appendChild(imageTag5)



const productDetail = document.querySelector(".product-detail");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".price");
const productQty = document.querySelector("#qty");
const productDescription = document.querySelector(".description");

productTitle.innerText = product.title;
productDescription.innerText = product.description;
productPrice.innerText = "$" + product.price;
productDescription.innerText = product.description;

function updatePrice(value) {
  productPrice.innerText = "$" + (value * product.price);
}
