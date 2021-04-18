// Add your code here

const formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
  


//   function submitData(name, email) {
    
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//           name, 
//           email
//         }) 
    
//       .then(resp => resp.json())
//       .then(results => {
//         console.log(results)
//       })
//     })
//   }

submitData()

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      })
    })
    .then( response => response.json())
    .then( object => {
      document.body.innerHTML = object[ "id" ]
    })
    .catch(error => {
      document.body.innerHTML = error.message
    })
}