import http from 'http'
import express from 'express'
import { graphql, buildSchema } from 'graphql'


const PORT = 3001
const app = express()


const schema = buildSchema(`
    type Query{
        message: String
    }
    type Mutation {
    createUser(name: String!, age: Int!): User
    }
    type User {
        name: String
        age: Int
    }
    `)



http.createServer(app).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})