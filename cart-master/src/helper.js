

// Find Product Details in all products
// Only way to uniquely identify in given data set is image property
export function getProductDetails(products, productId) {
  const product = products.find(prod => {
    return prod.image.indexOf(productId) > -1
  })

  return product;
}
export function getProductDetailsPrice(products, productId) {
  const productPrice = products.find(prod => {
    return prod.price.indexOf(productId);
  })
  console.log(productPrice.price);
  return productPrice;
}
