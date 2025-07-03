"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  BookmarkIcon,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Code,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Candidate } from "@/lib/types"

interface CandidateProfileProps {
  candidate: Candidate
}

export function CandidateProfile({ candidate }: CandidateProfileProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Save to localStorage or API
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Candidates
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={candidate.avatar || "/placeholder.svg"}
                      alt={candidate.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{candidate.name}</h1>
                      <p className="text-lg text-gray-600">{candidate.title}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {candidate.experience} years experience
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={handleBookmark} className={isBookmarked ? "text-blue-600" : ""}>
                      <BookmarkIcon className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                      {isBookmarked ? "Bookmarked" : "Bookmark"}
                    </Button>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{candidate.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{candidate.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{candidate.branch}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{candidate.bio}</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {candidate.workExperience?.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <h4 className="font-semibold">{exp.position}</h4>
                    <p className="text-blue-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                  </div>
                )) || <p className="text-gray-500">No work experience listed</p>}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {candidate.projects?.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{project.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.link && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )) || <p className="text-gray-500">No projects listed</p>}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">{candidate.college}</h4>
                    <p className="text-sm text-gray-600">{candidate.branch}</p>
                    <p className="text-sm text-gray-500">Batch: {candidate.batch}</p>
                    <p className="text-sm text-gray-500">CGPA: {candidate.cgpa}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {candidate.github && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href={candidate.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      GitHub Profile
                    </a>
                  </Button>
                )}
                {candidate.linkedin && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </Button>
                )}
                {candidate.portfolio && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Portfolio
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Interview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
