import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-base-300 h-full mx-auto max-w-7xl mt-10">
      <h2 className="text-3xl text-secondary font-bold p-5">Add Parcel</h2>
      <p className="text-secondary font-bold p-5">Enter your parcel details</p>
      <form
        className="mt-6 p-4 text-black"
        onSubmit={handleSubmit(handleParcel)}
      >
        <div className="">
          <label className="label text-secondary font-semibold mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
            />
            Document
          </label>
          <label className="label text-secondary font-semibold ">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Not-Document
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="parcelname"
              {...register("parcelname")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="parcelname"
              {...register("parcelweight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Sender Info</h2>
          <fieldset className="fieldset">
            <label className="label">Sender Name</label>
            <input
              type="sendername"
              {...register("sendername")}
              className="input w-full"
              placeholder="Sender Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Sender Address</label>
            <input
              type="senderaddress"
              {...register("senderaddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Sender District</label>
            <input
              type="senderdistrict"
              {...register("senderdistrict")}
              className="input w-full"
              placeholder="Sender District"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Sender Contact No</label>
            <input
              type="senderdistrict"
              {...register("sendercontactno")}
              className="input w-full"
              placeholder="Mobile Number"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Pickup Instraction</label>
            <textarea
              {...register("pickupinstraction")}
              className="textarea textarea-bordered w-full h-32"
              placeholder="Pick Up Instraction"
            />
          </fieldset>
          </div>

          <div>
          {/* Reciver  */}
          <h2 className="text-2xl font-bold text-secondary">Reciver Info</h2>
          <fieldset className="fieldset">
            <label className="label">Reciver Name</label>
            <input
              type="recivername"
              {...register("recivername")}
              className="input w-full"
              placeholder="Reciver Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Reciver Address</label>
            <input
              type="reciveraddress"
              {...register("reciveraddress")}
              className="input w-full"
              placeholder="Reciver Address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Reciver District</label>
            <input
              type="reciverdistrict"
              {...register("reciverdistrict")}
              className="input w-full"
              placeholder="Reciver District"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Reciver Contact No</label>
            <input
              type="Recivercontactno"
              {...register("recivercontactno")}
              className="input w-full"
              placeholder="Reciver Number"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Pickup Instraction</label>
            <textarea
              {...register("pickupinstraction")}
              className="textarea textarea-bordered w-full h-32"
              placeholder="Pick Up Instraction"
            />
          </fieldset>
        </div>
        </div>

        <input
          className="btn btn-primary text-black"
          value="send-percel"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SendParcel;
