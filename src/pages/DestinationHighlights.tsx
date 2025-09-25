import casinoIcon from "../assets/images/destinations/casino.png";
import cityIcon from "../assets/images/destinations/city.png";
import villageIcon from "../assets/images/destinations/village.png";
import mountainIcon from "../assets/images/destinations/mountain.png";
import swimmingIcon from "../assets/images/destinations/swimming.png";
import flagIcon from "../assets/images/destinations/flag.png";
import ImageBackround from "../assets/images/destination.png";

const activities = [
    {
        icon: swimmingIcon,
        title: "Sports nautiques, plongée, voile",
    },
    {
        icon: cityIcon,
        title: "Randonnées et vélo dans l’Estérel",
    },
    {
        icon: casinoIcon,
        title: "Casino et vie nocturne animée",
    },
    {
        icon: villageIcon,
        title: "Villages perchés et marchés provençaux",
    },
    {
        icon: flagIcon,
        title: "Un paradis pour les golfeurs",
    },
    {
        icon: mountainIcon,
        title: "Montagne et vélo de route",
    },
];

const DestinationHighlights = () => {
    return (
        <div
        
            className="relative bg-no-repeat bg-cover bg-top py-20 text-white __observe_to_change_header"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(var(--color-theme-rgb), 1),rgba(var(--color-theme-rgb), 1) , rgba(0,0,0,0.2)), url(${ImageBackround})`,
            }}
        >

            {/* Contenu */}
            <div className="__container space-y-20">
                {/* Titre + intro */}
                <div className="max-w-[43rem] mx-auto text-center">
                    <h2 className="text-[2rem] sm:text-[2.5rem] leading-tight mb-3">
                        Saint Raphaël, l'endroit parfait pour
                        <span className="font-bold block">vivre la Côte d’Azur</span>
                    </h2>
                    <p className="text-base sm:text-lg opacity-90">
                        Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.
                    </p>
                </div>

                {/* Liste des activités */}
                <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-6 gap-5">
                    {activities.map((activity, idx) => (
                        <div
                            key={idx}
                            className="flex  flex-col items-center text-center space-y-3"
                        >
                            <div className="w-30 h-30 md:w-25 md:h-25 flex items-center justify-center bg-white rounded-full">
                                <img
                                    src={activity.icon}
                                    alt={activity.title}
                                    className="w-15 md:w-10"
                                    loading="lazy"
                                />
                            </div>
                            <div className="max-w-[120px]">
                                <p className="text-xl sm:text-base font-bold">
                                    {activity.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Texte de conclusion */}
                <div className="max-w-[43rem] mx-auto">
                    <p className="text-center text-lg sm:text-base opacity-90">
                        Flânez sur la Promenade des Bains, explorez les calanques secrètes ou
                        profitez des points de vue panoramiques. Saint Raphaël et la Côte d’Azur
                        n’attendent que vous !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DestinationHighlights;
