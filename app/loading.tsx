import { Users } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Users className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we fetch the data</p>
      </div>
    </div>
  )
}
