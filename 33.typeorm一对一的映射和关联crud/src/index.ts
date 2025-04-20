import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.id = 1
    // user.firstName = "liu"
    // user.lastName = "yaoyao"
    // user.age = 30

    // const idCard = new IdCard()
    // idCard.id = 1
    // idCard.cardName = '140xx'
    // idCard.user = user

    // // await AppDataSource.manager.save(user)
    // await AppDataSource.manager.save(idCard)

    await AppDataSource.manager.delete(User, 1)

    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    const idcards = await AppDataSource.manager.find(IdCard, {
        relations: {
            user: true
        }
    })
    console.log(idcards)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
