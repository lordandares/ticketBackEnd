import {attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { CLIENT_TABLE } from '../common/constants'
import { Address } from '../Interfaces/Client'
import {DataMapper} from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');


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

    createClient = async (): Promise<Client> => {
        this.GroupId = this.ClientId.slice(-1) 
        const dynamo = new DynamoDB({region: 'us-east-1'});
        const mapper = new DataMapper({client: dynamo});  
        const result=  await mapper.put<Client>({item: this});

        return result;

    }
}
