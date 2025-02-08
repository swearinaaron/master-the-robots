import { motion } from "framer-motion"
import { Bell, Briefcase, TrendingUp, Lightbulb, Mail } from 'lucide-react'

export function SignupSection() {
  return (
    <div className="w-full bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Ahead of AI Disruption
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get exclusive insights and strategies to thrive in the AI revolution. Join our community of forward-thinking professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Bell className="w-6 h-6 text-[#34cddc] mt-1" />
              <div>
                <h3 className="text-white text-lg font-semibold">Course Updates & Workshop Announcements</h3>
                <p className="text-gray-300">Be first to know about new courses and live workshop opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-[#34cddc] mt-1" />
              <div>
                <h3 className="text-white text-lg font-semibold">AI Investment Insights</h3>
                <p className="text-gray-300">Get curated analysis on emerging AI technologies and investment opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-[#34cddc] mt-1" />
              <div>
                <h3 className="text-white text-lg font-semibold">Career Navigation Tips</h3>
                <p className="text-gray-300">Learn how to future-proof your career and identify AI-resistant opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[#34cddc] mt-1" />
              <div>
                <h3 className="text-white text-lg font-semibold">Exclusive Strategies</h3>
                <p className="text-gray-300">Access insider tips on leveraging AI for career advancement</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-black/30 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Join the Insider List</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#34cddc]"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#34cddc] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#34cddc]/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Get Insider Access
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">
                Join 5,000+ professionals preparing for the future. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 