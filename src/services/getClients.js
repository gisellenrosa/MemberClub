import { apiConfig } from "./api-config"

export const getClients = async () => {
  try {
    const response = await fetch(`${apiConfig}/clients`)
    const clients = await response.json()
    return clients
  }
  catch (error) {
    console.error(error)
  }
}