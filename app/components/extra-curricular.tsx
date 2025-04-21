import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users } from "lucide-react"

export default function ExtraCurricular() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold">Technology Enthusiast</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Actively stay updated with the latest trends and advancements in technology, regularly watching and
                researching new software tools, programming languages, and development frameworks to enhance my
                knowledge and skills.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-start gap-2">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold">Member of Sportika Sports Club</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Actively participate in Sportika, a university sports club, contributing to the organization and
                promotion of various sports events, fostering teamwork and leadership skills.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
