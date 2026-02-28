import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Useaxiossecure from "../../../hooks/Useaxiossecure";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";

const Myparcel = () => {
  const { user } = useAuth();
  const AxiosSecure = Useaxiossecure();

  const { data: parcels = [] , refetch} = useQuery({
    queryKey: ["myparcels", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = id =>{
    console.log(id)

  
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    AxiosSecure.delete(`/parcels/${id}`)
    .then(res=>{
      console.log(res.data)

      if (res.data.deletedCount){
        refetch()
        Swal.fire({
      
      title: "Deleted!",
      text: "Your Parcel has been deleted.",
      icon: "success"
    });
  }
});
        
      }
    })
    

  }

  return (
    <div>
      <h2>All my Parcels: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {
                  parcels.map((parcel,index)=> <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td>{parcel.parcelname}</td>
              <td>{parcel.cost}</td>
              <td></td>
              <td>
                <button className="btn btn-square hover:bg-primary mr-4">
                  <FiEdit></FiEdit>
                </button>
                 <button className="btn btn-square hover:bg-primary mr-4">
                 <FaMagnifyingGlass />
                </button>
                 <button onClick={()=>handleParcelDelete(parcel._id)} className="btn btn-square hover:bg-primary">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>)
             }
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myparcel;
