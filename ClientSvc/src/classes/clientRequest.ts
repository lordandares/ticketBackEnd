import { CreateClientRequest } from '../Interfaces/Client'
import { Address } from '../Interfaces/Client'

export class createClientRequest implements CreateClientRequest {
    ClientId: string
    Name: string
    Phone: string
    Address: Address
    GroupId: string

    constructor(obj: any){
        this.GroupId = obj.ClientId.slice(-1)
        this.ClientId = obj.ClientId
        this.Name = obj.Name
        this.Phone = obj.Phone
        this.Address = obj.Address
    }
  }