const { faker } = require("@faker-js/faker")
// import { faker } from "@faker-js/faker"

// export
const users = [...Array(50)].map((_, i) => ({
  userId: faker.datatype.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
}))

console.log(users)

module.exports = { users }
