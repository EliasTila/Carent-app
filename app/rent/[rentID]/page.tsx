import RentForm from "@/app/RentForm";

type Car = {
  id: number;
  make: string;
  model: string;
  fuel_type: string;
  year: number;
  transmission: string;
  drive: string;
  image: string;
  description: string
  price: number
};




const RentPage = async ({params}: any) => {
  const res = await fetch(`https://carent-app-v23.vercel.app/cars.json`);
  if (!res.ok) throw new Error("Failed to fetch cars");

  const cars: Car[] = await res.json();
  const carId = Number(params.rentID);
  const car = cars.find(c => c.id === carId);

  if (!car) {
    return <p>Car not found.</p>;
  }

  return <RentForm car={car} />
} 
 

  


export default RentPage
