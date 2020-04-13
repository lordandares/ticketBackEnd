
export interface CreateClientRequest {
    ClientId: string
    Name: string
    Phone: string
    Address: Address
  }


export interface Address{
    City: string
    Country: string
    street: string
    number: string
    geo: geolocation
}

export interface geolocation{
    longitude: number
    latitude: number
}