import { APIGatewayProxyHandler, APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda'
import { Client } from '../classes/client'
import { ClientServices } from '../services/ClientServices'

interface clientPayload  {
  Phone: string
  ClientId: string
  Name: string
};

  export async function createClientHandler(
    event: APIGatewayProxyEvent,
  ): Promise<APIGatewayProxyResult> {

      const { body: eventBody, headers } = event
      const result : APIGatewayProxyResult = {
        body: JSON.stringify(event),
        statusCode: 400,

      }
      console.log('event', event)


      if (!eventBody) {
        return result
      }

      console.log(headers)
      console.log(eventBody)

  try {
    const data : clientPayload = JSON.parse(eventBody)

    if (data && data.Phone && data.ClientId && data.Name){
     
      const clientObject = new Client()
      clientObject.GroupId = data.ClientId.slice(-1) 
      clientObject.ClientId = data.ClientId
      clientObject.Name = data.Name
      clientObject.Phone = data.Phone

      console.log('client',JSON.stringify(clientObject))

      const client : Client = await ClientServices.createClient(clientObject)

      console.log('3------------------>')
      console.log(JSON.stringify(client))

      result.body = JSON.stringify(client)
      result.statusCode = 200
    
    }
    
  } catch (err) {
    console.log('create Error', {
      err,
      event,
    })

  }
  return result
}

