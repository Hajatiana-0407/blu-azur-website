import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/logo.svg'
import { useAppContext } from '../../context/AppContext'
import clsx from 'clsx';
import { useState } from 'react';

const Header = () => {
    // ? Gestion des onglets actifs 
    const { activeOnglet, setActiveOnglet } = useAppContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full h-[76px] fixed top-5 left-0 right-0 z-50 bg-transparent">
            <div className="__container relative">
                <div className="w-full h-full border-b border-white flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white">
                        <a href="#about">
                            <img src={logo} alt="logo" className="w-[106px]" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex  text-lg text-white font-bold">
                            <li className={clsx({
                                'link-underline-active': activeOnglet === 'about'
                            }, 'relative link-underline')} onClick={() => setActiveOnglet('about')}>
                                <a className="inline-block py-2 px-7 leading-[100%]" href="#about">À propos</a>
                            </li>
                            <li className={clsx({
                                'link-underline-active': activeOnglet === 'location'
                            }, 'relative link-underline')} onClick={() => setActiveOnglet('location')}>
                                <a className="inline-block py-2 px-7 leading-[100%]" href="#location">Localisation</a>
                            </li>
                            <li className={clsx({
                                'link-underline-active': activeOnglet === 'activity'
                            }, 'relative link-underline')} onClick={() => setActiveOnglet('activity')}>
                                <a className="inline-block py-2 px-7 leading-[100%]" href="#activity">Activités</a>
                            </li>
                            <li className="rounded-full bg-theme">
                                <a onClick={() => setActiveOnglet('booking')} className="inline-block py-2 px-7 leading-[100%]" href="#booking">Réservé</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile  Icon */}
                    <button className="md:hidden flex items-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Ouvrir le menu">
                        <HiOutlineMenuAlt3 className="text-white text-5xl cursor-pointer" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="md:hidden absolute top-[79.26px] left-0 right-0 w-full z-50">
                        <ul className="flex flex-col gap-2 py-6 text-lg text-white font-bold items-center">
                            <li className={clsx('relative link-underline w-full text-center')} onClick={() => { setActiveOnglet('about'); setMobileMenuOpen(false); }}>
                                <a className="inline-block py-3 px-7 leading-[100%] w-full" href="#about">À propos</a>
                            </li>
                            <li className={clsx('relative link-underline w-full text-center')} onClick={() => { setActiveOnglet('localisation'); setMobileMenuOpen(false); }}>
                                <a className="inline-block py-3 px-7 leading-[100%] w-full" href="#localisation">Localisation</a>
                            </li>
                            <li className={clsx('relative link-underline w-full text-center')} onClick={() => { setActiveOnglet('activity'); setMobileMenuOpen(false); }}>
                                <a className="inline-block py-3 px-7 leading-[100%] w-full" href="#activity">Activités</a>
                            </li>
                            <li className="rounded-full bg-theme w-full text-center">
                                <a onClick={() => { setActiveOnglet('reservation'); setMobileMenuOpen(false); }} className="inline-block py-3 px-7 leading-[100%] w-full" href="#activity">Réservé</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header