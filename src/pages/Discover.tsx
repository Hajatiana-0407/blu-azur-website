import ImageDiscoverBg from '../assets/images/discover.png'
import ImageDiscoverGroup from "../assets/images/dicoverGroupImage.png"

const Discover = () => {
    return (
        <div
            className="relative bg-no-repeat bg-cover bg-top py-20 text-white"
            style={{
                backgroundImage: `linear-gradient(to left, rgba(var(--color-theme-rgb), 1),rgba(var(--color-theme-rgb), 1) , rgba(0,0,0,0.2)), url(${ImageDiscoverBg})`,
            }}
        >
            <div className='__container'>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-10 items-center justity-around'>

                    {/* Content left  */}
                    <div className="mb-10 max-md:flex max-md:justify-center">
                        <img src={ImageDiscoverGroup} alt="Discover group" className="rounded-xl shadow-lg w-[394px]" />
                    </div>

                    {/* Content right */}
                    <div className="space-y-10 text-right max-md:text-center">
                        <div>
                            <h2 className="text-[2.5rem] leading-tight">
                                Un point de départ idéal pour {" "}
                                <span className="block font-bold">découvrir la Côte d’Azur ! </span>
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-center md:text-justify">
                                Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover