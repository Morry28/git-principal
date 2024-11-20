import { useDispatch } from "react-redux";
const payBubles = ['BTC', 'EUR', 'ETH', 'USD', 'other'];
const gigBubles = [
    "Freelance Writing",
    "Graphic Design",
    "Web Development",
    "Digital Marketing",
    "Social Media Management",
    "Virtual Assistant",
    "Online Tutoring",
    "SEO Specialist",
    "App Development",
    "Data Entry",
    "Transcription Services",
    "Video Editing",
    "Photography",
    "Event Planning",
    "Interior Design",
    "Personal Training",
    "Handyman Services",
    "House Cleaning",
    "Dog Walking",
    "Landscaping",
    "Delivery Services",
    "Ride-Sharing Driver",
    "Carpentry",
    "Plumbing",
    "Electrician Services",
    "Moving Services",
    "Furniture Assembly",
    "Home Staging",
    "Babysitting",
    "Pet Sitting"
]
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
function Fetcher(){
    const dispatch = useDispatch();
    dispatch({ type: 'BASE_PREF', payload: payBubles });
    dispatch({ type: 'BASE_GIGS', payload: gigBubles });
    dispatch({ type: 'ALL_OFFERS', payload: offers });


    return null
}

export default Fetcher;