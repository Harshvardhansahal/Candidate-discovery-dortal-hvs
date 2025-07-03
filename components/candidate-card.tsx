"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookmarkIcon, MapPin, GraduationCap, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Candidate } from "@/lib/types"

interface CandidateCardProps {
  candidate: Candidate
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Here you would typically save to localStorage or API
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
    if (isBookmarked) {
      const filtered = bookmarks.filter((id: string) => id !== candidate.id)
      localStorage.setItem("bookmarks", JSON.stringify(filtered))
    } else {
      bookmarks.push(candidate.id)
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={candidate.avatar || "/placeholder.svg"}
              alt={candidate.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{candidate.name}</h3>
              <p className="text-sm text-gray-600">{candidate.title}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className={isBookmarked ? "text-blue-600" : "text-gray-400"}
          >
            <BookmarkIcon className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-gray-600 space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {candidate.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {candidate.experience}y exp
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <GraduationCap className="h-4 w-4 mr-1" />
          {candidate.branch} • {candidate.college} • {candidate.batch}
        </div>

        <div className="flex flex-wrap gap-1">
          {candidate.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {candidate.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{candidate.skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex space-x-2">
            {candidate.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={candidate.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
            {candidate.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
          <Link href={`/candidates/${candidate.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
