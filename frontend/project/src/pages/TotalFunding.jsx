import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TotalFunding = () => {
  // In a real application, this would be fetched from an API
  const totalFunding = 1500000000 // $1.5 billion

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Funding</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">${(totalFunding / 1000000000).toFixed(2)}B</p>
      </CardContent>
    </Card>
  )
}

export default TotalFunding
