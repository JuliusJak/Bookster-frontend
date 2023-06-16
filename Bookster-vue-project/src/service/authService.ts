import axios from "axios";

export async function signIn(payload:any) {
    axios
    .post('http://localhost:3000/auth/login', payload)
    .then(response => {
      console.log(response)
      const accessToken = response.data.accessToken;

      localStorage.setItem('token', accessToken);
    })
    .catch(error => {
      console.error(error);
      console.log('Authentication failed'); // Log error message to console
    });
}
export async function registerNewUser(payload:any) {
    axios
    .post('http://localhost:3000/auth/register', payload)
    .then(response => {
        console.log('Registration successful ',response);

    })
    .catch(error => {
      console.error(error);
      console.log('Registration failed'); // Log error message to console
    });
}