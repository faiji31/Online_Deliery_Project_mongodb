import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import Useaxiossecure from '../../../hooks/Useaxiossecure'

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams()
  const [paymentInfo, setPaymentInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const sessionId = searchParams.get('session_id')

  const axiosSecure = Useaxiossecure()

  useEffect(() => {

    if (!sessionId) {
      setError("No session ID found")
      setLoading(false)
      return
    }

    const updatePayment = async () => {

      try {

        const res = await axiosSecure.patch(`/payment-success?session_id=${sessionId}`)

        console.log("Payment Updated:", res.data)
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId
        })
        setError(null)

      } catch (error) {

        console.error("Payment Update Error:", error)
        setError("Failed to fetch payment details")
        setPaymentInfo(null)

      } finally {
        setLoading(false)
      }

    }

    updatePayment()

  }, [sessionId, axiosSecure])

  return (
    <div className="text-center mt-20">

      {loading && (
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Loading...</h2>
        </div>
      )}

      {error && (
        <div>
          <h2 className="text-2xl font-semibold text-red-600">Error: {error}</h2>
        </div>
      )}

      {!loading && !error && paymentInfo && (
        <div>
          <h2 className="text-4xl font-bold text-green-600">
            Payment Successful 🎉
          </h2>

          <p className="mt-4 text-gray-600">
            Your parcel payment has been completed successfully.
          </p>
          <p className="mt-3 text-lg">Transaction ID: <span className="font-semibold text-blue-600">{paymentInfo.transactionId}</span></p>
          <p className="mt-2 text-lg">Tracking ID: <span className="font-semibold text-blue-600">{paymentInfo.trackingId}</span></p>
        </div>
      )}

    </div>
  )
}

export default PaymentSuccess