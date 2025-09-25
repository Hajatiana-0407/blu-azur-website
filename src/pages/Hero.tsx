import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Slider from "../components/Slider";
import Button from "../components/ui/Button";
// Images
import heroImg from "../assets/images/hero.png";
import side1 from "../assets/images/side-1.png";
import side2 from "../assets/images/side-2.png";

// ? Contenue
const heroContent = {
    title: "Votre évasion",
    subTitle: "sur la Côte d’Azur !",
    paragraph:
        "Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !",
    cta: {
        label: "Réservez dès maintenant votre séjour !",
        href: "#reservation",
    },
};

// ? Réseaux sociaux
const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com", icon: FaFacebook },
    { name: "YouTube", link: "https://www.youtube.com", icon: FaYoutube },
    { name: "Twitter", link: "https://www.twitter.com", icon: FaTwitter },
    { name: "Instagram", link: "https://www.instagram.com", icon: FaInstagram },
];


// Slider images
const sliderImages = [side1, side2];

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-top py-40"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${heroImg})`,
            }}
        >
            <div className="__container text-white">
                <div className="w-full min-h-80 grid grid-cols-2 gap-10">
                    {/* Left Content */}
                    <div className="space-y-10 py-20 max-lg:col-span-2 max-lg:text-center  ">
                        <h1 className=" text-6xl">
                            <span className="font-bold">{heroContent.title}</span>{" "}<span className="">{heroContent.subTitle}</span>
                        </h1>

                        <p className="text-center lg:text-justify text-lg">{heroContent.paragraph}</p>

                        <div className="mt:15 lg:mt-30 max-lg:max-w-100 mx-auto">
                            <Button
                                label={heroContent.cta.label}
                                href={heroContent.cta.href}
                                color="white"
                            />
                        </div>
                    </div>

                    {/* Right Content ( Petit slider) */}
                    <div className="min-h-40 max-lg:col-span-2 max-full">
                        <Slider images={sliderImages} position="bottom" />
                    </div>
                </div>
            </div>

            {/* Social Media Sidebar */}
            <aside className="absolute left-0 top-0 bottom-0 w-10 lg:w-15 min-[1300px]:w-[72px]  bg-theme/50 flex flex-col justify-end items-center gap-10 py-40">
                {socialLinks.map(({ name, link, icon: Icon }) => (
                    <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="text-white text-2xl hover:scale-120 transition-transform duration-500"
                    >
                        <Icon className="w-6 h-6 lg:h-8 lg:w-8" />
                    </a>
                ))}
            </aside>
        </div>
    );
};

export default Hero;
