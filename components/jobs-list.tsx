import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, DollarSign } from "lucide-react"
import { mockJobs } from "@/lib/mock-data"

export function JobsList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Active Job Openings</h1>
        <p className="text-gray-600">{mockJobs.length} active positions</p>
      </div>

      <div className="grid gap-6">
        {mockJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{job.description}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Posted {job.postedDate}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {job.applicants} applicants
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-sm text-gray-500">Experience: {job.experience}</div>
                <div className="flex space-x-2">
                  <Button variant="outline">View Details</Button>
                  <Button>Manage Applications</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
