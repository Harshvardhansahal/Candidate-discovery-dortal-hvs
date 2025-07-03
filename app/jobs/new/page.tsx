import { JobPostForm } from "@/components/job-post-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewJobPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/jobs" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Post New Job Opening</h1>
          <p className="text-gray-600 mt-2">Fill in the details to create a new job posting</p>
        </div>

        <JobPostForm />
      </main>
    </div>
  )
}
