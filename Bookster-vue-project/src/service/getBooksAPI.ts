/*
Här gör jag alla api requests med axios

*/
import axios from 'axios';
import { getSearchQuery } from '@/service/eventBus';


export function searchBooks(query: any = '') {
    return axios
    .get('http://localhost:3000/library/books/search?q='+query, {
        params: {
            query: query
        }
    })
    .then(response => {
        const books = response.data.books;
        return books
    })
    .catch(error => {
        console.error(error);
    });
}

export function getBooks() {
  return axios.get('http://localhost:3000/library/books')
  .then(response => {
    const books = response.data.books;
    return books
})
.catch(error => {
    console.error(error);
}); 
}

export function getEmptyBooks() {
  return axios.get('http://localhost:3000/library/books')
  .then(response => {
    const books = '';
    return books
})
.catch(error => {
    console.error(error);
}); 
}
export function getBookTitles(string:string) {
    return searchBooks(string)
    .then((books) => {
        const titles:any = books.map((book:any) => book.title);
        console.log(titles);
        return titles;
    })
    .catch((error) => {
        console.error(error);
    });
}
export function getBookAuthor(string:string) {
    return searchBooks(string)
    .then((books) => {
        const authors:any = books.map((book:any) => book.author);
        return authors;
    })
    .catch((error) => {
        console.error(error);
    });
}
export function getBookQuantity(string:string) {
    return searchBooks(string)
    .then((books) => {
        const quantity:any = books.map((book:any) => book.quantity);
        return quantity;
    })
    .catch((error) => {
        console.error(error);
    });
}