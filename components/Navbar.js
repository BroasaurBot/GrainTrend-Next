import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Button from './Button';


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [navClear, setNavClear] = useState(true);

  const handleClick = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const showButton = () => {
  if(window.innerWidth >= 768) {
    closeMenu()
    }};

  useEffect(() => {
    window.addEventListener('resize', showButton)
    //return () => window.removeEventListener('resize', showButton);
  }, []);

  const colourNav = () => {
    if (window.scrollY > 70) {
      setNavClear(false);
    } else {
      setNavClear(true);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', colourNav)
    //return () => window.removeEventListener('scroll', colourNav);
  }, []);



  const links = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About Us'},
    {href: '/ausDurum', label: 'Australian Durum Company'},
    {href: '/industry', label: 'Industry Links'},
  ]

  return (

    <>
      <div className={`fixed w-full h-16 top-0 left-0 z-[15]
        ${navClear ? "" : "bg-sunset-yellow drop-shadow-md"}`}>
        <div className={`max-w-screen-xl mx-auto flex h-full items-center transitional-all pt-2 pb-2
        ${menu ? "bg-white md:bg-transparent" : "bg-transparent"}`}>
          <div className='h-full mx-3 '>
            <Link href={'/'}>
              <img className='object-contain h-full'
                src={'/GrainTrend_Clear.png'}
                alt='GrainTrend'
                />
            </Link>
          </div>

          <div className='ml-auto mr-3 hidden md:flex'>
            <ul className='flex flex-row'>
              {links.map(({href, label}) => (
                <li key={`${href}${label}`} className='max-w-4 flex flex-row items-center'>
                  <Link href={href}>
                    <p className='h-full flex items-center px-2 lg:px-4 text-center text-gray-700 hover:text-gray-1000'>
                      {label}
                    </p>
                  </Link>
                <div className='bg-gray-400 w-1 h-8 rounded-xl opacity-20' />
                </li>
              ))}
            </ul>

            <div className='ml-2'>
              <Button path={'/contact'}>
                <p className='px-3'>Contact</p>
              </Button>
            </div>
          </div>

          <div className='ml-auto md:hidden'>
            <div className='h-8 w-8 mx-3' onClick={() => {handleClick(); console.log("Click!")}}>
              <img src={!menu ? '/list.png' : 'cross.png'} />
            </div>
          </div>
        </div>

        <div className={`z-[15] flex flex-col justify-space items-center overflow-hidden
        ${menu ? 'h-[100vh] opacity-100' : 'opacity-0 h-0'} bg-white
          backdrop-blur-3xl transition-all duration-500`}>

          <ul className='flex flex-col my-4'>
            {links.map(({href, label}, index) => (
              <li key={`${href}${label}`} className='max-w-4 flex flex-col items-center justify-center'>
                <Link href={href} onClick={() => closeMenu()}>
                  <p className='text-center text-3xl text-gray-700 hover:text-gray-1000'> 
                    {label}
                  </p>
                </Link>
                <div className={`bg-gray-100 w-full h-1 my-2 ${!menu && "opacity-0"}`} />
              </li>
            ))}
            <li className='flex flex-col items-center my-2' onClick={() => closeMenu()}>
              <Button path={'/contact'} >
                <p className='px-6'>Contact</p>
              </Button>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
}