fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network is not ok');
    }
    return response.json();
  })
  .then(users => {
    
    const  Allnames=users.map(ur=>ur.name);
    console.log(Allnames);
   
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
