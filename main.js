const url = "http://localhost:5500/api"

// CRIAÇÃO DAS FUNÇÕES ---------------------------------------

function getUsers(){
    fetch(url)
     .then(response => response.json())
     .then(data => renderApiResult.textContent = JSON.stringify(data))
     .catch(error => console.error(error))
}

function getUser(id){
    fetch(`${url}/${id}`)
     .then(response => response.json())
     .then(data => {
        Username.textContent = data.name
        Cityuser.textContent = data.Cityuser
        Useravatar.src = data.avatar

     })
     .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updateUser, id){
    fetch(`${url}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type":"Application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-type":"Application/json; charset=TF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// CRIAÇÃO DAS VARIAVEIS COMO OBJETO

const updatedUser = {
    name: 'Joana',
    avatar: 'http://picsum.photos/200/300', 
    city: 'Recife'
}

const newUser = {
    name: "Lucas",
    avatar: "http://picsum.photos/200/300",
    city: "Porto Seguro"
}

// INICIALIZAÇÃO DAS FUNÇÕES

//updateUser(updatedUser, 9)

//addUser(newUser)

//deleteUser()

//getUser()

//getUsers()