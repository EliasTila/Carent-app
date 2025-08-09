import Link from "next/link";




export default async function Home() {
  
  
  
  

  return <div className="max-w-5xl mx-auto mt-20 px-6 text-gray-700">
  <h1 className="text-6xl font-extrabold text-center mb-12">
    Why choose <span className="text-orange-600">Carent</span>
  </h1>
  <p className="text-xl leading-relaxed mb-6">
    Discover the freedom of the open road with <span className="text-orange-600 font-semibold">Carent</span>! Whether you’re planning a quick city getaway, a weekend adventure, or a business trip, we’ve got the perfect ride waiting for you.
  </p>
  <p className="text-lg leading-relaxed mb-6">
    Say goodbye to endless paperwork and confusing fees — our seamless booking process puts you in the driver’s seat in just a few clicks.
  </p>
  <p className="text-lg leading-relaxed mb-6">
    From sleek compacts to spacious SUVs, every vehicle in our fleet is meticulously maintained to ensure your journey is safe, smooth, and stylish. Need help? Our friendly support team is just a call away, ready to assist you around the clock.
  </p>
  <p className="text-lg leading-relaxed mb-8">
    Experience transparent pricing, flexible rental options, and the freedom to explore on your terms. Your next adventure starts here — why wait?
  </p>
  <p className="text-lg text-center">
    Check out your future <Link href="/cars"><span className="font-bold text-orange-600">road buddy</span></Link>!
  </p>
</div>

}
