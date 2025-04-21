'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, FileCode, Globe, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  type: "typescript" | "java" | "web" // Type of project to determine which icon to show
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, type, link, tags }: ProjectCardProps) {
  const getIcon = () => {
    switch (type) {
      case "typescript":
        return <Code2 className="h-12 w-12 text-blue-500" />
      case "java":
        return <FileCode className="h-12 w-12 text-orange-500" />
      case "web":
        return <Globe className="h-12 w-12 text-green-500" />
      default:
        return <Code2 className="h-12 w-12" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-6 flex flex-col items-center">
        {getIcon()}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2 flex items-center justify-between">
          {title}
          {link && (
            <Link href={link} target="_blank" className="hover:text-muted-foreground">
              <Github className="h-5 w-5" />
            </Link>
          )}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
