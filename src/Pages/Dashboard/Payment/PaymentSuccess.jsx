import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import Useaxiossecure from '../../../hooks/Useaxiossecure'

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const axiosSecure = Useaxiossecure()

  useEffect(() => {

    if (!sessionId) return

    const updatePayment = async () => {

      try {

        const res = await axiosSecure.patch(`/payment-success?session_id=${sessionId}`)

        console.log("Payment Updated:", res.data)

      } catch (error) {

        console.error("Payment Update Error:", error)

      }

    }

    updatePayment()

  }, [sessionId, axiosSecure])

  return (
    <div className="text-center mt-20">

      <h2 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h2>

      <p className="mt-4 text-gray-600">
        Your parcel payment has been completed successfully.
      </p>

    </div>
  )
}

export default PaymentSuccess