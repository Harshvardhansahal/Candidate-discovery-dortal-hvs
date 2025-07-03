import { Suspense } from "react"
import { CandidateGrid } from "@/components/candidate-grid"
import { SearchFilters } from "@/components/search-filters"
import { StatsCards } from "@/components/stats-cards"
import { Button } from "@/components/ui/button"
import { Plus, Users, BookmarkIcon } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">TalentHub</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/jobs" className="text-gray-600 hover:text-gray-900">
                Jobs
              </Link>
              <Link href="/bookmarks" className="text-gray-600 hover:text-gray-900 flex items-center">
                <BookmarkIcon className="h-4 w-4 mr-1" />
                Bookmarks
              </Link>
              <Link href="/jobs/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post Job
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <StatsCards />

        {/* Search and Filters */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Discover Candidates</h2>
            <div className="text-sm text-gray-500">Showing results for all candidates</div>
          </div>

          <Suspense fallback={<div>Loading filters...</div>}>
            <SearchFilters />
          </Suspense>
        </div>

        {/* Candidates Grid */}
        <div className="mt-8">
          <Suspense fallback={<div>Loading candidates...</div>}>
            <CandidateGrid />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
