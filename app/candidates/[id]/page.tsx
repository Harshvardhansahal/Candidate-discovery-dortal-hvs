import { notFound } from "next/navigation"
import { mockCandidates } from "@/lib/mock-data"
import { CandidateProfile } from "@/components/candidate-profile"

interface CandidatePageProps {
  params: Promise<{ id: string }>
}

export default async function CandidatePage({ params }: CandidatePageProps) {
  const { id } = await params
  const candidate = mockCandidates.find((c) => c.id === id)

  if (!candidate) {
    notFound()
  }

  return <CandidateProfile candidate={candidate} />
}

export async function generateStaticParams() {
  return mockCandidates.map((candidate) => ({
    id: candidate.id,
  }))
}
