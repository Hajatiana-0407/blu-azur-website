import Image1 from "../assets/images/activity/image1.jpeg";
import Image2 from "../assets/images/activity/image2.jpeg";
import Image3 from "../assets/images/activity/image3.jpeg";
import Image4 from "../assets/images/activity/image4.png";
import Image5 from "../assets/images/activity/image5.png";
import Button from "../components/ui/Button";

const activities = [
    {
        image: Image1,
        title: "Un patrimoine culturel d’exception",
        description:
            "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
        linkToLookAt: "#",
        linkToLookAtLabel: "Festival de Cannes, Carnaval de Nice, Fête du Citron",
    },
    {
        image: Image2,
        title: "Le sport au rythme de la Méditerranée",
        description:
            "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.  ",
        linkToLookAt: "#",
        linkToLookAtLabel: "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
    },
    {
        image: Image3,
        title: "Une destination gourmande et authentique",
        description:
            "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
        checkedLink: "#",
        checkedLabel: "Consulter la liste des meilleurs restaurants",
    },
    {
        image: Image4,
        title: "Des expériences inoubliables en famille",
        description:
            "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
    },
    {
        image: Image5,
        title: "L’évasion en pleine nature",
        description:
            "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
        checkedLink: "#",
        checkedLabel: "Consulter la liste des sentiers pédestres",
        linkToLookAt: "#",
        linkToLookAtLabel: "Grand Canyon du Verdon",
    },
];

const Activity = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="__container space-y-8">

                {/* Pour gerer la 1er ligne en 2 cols  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activities.slice(0, 2).map((activity, idx) => (
                        <ActivityCard key={idx} {...activity} height="h-[305px]" />
                    ))}
                </div>


                {/* Pour gerer la 2er ligne en 3 cols  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activities.slice(2).map((activity, idx) => (
                        <ActivityCard key={idx + 2} {...activity} height="h-[430px]" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activity;

type CardProps = {
    image: string;
    title: string;
    description: string;
    linkToLookAt?: string;
    linkToLookAtLabel?: string;
    checkedLink?: string;
    checkedLabel?: string;
    height?: string;
};

const ActivityCard: React.FC<CardProps> = ({
    image,
    title,
    description,
    linkToLookAt,
    linkToLookAtLabel,
    checkedLink,
    checkedLabel,
    height = "h-[305px]",
}) => {
    return (
        <div
            className={`relative rounded-3xl overflow-hidden  group text-white ${height}`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/80 to-transparent p-10 flex flex-col justify-end space-y-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-200">{description}</p>
                {linkToLookAt && (
                    <span>
                        À voire : {" "}
                        <a
                            href={linkToLookAt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-theme underline "
                        >
                            {linkToLookAtLabel}
                        </a>

                    </span>
                )}

                {checkedLink &&
                    <div className="w-full">
                        <Button
                            label={checkedLabel as string}
                            href={checkedLink}
                            color="theme"
                            size="sm"
                        />
                    </div>
                }
            </div>
        </div>
    );
};
