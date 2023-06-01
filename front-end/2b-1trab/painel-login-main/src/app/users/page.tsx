"use client"
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from "axios";

type User = {
  id: number, 
  nome: string, 
  email: string, 
  senha: string, 
  permissoes: string
}

type Users = User[]

function index() {
  const [users, setUsers] = useState<Users>([])
  
  useEffect(() => {
    try {
      axios.get('http://localhost:3000/api/users').then((res: AxiosResponse<Users>) => {
        setUsers(res.data)
      })
    } catch(err) {
      console.log(err)
    }
  }, [])

  return (
    <table className="table" style={{maxWidth: '82vw', marginLeft: 'auto'}}>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">nome</th>
          <th scope="col">email</th>
          <th scope="col">permissoes</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=> (
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.permissoes}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default index