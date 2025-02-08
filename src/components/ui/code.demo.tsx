'use client'

import { SplineScene } from "./splite";
import { Card } from "./card"
import { Spotlight } from "./spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-gradient-to-r from-purple-600/90 to-indigo-600/90 relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-100">
            Master AI & Robotics
          </h1>
          <p className="mt-4 text-purple-100 max-w-lg text-lg">
            Transform your career with hands-on training in artificial intelligence, 
            robotics, and machine learning. Join thousands of successful graduates.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 