import MongoDB from 'mongodb';
import bcrypt from 'bcrypt';
const client = new MongoDB.MongoClient('mongodb://127.0.0.1:27017');

const COLLECTION_NAME = 'usuarios';
const db = client.db('videojuegos');

async function create(user){
    return client.connect()
        .then(async function () {
            const oldUser = await db.collection(COLLECTION_NAME).findOne({email: user.email});

            if (!oldUser) {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(user.password, salt);
                const newUser = {
                    ...user,
                    password: passwordHash
                }
                const createdUser = await db.collection(COLLECTION_NAME).insertOne(newUser);
                client.close();
                return createdUser;
            } else {
                client.close();
                throw new Error('User already exists')
            }
        })
        .catch(function (e) {
            console.log('No me pude conectar - ', e.message)
            return e.message;
        })
}

async function login (email, password){
    console.log(email, password)
    return client.connect()
        .then(async function() {
            const loggedUser = await db.collection(COLLECTION_NAME).findOne({email});
            if (loggedUser){
                const isPasswordValid = await bcrypt.compare(password, loggedUser.password);
                if (isPasswordValid) {
                    client.close();
                    return {...loggedUser, password: undefined};
                } else {
                    client.close();
                    throw new Error('Password Invalid')
                }
            } else {
                client.close();
                throw new Error('User not found')
            }
        })
}

export {
    create,
    login
}