import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function Education() {
  return (
    <Card className="p-6">
      <CardContent className="p-0">
        <div className="flex items-start gap-2">
          <CalendarDays className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Software Engineering</h3>
            <p className="text-sm text-muted-foreground">IQRA University, Karachi, Sindh</p>
            <p className="text-sm font-medium mt-1">February 2023 - Present</p>
            <p className="text-sm mt-1">CGPA: 3.34 / 4.00</p>

            <h4 className="text-md font-medium mt-4 mb-2">Relevant Courses:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
              <li className="text-sm text-muted-foreground">• Intro to Information & Communication Tech</li>
              <li className="text-sm text-muted-foreground">• Programming Fundamentals</li>
              <li className="text-sm text-muted-foreground">• Object Oriented Programming</li>
              <li className="text-sm text-muted-foreground">• JAVA Early Objects</li>
              <li className="text-sm text-muted-foreground">• C++</li>
              <li className="text-sm text-muted-foreground">• Discrete Structure</li>
              <li className="text-sm text-muted-foreground">• Calculus & Analytical Geometry</li>
              <li className="text-sm text-muted-foreground">• Linear Algebra & Differential Equation</li>
              <li className="text-sm text-muted-foreground">• Operating Systems</li>
              <li className="text-sm text-muted-foreground">• Data Structures & Algorithms</li>
              <li className="text-sm text-muted-foreground">• Software Engineering</li>
              <li className="text-sm text-muted-foreground">• Probability & Statistics</li>
              <li className="text-sm text-muted-foreground">• Introduction to Python</li>
              <li className="text-sm text-muted-foreground">• Computer Vision</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
