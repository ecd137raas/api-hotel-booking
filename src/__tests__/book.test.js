const axios = require('axios')

test.only('Shold a get books', async () => {
    const response = await axios.get('http://localhost:3000/books')
    const books = response.data;
    expect(response.name).toBe(books.name);

})
