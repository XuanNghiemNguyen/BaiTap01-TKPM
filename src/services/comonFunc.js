const productsPassRow = (products) => {
  let htmlProducts = ''
  products.forEach((element, index) => {
    htmlProducts += `<tr>
      <td class="align-middle" >${index + 1}</td>
      <td class="align-middle" title="${element.description}">${element.name}</td>
      <td class="align-middle"><img src="${element.imageUrl}" title="${
        element.description
      }" border=3 height=100 width=100></td>
      <td class="align-middle">${element.price}.000 VNĐ</td>
      <td class="align-middle">${element.brand}</td>
      <td class="align-middle">${element.producer}</td>
      </tr>
    `
  })
  return htmlProducts
}
module.exports = {
  productsPassRow
}
