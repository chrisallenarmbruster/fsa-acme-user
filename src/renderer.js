// export
const renderer = function (userList, users, hash) {
  const component = users
    .map((user, index) => {
      return `<li>
        <a href="#${index}">${user.username}</a>
        ${
          parseInt(hash) === index
            ? `<div style="margin-top:10px"><img width="100" src="${
                user.avatar
              }" float><pre>${JSON.stringify(user, null, 4)}</pre></div>`
            : ""
        }
      </li>`
    })
    .join("")

  console.log(component)

  userList.innerHTML = component
}

module.exports = { renderer }
