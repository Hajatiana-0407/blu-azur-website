import Slider from "../components/Slider";
import sofaImage from "../assets/images/sofa.png";
const inclusions = [
  "Stationnement privé",
  "Linge de lit et serviettes",
  "Télévision, téléphone et Wi-Fi (accès au salon)",
  "Réfrigérateur, cuisinière, lave-vaisselle, vaisselle",
  "Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute",
  "Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.",
];

const sliderImages = [sofaImage, sofaImage];

const Feature = () => {
  return (
    <div className="py-25 bg-white text-black">
      <div className="__container">
        <div className="w-full grid grid-cols-2 gap-10">

          {/* Texte */}
          <div className="space-y-10 max-lg:col-span-2 max-lg:text-center">
            <div>
              <h2 className="text-[2.5rem] mb-5  leading-tight">
                Le confort et la sérénité d’un{" "}
                <span className="font-bold">appartement privé</span>
              </h2>
              <p className="text-lg">
                Blu Azur vous propose des appartements élégants et spacieux,
                conçus pour accueillir de 2 à 6 personnes. Offrant un cadre
                confortable et moderne, ils sont parfaits pour une escapade
                détente ou un séjour prolongé.
              </p>
            </div>

            {/* Liste d'inclusions */}
            <div className="text-left">
              <span className="text-xl font-semibold mb-4 block">
                Les inclusions :
              </span>
              <ul className="space-y-2">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-4 h-4 bg-theme rounded-full mt-2 shrink-0"></span>
                    <p className="">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image ou visuel à droite */}
          <div className="min-h-40 max-lg:col-span-2 max-full text-white">
            <Slider images={sliderImages} height="max" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
