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
const apply = (server: Server) =>
(first_name:string, last_name:string, email_address:string, current_year:string,
   program:string, application_term:string, in_school:boolean, in_person_available: boolean,
   posting_id:number, reason_to_join:string, resume_link:string, additional_information:string) => {
    server.post('/api/upload/resume',{
       first_name,
       last_name,
       email_address,
       current_year,
       program,
       application_term,
       in_school,
       in_person_available,
       posting_id,
       reason_to_join,
       resume_link,
       additional_information
    })
}

export default (server:Server) => ({
    upload: upload(server),
    apply: apply(server)
})