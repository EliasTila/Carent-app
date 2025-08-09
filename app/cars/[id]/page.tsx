import DetailsForCarsClient from "./DetailsForCarsClient";

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





const  DetailsForCars = async ({params}: any ) => {
   const res = await fetch(`https://carent-app-v23.vercel.app/cars.json`);
  const cars: Car[] = await res.json();

  const carId = Number(params.id);
  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return <h1>Car is not found! Sorry</h1>;
  }

     

  return (
    
    <DetailsForCarsClient car={car} />
  )
}

export default DetailsForCars
