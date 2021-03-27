import Link from 'next/link'
import Logo from './logo';
import classes from './main-navigation.module.css'

function MainNavigation() {

    return (
    <header className={classes.header} >
   <Link href="/" > 
   <a><Logo /> </a> 
    </Link>
<nav>
<ul>


</ul>
<li>
<Link href="/posts "> Posts  </Link>
<Link href="/contact "> Kontakt  </Link>

</li>
</nav>


    </header>)
}

export default MainNavigation;

// import Link from 'next/link';

// import Logo from './logo';
// import classes from './main-navigation.module.css';

// function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <Link href='/'>
//         <a>
//           <Logo />
//         </a>
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <Link href='/posts'>Posts</Link>
//           </li>
//           <li>
//             <Link href='/contact'>Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default MainNavigation;