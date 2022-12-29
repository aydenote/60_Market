import AddProduct from '../script/addProduct'
const addProduct = new AddProduct()

describe('addProduct', () => {
  test('makeComma', () => {
    expect(addProduct.comma('12345')).toBe('12,345')
  })
  test('deleteComma', () => {
    expect(addProduct.uncomma('12,345')).toBe('12345')
  })
})
