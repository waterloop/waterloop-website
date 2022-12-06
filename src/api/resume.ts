import { Server } from "./server"

const upload = (server:Server) => 
(firstname:string, lastname:string, term_year:string, subteam:string, position:string, resume:Blob) => {
    server.post('/api/upload/resume',{
        firstname,
        lastname,
        term_year,
        subteam,
        position,
        resume
    })
}

export default (server:Server) => ({
    upload: upload(server)
})