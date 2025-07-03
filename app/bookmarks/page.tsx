import { BookmarkedCandidates } from "@/components/bookmarked-candidates"
import { ArrowLeft, BookmarkIcon } from "lucide-react"
import Link from "next/link"

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="ml-4 flex items-center">
              <BookmarkIcon className="h-5 w-5 mr-2" />
              <h1 className="text-lg font-semibold">Bookmarked Candidates</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookmarkedCandidates />
      </main>
    </div>
  )
}
