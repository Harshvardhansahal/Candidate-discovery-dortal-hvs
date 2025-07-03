import { JobsList } from "@/components/jobs-list"
import { Button } from "@/components/ui/button"
import { Plus, Briefcase } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <Briefcase className="h-6 w-6 mr-2" />
                Job Openings
              </Link>
            </div>
            <Link href="/jobs/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <JobsList />
      </main>
    </div>
  )
}
