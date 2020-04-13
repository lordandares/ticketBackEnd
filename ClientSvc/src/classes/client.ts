import {attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { CLIENT_TABLE } from '../common/constants'
import { Address } from '../Interfaces/Client'

@table(CLIENT_TABLE)
export class Client {
    
    @hashKey()
    GroupId!: string;
    
    @attribute()
    ClientId!: string;
    
    @attribute()
    Name!: string;
    
    @attribute()
    Phone!: string;

    @attribute()
    Address!: Address;

}
