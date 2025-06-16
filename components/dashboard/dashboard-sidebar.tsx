"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, History, Settings, Download, Smartphone, Trash2, FileText, Palette } from "lucide-react"

const recentProjects = [
  { id: 1, name: "FitTracker Pro", type: "Fitness App", platform: "iOS & Android", date: "2 hours ago" },
  { id: 2, name: "FoodieDelight", type: "Food Delivery", platform: "Cross-Platform", date: "1 day ago" },
  { id: 3, name: "TaskMaster", type: "Productivity", platform: "iOS", date: "3 days ago" },
  { id: 4, name: "ShopEasy", type: "E-commerce", platform: "Android", date: "1 week ago" },
]

export function DashboardSidebar() {
  const [activeProject, setActiveProject] = useState<number | null>(1)

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          New Mobile App
        </Button>
      </div>

      {/* Recent Projects */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <History className="w-4 h-4 mr-2" />
            Recent Apps
          </h3>
          <div className="space-y-2">
            {recentProjects.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-colors ${
                  activeProject === project.id ? "ring-2 ring-purple-500" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                <CardContent className="p-3">
                  <div className="font-medium text-sm text-gray-900">{project.name}</div>
                  <div className="text-xs text-gray-500">{project.type}</div>
                  <div className="text-xs text-blue-600 font-medium">{project.platform}</div>
                  <div className="text-xs text-gray-400 mt-1">{project.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              App Templates
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Palette className="w-4 h-4 mr-2" />
              Design System
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Smartphone className="w-4 h-4 mr-2" />
              Device Testing
            </Button>
          </div>
        </div>

        {/* Export Options */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Export & Deploy</h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              React Native
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Flutter
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Smartphone className="w-4 h-4 mr-2" />
              App Store Deploy
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
