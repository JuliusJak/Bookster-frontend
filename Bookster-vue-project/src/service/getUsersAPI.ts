import axios from "axios";

export async function getUsers(): Promise<any> {
    const token = localStorage.getItem("token");
  
    try {  
  
      const response = await axios.get('http://localhost:3000/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    
      });
  
      console.log(response.data.users)
      return response.data.users
    } catch (error) {
      console.error('Error adding book:', error);
    }
}
export async function getUsername(): Promise<any> {
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.get('http://localhost:3000/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const usernames = response.data.users.map((user: any) => user.username);
      console.log(usernames);
      return usernames;
    } catch (error) {
      console.error('Error adding book:', error);
    }
}
export async function getRoles(): Promise<any> {
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.get('http://localhost:3000/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const roles = response.data.users.map((user: any) => user.role);
      console.log(roles);
      return roles;
    } catch (error) {
      console.error('Error getting roles:', error);
    }
}

export async function getpurchases(user:string): Promise<any> {
    //const user = localStorage.getItem('user')
    const getArray = localStorage.getItem(user+'-books')
    let array: number[] = [] 
    if(getArray){
        const storedArray = JSON.parse(getArray)
        const storedArrayLength:number = storedArray.length;
        console.log(storedArrayLength)
        for (let index = 0; index < 8; index++) {
            array.push(storedArrayLength)
            
        }
        return array;
    }
    else{
        array.push(0)
        return array;
    }
}