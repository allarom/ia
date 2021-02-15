import styles from '../styles/Home.module.css'
import dbConnect from '../utils/dbConnect'
import User from '../models/User'
import { useState } from 'react'

export default function Letter ({users}) {
    const [ user ] = useState(users[0])
    return (
      <div className={styles.container}>
        <main>
          <h1 style={{color: 'white'}}>Hello</h1>
          {user && <p style={{color: 'white'}}>My name is Commander {user?.name} and I was not on Mars. The night before my three-year flight to Mars, I went to a musical concert. There was a pianist, who played {user?.favSong}. After the concert, I drank two glasses of {user?.favDrink} – the last {user?.favDrink} I would taste for years. {user?.favSong} transported me to the training base. I spent one year there in a small building working on technology for a Mars Initiative.  </p>}
        </main>
      </div>
    )
  }

  export async function getServerSideProps() {
    await dbConnect()
  
    /* find last user in the data in our database */
    const result = await User.find().sort({ _id: -1 }).limit(1)
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })
  
    return { props: { users: users } }
  }