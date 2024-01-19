import Annonce from '@/components/forms/Annonce'
import { getUserById } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateAnnonce = async () => {
  const userId = "12345"
  if (!userId) {
    redirect('/sign-in')
  }
  const mongoUser = await getUserById({userId})
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Publier une annonce</h1>
      <Annonce mongoUserId={JSON.stringify(mongoUser._id)}/>
    </div>
  )
}

export default CreateAnnonce