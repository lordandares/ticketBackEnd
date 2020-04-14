import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda'
import { Client } from '../classes/client'

export async function createClientHandler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {

  const { body: eventBody, headers } = event
  const result: APIGatewayProxyResult = {
    body: JSON.stringify(event),
    statusCode: 400,

  }

  if (!eventBody) {
    result.body = 'empty body'
    return result
  }

  try {
    const client = new Client()
    Object.assign(client, JSON.parse(eventBody));


    if (client && client.Phone && client.ClientId && client.Name) {

      const clientData: Client = await client.createClient()

      result.body = JSON.stringify(clientData)
      result.statusCode = 200

    }
    return result

  } catch (err) {
    result.body = JSON.stringify(err)
    result.statusCode = 500

    console.log('create Error', {
      err,
      event,
    })
    return result

  }

}

