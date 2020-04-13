import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { Client } from '../classes/client'
import { ClientServices } from '../services/ClientServices'

export const createClientHandler: APIGatewayProxyHandler = async (event, _context) => {

  const result : APIGatewayProxyResult = {
    body: '',
    statusCode: 400,
  }
  let data = {
    Phone: '',
    ClientId: '',
    Name: ''
  };
  try {

    console.log('1------------------>')
    console.log('event', event)
    const { body } = event
   if(body){

     data = JSON.parse(body);
   }
   else{
    return result
   }

   console.log('2------------------>')
   console.log(JSON.stringify(data))
    if (data && data.Phone && data.ClientId && data.Name){
     
      const clientObject = new Client()
      this.GroupId = data.ClientId.slice(-1) 
      this.ClientId = data.ClientId
      this.Name = data.Name
      this.Phone = data.Phone

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
