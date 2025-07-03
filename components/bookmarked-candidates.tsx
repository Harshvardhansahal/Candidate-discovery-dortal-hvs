"use client"

import { useState, useEffect } from "react"
import { CandidateCard } from "./candidate-card"
import { mockCandidates } from "@/lib/mock-data"
import { Users } from "lucide-react"
import type { Candidate } from "@/lib/types"

export function BookmarkedCandidates() {
  const [bookmarkedCandidates, setBookmarkedCandidates] = useState<Candidate[]>([])

  useEffect(() => {
    // Get bookmarked candidate IDs from localStorage
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
    const bookmarked = mockCandidates.filter((candidate) => bookmarks.includes(candidate.id))
    setBookmarkedCandidates(bookmarked)
  }, [])

  if (bookmarkedCandidates.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarked candidates</h3>
        <p className="text-gray-500">Start bookmarking candidates to see them here</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Bookmarked Candidates</h2>
        <p className="text-gray-600 mt-1">{bookmarkedCandidates.length} candidates saved</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  )
}
