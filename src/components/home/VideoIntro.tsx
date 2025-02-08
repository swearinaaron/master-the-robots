import { Card } from "../ui/card"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'

export function VideoIntro() {
  return (
    <div className="w-full bg-black -mt-1">
      <div className="max-w-7xl mx-auto md:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 py-8 md:py-24">
          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1"
          >
            <Card className="w-full h-[450px] overflow-hidden bg-black/20 border-0 shadow-2xl shadow-purple-500/10 rounded-none">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/EukC8n327m8"
                title="Master the Robots Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </motion.div>

          {/* Instructor Info */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex flex-col justify-center px-4 md:px-0 py-8 md:pt-0 text-white"
          >
            <h2 className="text-5xl font-bold mb-4">Meet Your Instructor</h2>
            <h3 className="text-3xl mb-8">Aaron Pickrell</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-[#34cddc]" />
                <span className="text-xl">25 Years of Software & AI Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-[#34cddc]" />
                <span className="text-xl">AI Technical Product Manager</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-[#34cddc]" />
                <span className="text-xl">Global eCommerce Stratigist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 