import Image from 'next/image'
import styles from './page.module.css'

const Home = () => {
  return (
    <>
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Recipes</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto maxime omnis deserunt porro rem rerum quibusdam tempora dolore numquam adipisci! Omnis rem nemo accusantium illum fugiat sed aperiam. Aperiam, vero.</p>
        <div className={styles.imageWrapper}>

        <Image className={styles.image}
        src={'https://media-cdn.tripadvisor.com/media/photo-s/1e/f8/ea/61/pakistani-food.jpg'} 
        alt={'food image'}
        fill={true}>
        </Image>
        </div>
      </div>

    </div></>
  )
}

export default Home