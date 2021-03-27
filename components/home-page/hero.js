import Image from 'next/image'

import classes from './hero.module.css'




function Hero( ) {

    return (<section className={classes.hero}>
       <div className={classes.image}>
           <Image src="/images/site/bj.jpg" alt= "Bild som visar Björn" width={300} height={300}/>
       </div>
       <h1> Björn´s Blogg </h1>
       <p>Jag bloggar om Web Development - Särskilt Frontend Frameworks såsom React och Angular...</p>
    </section>
    )
}


export default Hero;