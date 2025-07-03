"use client"

import { useState, useEffect } from "react"
import { CandidateCard } from "./candidate-card"
import { mockCandidates } from "@/lib/mock-data"
import { useSearchParams } from "next/navigation"
import type { Candidate } from "@/lib/types"
import Users from "@/components/users" // Import the Users component

export function CandidateGrid() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const filterCandidates = () => {
      setLoading(true)

      // Simulate API delay
      setTimeout(() => {
        let filtered = [...mockCandidates]

        const search = searchParams.get("search")
        const skills = searchParams.get("skills")
        const branch = searchParams.get("branch")
        const college = searchParams.get("college")
        const batch = searchParams.get("batch")
        const experience = searchParams.get("experience")

        if (search) {
          filtered = filtered.filter(
            (candidate) =>
              candidate.name.toLowerCase().includes(search.toLowerCase()) ||
              candidate.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())),
          )
        }

        if (skills) {
          const skillsArray = skills.split(",")
          filtered = filtered.filter((candidate) =>
            skillsArray.some((skill) =>
              candidate.skills.some((candidateSkill) => candidateSkill.toLowerCase().includes(skill.toLowerCase())),
            ),
          )
        }

        if (branch) {
          filtered = filtered.filter((candidate) => candidate.branch === branch)
        }

        if (college) {
          filtered = filtered.filter((candidate) => candidate.college === college)
        }

        if (batch) {
          filtered = filtered.filter((candidate) => candidate.batch === batch)
        }

        if (experience) {
          const [min, max] = experience.split("-").map(Number)
          filtered = filtered.filter((candidate) => {
            const exp = candidate.experience
            return exp >= min && (max ? exp <= max : true)
          })
        }

        setCandidates(filtered)
        setLoading(false)
      }, 300)
    }

    filterCandidates()
  }, [searchParams.toString()]) // Convert searchParams to string to avoid object reference issues

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-3 bg-gray-300 rounded w-32"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (candidates.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
