import React from 'react'
import { auth as Auth } from "@/auth"
import { redirect } from "next/navigation"

export default  async function dashboard() {

  const auth = await Auth();

  if(!auth){
    redirect("/login")
  }

  return (
    <div>Dashboard</div>
  )
}
