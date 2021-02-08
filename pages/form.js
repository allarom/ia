import styles from './Form.module.css'


export default function Form() {

return <div className={styles.wrapper}>
  <img className={styles.image} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1024px-NASA_logo.svg.png' />
  <h1>Dear applicant</h1>
  <p className={styles.text}>My congratulations, you were chosen to be send to Mars.
Your courage and self-sacrifice deserves the highest praise. Please enter few details about you, so we can make your life on Mars as comfortable as possible. </p>
  <p className={styles.text} style={{marginBottom: '70px'}}>Sincerely yours,
  Elon Musk</p>

  <label for="name">Name:</label> <br></br>
  <input type="text" id="name" name="name" required
       minlength="4" maxlength="20" size="20"/>
  <br></br>
  <label for="song">Favorite song:</label> <br></br>
  <input type="text" id="song" name="song" required
       minlength="4" maxlength="40" size="20"/>
  <br></br>
    <label for="drink">Favorite drink:</label> <br></br>
  <input type="text" id="drink" name="drink" required
       minlength="4" maxlength="40" size="20"/>
  <br></br>
      <label for="degree">Your degree:</label> <br></br>
  <input type="text" id="degree" name="degree" required
       minlength="4" maxlength="40" size="20"/>
  <br></br>
        <label for="tasks">Your current tasks:</label> <br></br>
  <input type="text" id="tasks" name="tasks" required
       minlength="4" maxlength="40" size="20"/>
  <br></br>
          <label for="skills">Your unique skills or strengths:</label> <br></br>
  <input type="text" id="skills" name="skills" required
       minlength="4" maxlength="40" size="20"/>
  </div>
}
