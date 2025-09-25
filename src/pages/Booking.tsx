import BookingImageBg from "../assets/images/booking.png";
import Button from "../components/ui/Button";

const Booking = () => {
    return (
        <section
            className="relative  bg-cover bg-center py-80 text-white"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(var(--color-theme-rgb), 1),rgba(var(--color-theme-rgb), 0.4)  ,  rgba(0,0,0,0.2)), url(${BookingImageBg})`,
            }}
        >
            <div className="__container">
                <div className="w-full text-center space-y-10">
                    {/*  Title  */}
                    <div>
                        <h2 className="text-5xl font-bold">Réservations</h2>
                    </div>
                    <div className="max-w-2xl mx-auto text-lg">
                        <p>
                            <span className="font-bold">Offrez-vous un séjour inoubliable</span>  dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                        </p>
                    </div>
                    <div className="max-w-120 mx-auto">
                        <Button label="Réservez dès maintenant votre séjour !" backgroundColor="theme" href="#" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Booking