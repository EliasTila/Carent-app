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





const  DetailsForCars = async ({params}: {params: {id: string}} ) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars.json`);
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
