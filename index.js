import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import cookieParser from 'cookie-parser'
import { Login, Logout, Register } from './endPoints.js'
const server=express()
server.use(cors({
    origin:process.env.clientUrl,
    credentials:true
}))
server.use(express.json())
server.use(cookieParser(process.env.secret))
server.post('/api/auth/register',Register)
server.post('/api/auth/login',Login)
server.delete('/api/auth/logout',Logout)
server.use(express.static('./Frontend/dist'))
const currPath=path.resolve()
server.get("*all",async(req,res)=>{
     res.sendFile(path.resolve(currPath,"./Frontend/dist","index.html"))
})
const PORT=process.env.PORT || 10000
server.listen(PORT,'0.0.0.0',()=>{
    console.log(`server started on port 2000`)
})