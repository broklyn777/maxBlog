import {Fragment} from 'react'
import FeaturedPosts from '../components/home-page/featured-posts';

import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
    {
slug: 'getting-started-with-nextjs', 
title: 'Getting Started with NextJS', 
image: 'getting-started-nextjs.png',
excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in neque, illo quia aliquam delectus!', 
date: '2021-04-22'
},
   {
slug: 'getting-started-with-nextjs2', 
title: 'Getting Started with NextJS', 
image: 'getting-started-nextjs.png',
excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in neque, illo quia aliquam delectus!', 
date: '2021-04-22'
},
   {
slug: 'getting-started-with-nextjs3', 
title: 'Getting Started with NextJS', 
image: 'getting-started-nextjs.png',
excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in neque, illo quia aliquam delectus!', 
date: '2021-04-22'
},
   {
slug: 'getting-started-with-nextjs4', 
title: 'Getting Started with NextJS', 
image: 'getting-started-nextjs.png',
excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in neque, illo quia aliquam delectus!', 
date: '2021-04-22'
}
]

function HomePage () {

    return(
<Fragment>
<Hero/>

<FeaturedPosts posts={DUMMY_POSTS}/>

</Fragment>


    ) 

}
 
export default HomePage;







// 1) Hero => Present ourselfs
// 2) Featured Posts