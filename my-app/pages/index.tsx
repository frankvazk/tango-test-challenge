import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { calculateFibonacci } from '../scripts/fibonacci'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fibonacci Calculator</title>
        <meta name="description" content="Tango FullStack Developer Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title}`}>
          <span className={ `${styles.title_active}` }>Fibonacci</span> Calculator
        </h1>
        
        <form>
          <div className={`${styles.inputgroup}`}>
            <div className={`${styles.control}`}>
              <input id="fibonaccinumber" name="fibonaccinumber" placeholder="Enter Fibonacci Number" type="number" required />
              {/* <span className="mauticform-errormsg" style="display: none;">This is required.</span> */}
            </div>
            <div className={`${styles.inputgroup}`}>
              <div className={`${styles.btn}`}>
                <button id="calculatebtn" type="submit" value="" onClick={ calculateFibonacci }>Calculate</button>
              </div> 
            </div>
          </div>
        </form>

        <p className={styles.description}>
          Fibonacci result: {' '}
          <span className={styles.title_active} id="fibonacci_result"></span>
        </p>        
      </main>

    </div>
  )
}

export default Home
