import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Client } from '../Interfaces/Client'
import { createClient } from '../services/createClient'

export async function createClientHandler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  try {
    const { body: eventBody } = event

    const client : Client = await createClient
    return {
      body: JSON.stringify(event),
      statusCode: 200,
    }
  } catch (err) {
    console.error('UpdateScheduleError', {
      err,
      event,
    })

  }
}
