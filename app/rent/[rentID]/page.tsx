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
type ParamsProps = {
    params: {
        rentID: string
    }
}



const RentPage = async ({params}: ParamsProps) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars.json`);
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
