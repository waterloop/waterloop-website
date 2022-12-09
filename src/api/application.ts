import { Server } from "./server"
import { AxiosResponse } from 'axios';

const upload = (server:Server)  => 
(formData:FormData):Promise<AxiosResponse<string>> => 
server.post('/api/upload/resume',
    formData, {
        headers: {
            'Content-Type':'multipart/form-data'
        }
    }
)

const apply = (server: Server) =>
(body: Object):Promise<AxiosResponse<string>> => 
    server.post('/api/applications', body)

export default (server:Server) => ({
    upload: upload(server),
    apply: apply(server)
})