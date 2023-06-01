import axios from "axios"
import { NextResponse } from 'next/server'
export async function GET() {
  try {
      let users = await axios.get('http://localhost:3001/usuarios')
      return NextResponse.json(users.data)
  } catch (error: any) {
      console.log("error")
      return new Response(error.message, {
          status: 500
      })
  }

}