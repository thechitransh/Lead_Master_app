    import Link from 'next/link';
    import styles from './page.module.css';
    import Nav from './Nav';


    function Page() {
      return (
        <>
          <Nav button='Login'/>
          <form className={styles.form}>
            <div className={styles.imgcontainer}>
              <img src="login.svg" alt="Avatar" className={styles.avatar} />
            </div>

            <div className={styles.container}>
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" className={styles.input} placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" className={styles.input} placeholder="Enter Password" name="psw" required />
              <Link href="/main">
              <button className={styles.button} type="submit">Login</button>
              </Link>
            </div>
              <span className={styles.psw}>Forgot <a href="#">password?</a></span>
          </form>
        </>
      );
    }

    export default Page;
