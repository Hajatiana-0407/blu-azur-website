import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import { useAppContext } from "../../context/AppContext";
import clsx from "clsx";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { id: "about", label: "À propos", href: "#about" },
    { id: "location", label: "Localisation", href: "#location" },
    { id: "activity", label: "Activités", href: "#activity" },
];

const mobileMenuVariants = {
    closed: { height: 0 },
    open: { height: "auto" },
};

const Header = () => {
    const { activeOnglet, setActiveOnglet } = useAppContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = useCallback(
        (id: string) => {
            setActiveOnglet(id);
            setMobileMenuOpen(false);
        },
        [setActiveOnglet]
    );

    return (
        <header className="w-full h-[76px] fixed top-5 left-0 right-0 z-50 bg-transparent">
            <div className="__container">
                <div className="w-full h-full border-b border-white flex justify-between items-center">
                    {/* Logo */}
                    <a href="#about" className="text-white">
                        <img src={logo} alt="logo" className="w-[106px]" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="flex gap-10">
                        <nav className="hidden md:block">
                            <ul className="flex text-lg text-white font-bold">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={clsx(
                                            "relative link-underline",
                                            activeOnglet === link.id && "link-underline-active"
                                        )}
                                        onClick={() => setActiveOnglet(link.id)}
                                    >
                                        <a
                                            className="inline-block py-2 px-7 leading-[100%]"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li className="rounded-full bg-theme">
                                    <a
                                        onClick={() => setActiveOnglet("booking")}
                                        className="inline-block py-2 px-7 leading-[100%]"
                                        href="#booking"
                                    >
                                        Réservé
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <button
                            className="flex items-center"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label="Ouvrir le menu"
                        >
                            <HiOutlineMenuAlt3 size={40} className="text-white cursor-pointer" />
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.nav
                            key="mobile-menu"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden absolute top-[79.26px] left-0 right-0 w-full z-50 overflow-hidden"
                        >
                            <div className="__container">
                                <ul className="flex flex-col gap-2 py-6 text-lg text-black font-bold items-center bg-white rounded-b">
                                    {navLinks.map((link) => (
                                        <li
                                            key={link.id}
                                            className={clsx(
                                                "relative w-full text-center",
                                                activeOnglet === link.id
                                                    ? "text-theme font-extrabold"
                                                    : "text-black"
                                            )}
                                            onClick={() => handleNavClick(link.id)}
                                        >
                                            <a
                                                className="inline-block py-3 px-7 leading-[100%] w-full"
                                                href={link.href}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                    <li
                                        className={clsx(
                                            "rounded-full w-1/2 text-center",
                                            activeOnglet === "reservation"
                                                ? "bg-theme text-white font-extrabold"
                                                : "bg-theme text-white"
                                        )}
                                    >
                                        <a
                                            onClick={() => handleNavClick("reservation")}
                                            className="inline-block py-3 px-7 leading-[100%] w-full"
                                            href="#activity"
                                        >
                                            Réservé
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
