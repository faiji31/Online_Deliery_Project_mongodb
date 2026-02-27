import React, {  useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import Useaxiossecure from "../../hooks/Useaxiossecure";
import useAuth from '../../hooks/useAuth'

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const {user} = useAuth()


  const AxiosSecure = Useaxiossecure();



  const serviceCenters = useLoaderData() || [];

  // ===============================
  // HANDLE FORM SUBMIT
  // ===============================
  const handleParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict =
      data.senderdistrict === data.receiverdistrict;

    const parcelWeight = parseFloat(data.parcelweight) || 0;

    let cost = 0;

    // ===== DOCUMENT =====
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }

    // ===== NON-DOCUMENT =====
    else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const baseCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = baseCharge + extraCharge;
      }
    }

    console.log("Total Cost:", cost);
   

    Swal.fire({
  title: "Agree with The cost?",
  text: `You Will be Charge! ${cost}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I Agreee!"
}).then((result) => {
  if (result.isConfirmed) {

    AxiosSecure.post('/parcels', data)
    .then(res=>{
      console.log(res.data)
    })
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
  };

  // ===============================
  // UNIQUE REGIONS
  // ===============================
  const regions = [
    ...new Set(serviceCenters.map((c) => c.region)),
  ];

  // ===============================
  // WATCH REGIONS
  // ===============================
  const senderRegion = watch("senderregion");
  const receiverRegion = watch("receiverregion");

  // ===============================
  // GET DISTRICTS BY REGION
  // ===============================
  const districtByRegion = (region) => {
    if (!region) return [];
    return serviceCenters
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  const senderDistricts = districtByRegion(senderRegion);
  const receiverDistricts = districtByRegion(receiverRegion);

  // ===============================
  // RESET DISTRICT WHEN REGION CHANGES
  // ===============================
  useEffect(() => {
    setValue("senderdistrict", "");
  }, [senderRegion, setValue]);

  useEffect(() => {
    setValue("receiverdistrict", "");
  }, [receiverRegion, setValue]);

  return (
    <div className="bg-base-300 min-h-screen mx-auto max-w-7xl mt-10 p-6 rounded-lg">
      <h2 className="text-3xl text-secondary font-bold mb-2">
        Add Parcel
      </h2>
      <p className="text-secondary font-semibold mb-6">
        Enter your parcel details
      </p>

      <form onSubmit={handleSubmit(handleParcel)} className="text-black">

        {/* ================= Parcel Type ================= */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("parcelType", { required: true })}
              className="radio"
            />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType", { required: true })}
              className="radio"
            />
            Not-Document
          </label>
        </div>

        {errors.parcelType && (
          <p className="text-red-500 mb-4">
            Please select parcel type
          </p>
        )}

        {/* ================= Parcel Info ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            {...register("parcelname", { required: true })}
            className="input input-bordered w-full"
            placeholder="Parcel Name"
          />

          <input
            type="number"
            step="0.1"
            min="0"
            {...register("parcelweight", { required: true })}
            className="input input-bordered w-full"
            placeholder="Parcel Weight (KG)"
          />
        </div>

        {/* ================= Sender & Receiver ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ================= Sender Info ================= */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Sender Info
            </h2>

            <input
              type="text"
              {...register("sendername", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Sender Name"
              defaultValue={user?.name}
            />

            <input
              type="email"
              {...register("senderemail", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Sender Email"
              defaultValue={user?.email}
            />

            <input
              type="text"
              {...register("senderaddress", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Sender Address"
            />

            <select
              {...register("senderregion", { required: true })}
              className="select select-bordered w-full mb-4"
            >
              <option value="">Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <select
              {...register("senderdistrict", { required: true })}
              className="select select-bordered w-full mb-4"
              disabled={!senderRegion}
            >
              <option value="">Select District</option>
              {senderDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <input
              type="tel"
              {...register("sendercontactno", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Sender Contact Number"
            />

            <textarea
              {...register("senderinstruction")}
              className="textarea textarea-bordered w-full h-24"
              placeholder="Pickup Instruction"
            />
          </div>

          {/* ================= Receiver Info ================= */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Receiver Info
            </h2>

            <input
              type="text"
              {...register("receivername", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Receiver Name"
            />

            <input
              type="email"
              {...register("receiveremail", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Receiver Email"
            />

            <input
              type="text"
              {...register("receiveraddress", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Receiver Address"
            />

            <select
              {...register("receiverregion", { required: true })}
              className="select select-bordered w-full mb-4"
            >
              <option value="">Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <select
              {...register("receiverdistrict", { required: true })}
              className="select select-bordered w-full mb-4"
              disabled={!receiverRegion}
            >
              <option value="">Select District</option>
              {receiverDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <input
              type="tel"
              {...register("receivercontactno", { required: true })}
              className="input input-bordered w-full mb-4"
              placeholder="Receiver Number"
            />

            <textarea
              {...register("receiverinstruction")}
              className="textarea textarea-bordered w-full h-24"
              placeholder="Delivery Instruction"
            />
          </div>
        </div>

        {/* ================= Submit ================= */}
        <button className="btn btn-primary mt-8 text-black w-full md:w-auto">
          Proceed to Confirm Booking
        </button>

      </form>
    </div>
  );
};

export default SendParcel;