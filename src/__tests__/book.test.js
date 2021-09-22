const axios = require('axios')

const bookServices = require('../service/bookServices')

test('Shold a get books', async function () {
    const response = await axios.get('http://localhost:3000/books')
    const books = response.data;
    expect(response.name).toBe(books.name);

})
test('Shold a get book id', async function () {
    const id = 4
    const response = await axios.get(`http://localhost:3000/books/${id}`)
    const books = response.data;
    expect(response.name).toBe(books.name);

})
test('Shold a save book', async function () {
    const data = ({
        name: 'Joana Assis',
        email: 'joana@gmail.com',
        checkin: '2021-09-17T00:00:00.000Z',
        checkout: '2021-09-22T00:00:00.000Z',
        type_rooms: 'Chale',
        price: 2700.00,
        type_payment: 'Credit Card',
        status: 'ok'
    })
    const response = await axios.post('http://localhost:3000/books', data)
    const book = response.data

    expect(data.name).toBe(book.name)
    expect(data.email).toBe(book.email)

})
test.only('shold a update book', async function () {
    const data = ({
        name: 'Joana Assis',
        email: 'joanaassis@gmail.com',
        checkin: '2021-09-17T00:00:00.000Z',
        checkout: '2021-09-22T00:00:00.000Z',
        type_rooms: 'Chale',
        price: 2900,
        type_payment: 'Credit Card',
        status: 'ok'
    })
    await axios.put('http://localhost:3000/books/4', data)
    const book = await axios.get('http://localhost:3000/books/4')

})


