import Button from "../components/ui/Button"
import ImageMapBg from "../assets/images/map.png"

const Location = () => {
    return (
        <div
            data-white={true}
            className="relative bg-no-repeat bg-cover bg-top py-20 text-black __observe_to_change_header"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.1)), url(${ImageMapBg})`,
            }}
        >
            <div className='__container'>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-10 items-center justity-around'>
                    {/* Content left  */}
                    <div className="space-y-10 max-md:text-center">
                        <div>
                            <h2 className="text-[2.5rem] leading-tight">
                                Où se trouve Blu Azur à {" "}
                                <span className="block font-bold">Saint-Raphaël ?</span>
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-center md:text-justify">
                                Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
                            </p>
                        </div>
                        <div className="xl:max-w-1/2">
                            <Button
                                label="Comment s’y rendre ?"
                                href="#"
                                color="theme"
                            />
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-xl ms-auto overflow-hidden max-md:w-full">
                        <div className="aspect-w-16 aspect-h-9 w-full h-80 min-md:w-[447px]  min-md:h-[534px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.4743284756863!2d47.53417241472!3d-18.84986548716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e7f3a1b7a5b%3A0x1b7e8b3c9a5b7a5b!2sTanjombato%2C%20Madagascar!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="École Lumière Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location