import { CreateClientRequest } from "../Interfaces/client";
import { Client } from '../classes/client'
import {DataMapper} from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');



const createClient = async (obj: Client): Promise<Client> => {
  
  const dynamo = new DynamoDB({region: 'us-west-2'});
  const mapper = new DataMapper({client: dynamo});  
  const result = await mapper.put({item: obj});
  return result.item;

}


const ClientServices = {
  createClient
}

export { ClientServices }