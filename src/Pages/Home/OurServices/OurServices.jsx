import React from "react";
import Serviceimg from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary rounded-2xl m-10 p-10">
      <div className="text-center ">
        <h1 className="text-white text-3xl font-bold">Our Services</h1>
        <p className="text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10 pb-20">
        {/* Card 1 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Express Delivery"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">
            Express & Standard Delivery
          </h2>
          <p className="text-sm">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* Card 2 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Nationwide Delivery"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">Nationwide Delivery</h2>
          <p className="text-sm">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48-72 hours.
          </p>
        </div>
        {/* Card 3 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Cash on Delivery"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">Cash on Delivery</h2>
          <p className="text-sm">
            Offer your customers the convenience of cash on delivery, increasing
            trust and boosting your sales across Bangladesh.
          </p>
        </div>
        {/* Card 4 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Warehousing"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">Warehousing</h2>
          <p className="text-sm">
            Secure storage solutions for your inventory, with real-time stock
            management and fast dispatch to your customers.
          </p>
        </div>
        {/* Card 5 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Reverse Logistics"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">Reverse Logistics</h2>
          <p className="text-sm">
            Easy returns and exchanges for your customers, making your service
            more reliable and customer-friendly.
          </p>
        </div>
        {/* Card 6 */}
            <div className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow cursor-pointer transition duration-200 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-300">
          <img
            src={Serviceimg}
            alt="Corporate Solutions"
            className="mx-auto block mb-4 w-12 h-12 object-contain"
          />
          <h2 className="font-bold text-lg mb-2">Corporate Solutions</h2>
          <p className="text-sm">
            Tailored delivery and logistics solutions for SMEs and large
            enterprises, supporting your business growth at every stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
