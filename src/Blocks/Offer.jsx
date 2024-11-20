import person from '../assets/person.png';
import { useSelector } from 'react-redux';
function Offer(){
const offers = [
    {
      "id": 1,
      "title": "Professional Electrician Services",
      "description": "Experienced electrician available for all your electrical needs.",
      "price": "50 EUR per hour",
      "paymentType": "EUR",
      "user": {
        "id": 1,
        "name": "John Doe",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Electrician Services"
    },
    {
      "id": 2,
      "title": "Reliable Moving Services",
      "description": "Professional movers to help you relocate quickly and efficiently.",
      "price": "70 USD per hour",
      "paymentType": "USD",
      "user": {
        "id": 2,
        "name": "Jane Smith",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Moving Services"
    },
    {
      "id": 3,
      "title": "Furniture Assembly Expert",
      "description": "Skilled in assembling all types of furniture.",
      "price": "40 EUR per hour",
      "paymentType": "EUR",
      "user": {
        "id": 3,
        "name": "Mike Johnson",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Furniture Assembly"
    },
    {
      "id": 4,
      "title": "Home Staging Professional",
      "description": "Expert in home staging to make your property look its best.",
      "price": "100 USD per project",
      "paymentType": "USD",
      "user": {
        "id": 4,
        "name": "Sara Lee",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Home Staging"
    },
    {
      "id": 5,
      "title": "Experienced Babysitter",
      "description": "Caring and responsible babysitter available for your childcare needs.",
      "price": "15 EUR per hour",
      "paymentType": "EUR",
      "user": {
        "id": 5,
        "name": "Emily Davis",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Babysitting"
    },
    {
      "id": 6,
      "title": "Pet Sitting Services",
      "description": "Loving pet sitter to take care of your furry friends.",
      "price": "20 USD per day",
      "paymentType": "USD",
      "user": {
        "id": 6,
        "name": "Chris Wilson",
        "profileImage": "url_to_profile_image"
      },
      "gigType": "Pet Sitting"
    }
  ]

  const allOffers = useSelector(state => state.entireOffers);
  const selectedCurrency = useSelector(state => state.addPref);
  const selectedGigs = useSelector(state => state.addGigs);
  
  const filteredOffers = allOffers.filter(offer => 
      (selectedCurrency.length === 0 || selectedCurrency.includes(offer.paymentType)) &&
      (selectedGigs.length === 0 || selectedGigs.includes(offer.gigType))
  );
  
  const finalSelectedOffers = filteredOffers.length > 0 ? filteredOffers : allOffers;
  
return(
    <div className="flex flex-col w-3/4 justify-center">
        {finalSelectedOffers.map((offer, index) => {
            return (
                <div key={index} className="flex flex-col w-3/4 m-4 p-4 border border-SC bg-SC text-PM rounded-xl gap-2 animate-fade-in ">
                    <h2 className="text-AC font-semibold">{offer.title}</h2>
                    <p>{offer.description}</p>
                    <p className="text-AC">{offer.price}</p>
                    <p className="text-AC">{offer.paymentType}</p>
                    <div className="flex items-center">
                        <img src={person} alt="profile" className="w-8 h-8 rounded-full" />
                        <p className="ml-2">{offer.user.name}</p>
                    </div>
                    <p className="text-AC">{offer.gigType}</p>
                </div>
            )
        })}
    </div>
)
}
export default Offer;