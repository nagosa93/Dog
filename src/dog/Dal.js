import axios from "axios";


let allDogs = () => {
   return axios.get('http://localhost:8000/dog/allDogs')
}

let addDog = (dogObj) => {
   return axios.post('http://localhost:8000/admin/addDog', dogObj)
}
let removeDog = (dogData) => {
   return axios.post('http://localhost:8000/admin/deleteDog', dogData)
}
let login = (data) => {
   return axios.post('http://localhost:8000/admin/login', data)
}
let creatNewAdmin = (adminObj) => {
   return axios.post('http://localhost:8000/admin/creatAdmin', adminObj)
}
let adoptedDog = (data) => {
   return axios.post('http://localhost:8000/dog/adoptedDog', {id:data})
}

let add=(newUser) =>{
   return axios.post('http://localhost:8000/user/add', newUser)
}
let allData=() =>{
   return axios.get('http://localhost:8000/user/allData')
}

let Dal = {
   allDogs: allDogs,
   addDog: addDog,
   removeDog: removeDog,
   login: login,
   creatNewAdmin: creatNewAdmin,
   adoptedDog:adoptedDog,
   add:add,
   allDara:allData

}

export default Dal