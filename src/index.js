const users = require("./generator")
const renderer = require("./renderer")

console.log(users)

const userList = document.querySelector("#user-list")

const render = () => {
  renderer(userList, users, window.location.hash.slice(1))
}

window.addEventListener("hashchange", render)

render()
