import axios from 'axios';
interface newBook {
  title: string;
  author: string;
  quantity: number;
}
export async function addBook(newBook: newBook): Promise<void> {
  const token: string | null = localStorage.getItem("token");

  try {
    console.log(newBook.title)


    const response = await axios.post('http://localhost:3000/admin/books', newBook, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Book added successfully:', response.data);
  } catch (error) {
    console.error('Error adding book:', error);
  }
}
export async function deleteBook(bookTitle: any): Promise<void> {
  const token: string | null = localStorage.getItem("token");
  try {
    const response = await axios.delete('http://localhost:3000/admin/books', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: bookTitle,
      },
    });

    console.log('Book deleted successfully:', response.data);
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}
export async function editBook(previous: string, current: newBook): Promise<void> {
  const token: string | null = localStorage.getItem("token");

  try {
    const response = await axios.put(
      'http://localhost:3000/admin/books',
      {
        previous: {
          title: previous
        },
        current: current,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Book edited successfully:', response.data);
  } catch (error) {
    console.error('Error editing book:', error);
  }
}
