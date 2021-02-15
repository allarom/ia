import styles from './Form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Form() {

  const initialForm = {
    name: '',
    favSong: '',
    favDrink: ''
  }

  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: initialForm.name || '',
    favSong: initialForm.favSong || '',
    favDrink: initialForm.favDrink || ''
  })

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
     postData(form)
    } else {
      setErrors({ errs })
    }
  }

    /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
    const formValidate = () => {
      let err = {}
      if (!form.name) err.name = 'Name is required'
      if (!form.favDrink) err.favDrink = 'Drink is required'
      if (!form.favSong) err.favSong = 'Song is required'
      return err
    }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      console.log("res", res, form)

      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/letter')
    } catch (error) {
      setMessage('Failed to add')
    }
  }

return <div className={styles.wrapper}>
  <img className={styles.image} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1024px-NASA_logo.svg.png' />
  <h1>Dear applicant</h1>
  <p className={styles.text}>My congratulations, you were chosen to be send to Mars.
Your courage and self-sacrifice deserves the highest praise. Please enter few details about you, so we can make your life on Mars as comfortable as possible. </p>
  <p className={styles.text} style={{marginBottom: '70px'}}>Sincerely yours,
  Elon Musk</p>
<form id='add-form' onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label> <br></br>
  <input type="text" id="name" name="name" value={form.name}
      onChange={handleChange} required
       minLength="4" maxLength="20" size="20"/>
  <br></br>
  <label htmlFor="favSong">Favorite song:</label> <br></br>
  <input type="text" id="favSong" name="favSong" value={form.favSong}
  onChange={handleChange} required minLength="4" maxLength="40" size="20"/>
  <br></br>
    <label htmlFor="favDrink">Favorite drink:</label> <br></br>
  <input type="text" id="favDrink" name="favDrink" value={form.favDrink}
      onChange={handleChange} required
       minLength="4" maxLength="40" size="20"/>
  <br></br>
      {/* <label htmlFor="degree">Your degree:</label> <br></br>
  <input type="text" id="degree" name="degree" required
       minLength="4" maxLength="40" size="20"/>
  <br></br>
        <label htmlFor="tasks">Your current tasks:</label> <br></br>
  <input type="text" id="tasks" name="tasks" required
       minLength="4" maxLength="40" size="20"/>
  <br></br>
          <label htmlFor="skills">Your unique skills or strengths:</label> <br></br>
  <input type="text" id="skills" name="skills" required
       minLength="4" maxLength="40" size="20"/>
  <br></br> */}
  <button type="submit" value="Submit" ></button>
  </form>
  </div>
}
