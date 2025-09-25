import type { JSX } from "react";
import logo from "../../assets/logo.svg";
import { FaEnvelope, FaPhoneAlt, FaFacebookF } from "react-icons/fa";

type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    href: string;
    external?: boolean;
};

/**
 * Affiche un élément de contact (icône + lien).
 *
 * @param {ContactItemProps} props - Propriétés du contact (icône, label, lien, external).
 * @returns {JSX.Element} Élément de contact affiché avec son lien.
 */
const ContactItem = ({ icon, label, href, external }: ContactItemProps) => (
    <li className="flex items-center gap-2">
        <span className="p-1 bg-white text-theme rounded-full">{icon}</span>
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="hover:underline"
        >
            {label}
        </a>
    </li>
);

/**
 * Liste des contacts affichés dans le footer.
 */
const contacts: ContactItemProps[] = [
    {
        icon: <FaEnvelope className="w-4 h-4" />,
        label: "info@bluazur.com",
        href: "mailto:info@bluazur.com",
    },
    {
        icon: <FaPhoneAlt className="w-4 h-4" />,
        label: "+1 555 555-5555",
        href: "tel:+15555555555",
    },
    {
        icon: <FaFacebookF className="w-4 h-4" />,
        label: "@ BLU Azur",
        href: "https://facebook.com/bluazur",
        external: true,
    },
];


const Footer = (): JSX.Element => {
    return (
        <footer className="bg-theme w-full">
            <div className="__container flex flex-col sm:flex-row justify-center items-center gap-10 py-10 md:gap-40 sm:py-20">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={logo}
                        alt="Logo Blu Azur"
                        className="w-[240px] md:w-[273px] mb-2"
                        loading="lazy"
                    />
                </div>

                {/* Contact */}
                <address className="flex flex-col gap-8 text-white not-italic">
                    <h5 className="text-2xl font-bold">Contactez-nous</h5>
                    <ul className="flex flex-col gap-5 text-lg">
                        {contacts.map((contact, index) => (
                            <ContactItem key={index} {...contact} />
                        ))}
                    </ul>
                </address>
            </div>

            {/* Copyright */}
            <div className="bg-bg-footer w-full text-center py-5 text-white text-lg font-bold">
                © {new Date().getFullYear()} Blu Azur. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
