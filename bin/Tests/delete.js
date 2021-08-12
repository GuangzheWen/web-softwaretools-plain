
const Pets = [
    {
        "id": 9223372000001032195n,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    {
        "id": 9223372000001032196n,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    {
        "id": 2,
        "category": {
            "id": 3,
            "name": "Mudhol"
        },
        "name": "DOG",
        "photoUrls": [
            "Bengaluru"
        ],
        "tags": [
            {
                "id": 2,
                "name": "Policedog"
            }
        ],
        "status": "available"
    },
    {
        "id": 9223372000001032202n,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    {
        "id": 9223372000001032203n,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    {
        "id": 500,
        "category": {
            "id": 0,
            "name": "new Pet"
        },
        "name": "new pet",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    {
        "id": 9223372000001032204n,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }
]
const deletePetUrl = 'https://petstore.swagger.io/v2/pet/';

function deleteAll(){
    Pets.forEach(pet => {
        url = `${deletePetUrl}${pet.id}`;
        console.log(url)
        fetch(url, {
            headers: {'Content-Type': 'application/json'},
            method: 'DELETE'
          })
            .then(response => {
                setTimeout(function (){
 
                    console.log(0);
                }, 1000)
              if(response.status === 404){
                console.log('The pet could not be found!')
              } else {
                response.json()
                  .then(() => {
                    console.log('Pet deleted!')
                    document.getElementById(id).remove();

                  });
              }
            }) 
            .catch((error) => {
              if(error.message){
                console.log(error.message);
              }
            })

            setTimeout(function (){
 
                console.log(0);
            }, 1000)


            fetch(url, {
                headers: {'Content-Type': 'application/json'},
                method: 'DELETE'
              })
                .then(response => {
                  if(response.status === 404){
                    console.log('The pet could not be found!')
                  } else {
                    response.json()
                      .then(() => {
                        console.log('Pet deleted!')
                        document.getElementById(id).remove();
                      });
                  }
                })
                .catch((error) => {
                  if(error.message){
                    console.log(error.message);
                  }
                })
    }

    )
    

}
function handleDelete(id) {
  const pathForDeleteRequest = deletePetUrl + id;
  
}