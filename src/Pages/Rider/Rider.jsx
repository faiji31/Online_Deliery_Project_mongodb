import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Useaxiossecure from '../../hooks/Useaxiossecure';
import useAuth from '../../hooks/useAuth';

const Rider = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  
  const { user } = useAuth();
  const AxiosSecure = Useaxiossecure();
  const navigate = useNavigate();
  const [serviceCenters, setServiceCenters] = useState([]);

  // Fetch service centers data
  useEffect(() => {
    fetch('/serviceCenters.json')
      .then(res => res.json())
      .then(data => setServiceCenters(data))
      .catch(err => console.log(err));
  }, []);

  // Set form values when user data is available
  useEffect(() => {
    if (user?.email && user?.displayName) {
      reset({
        riderName: user.displayName,
        riderEmail: user.email
      });
    }
  }, [user, reset]);

  // Handle form submission
  const handleRiderRegistration = (data) => {
    console.log('Rider Registration Data:', data);

    data.riderPhoto = user?.photoURL || '';
    data.registrationDate = new Date().toISOString();
    data.status = 'pending';

    Swal.fire({
      title: 'Submit Registration?',
      text: 'Your rider registration will be submitted for verification',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Registration',
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.post('/riders', data)
          .then((res) => {
            console.log('Response:', res.data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Registration Submitted Successfully',
              showConfirmButton: false,
              timer: 2500,
            }).then(() => {
              navigate('/');
            });
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.response?.data?.message || 'Failed to submit registration',
            });
          });
      }
    });
  };

  // Get unique regions and districts
  const regions = [...new Set(serviceCenters.map((c) => c.region))];
  const serviceRegion = watch('serviceRegion');
  const serviceDistricts = serviceRegion
    ? serviceCenters
        .filter((c) => c.region === serviceRegion)
        .map((c) => c.district)
    : [];

  // Reset district when region changes
  useEffect(() => {
    setValue('serviceDistrict', '');
  }, [serviceRegion, setValue]);

      return (
    <div className="bg-base-300 min-h-screen mx-auto max-w-7xl mt-10 p-6 rounded-lg">
      <h2 className="text-3xl text-secondary font-bold mb-2">Be a Rider</h2>
      <p className="text-secondary font-semibold mb-6">Register as a rider and start delivering</p>

      <form onSubmit={handleSubmit(handleRiderRegistration)} className="text-black">
        {/* ================= Personal Information ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name *</span>
            </label>
            <input
              type="text"
              {...register("riderName", { required: "Full name is required" })}
              className="input input-bordered w-full"
              placeholder="Your Full Name"
            />
            {errors.riderName && <p className="text-red-500 text-sm mt-1">{errors.riderName.message}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email *</span>
            </label>
            <input
              type="email"
              {...register("riderEmail", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
            {errors.riderEmail && <p className="text-red-500 text-sm mt-1">{errors.riderEmail.message}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Phone Number *</span>
            </label>
            <input
              type="tel"
              {...register("riderPhone", { required: "Phone number is required" })}
              className="input input-bordered w-full"
              placeholder="+880..."
            />
            {errors.riderPhone && <p className="text-red-500 text-sm mt-1">{errors.riderPhone.message}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">National ID/Passport *</span>
            </label>
            <input
              type="text"
              {...register("nationalId", { required: "ID is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your ID number"
            />
            {errors.nationalId && <p className="text-red-500 text-sm mt-1">{errors.nationalId.message}</p>}
          </div>
        </div>

        {/* ================= Vehicle Information ================= */}
        <div className="mb-8 p-4 border-2 border-secondary rounded-lg">
          <h3 className="text-2xl font-bold text-secondary mb-4">Vehicle Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Vehicle Type *</span>
              </label>
              <select
                {...register("vehicleType", { required: "Vehicle type is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select Vehicle Type</option>
                <option value="bike">Bike/Motorcycle</option>
                <option value="scooter">Scooter</option>
                <option value="car">Car</option>
                <option value="van">Van</option>
              </select>
              {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">License Plate *</span>
              </label>
              <input
                type="text"
                {...register("licensePlate", { required: "License plate is required" })}
                className="input input-bordered w-full"
                placeholder="License plate number"
              />
              {errors.licensePlate && <p className="text-red-500 text-sm mt-1">{errors.licensePlate.message}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Max Carrying Capacity (KG) *</span>
              </label>
              <input
                type="number"
                {...register("capacity", { required: "Capacity is required" })}
                className="input input-bordered w-full"
                placeholder="e.g., 50"
              />
              {errors.capacity && <p className="text-red-500 text-sm mt-1">{errors.capacity.message}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Driving License Number *</span>
              </label>
              <input
                type="text"
                {...register("drivingLicense", { required: "License number is required" })}
                className="input input-bordered w-full"
                placeholder="Enter driving license number"
              />
              {errors.drivingLicense && <p className="text-red-500 text-sm mt-1">{errors.drivingLicense.message}</p>}
            </div>
          </div>
        </div>

        {/* ================= Service Area ================= */}
        <div className="mb-8 p-4 border-2 border-secondary rounded-lg">
          <h3 className="text-2xl font-bold text-secondary mb-4">Service Area</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Preferred Region *</span>
              </label>
              <select
                {...register("serviceRegion", { required: "Region is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.serviceRegion && <p className="text-red-500 text-sm mt-1">{errors.serviceRegion.message}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Preferred District *</span>
              </label>
              <select
                {...register("serviceDistrict", { required: "District is required" })}
                className="select select-bordered w-full"
                disabled={!serviceRegion}
              >
                <option value="">Select District</option>
                {serviceDistricts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.serviceDistrict && <p className="text-red-500 text-sm mt-1">{errors.serviceDistrict.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Home Address *</span>
              </label>
              <textarea
                {...register("homeAddress", { required: "Address is required" })}
                className="textarea textarea-bordered w-full h-20"
                placeholder="Enter your home address"
              />
              {errors.homeAddress && <p className="text-red-500 text-sm mt-1">{errors.homeAddress.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">About You (Optional)</span>
              </label>
              <textarea
                {...register("about")}
                className="textarea textarea-bordered w-full h-20"
                placeholder="Tell us about yourself, your experience, etc."
              />
            </div>
          </div>
        </div>

        {/* ================= Agreement ================= */}
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("agreeTerms", { required: "You must agree to terms" })}
              className="checkbox checkbox-primary mt-1"
            />
            <span className="text-sm">
              I agree to comply with all delivery terms and conditions, maintain vehicle safety standards, and accept responsibility for parcels in my custody.
            </span>
          </label>
          {errors.agreeTerms && <p className="text-red-500 text-sm mt-2">{errors.agreeTerms.message}</p>}
        </div>

        {/* ================= Submit Button ================= */}
        <button type="submit" className="btn btn-primary mt-8 text-black w-full md:w-auto">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Rider;