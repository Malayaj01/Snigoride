'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type TeamMember = {
  name: string
  role: string
  initials: string
  hue: number
}

interface MeetOurTeamProps {
  team: TeamMember[]
}

export default function MeetOurTeam({ team }: MeetOurTeamProps) {
  const [activeId, setActiveId] = useState(team[0].name)

  const activeMember = team.find(m => m.name === activeId)
  const otherMembers = team.filter(m => m.name !== activeId)

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 text-center">
          LEADERSHIP
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-20 text-center"
          style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
        >
          Meet Our Team
        </motion.h2>

        <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] mx-auto flex items-center justify-center">
          {/* Subtle Outer Circle Dashed Borders for Orbit Aesthetic */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400/20 dark:border-gray-500/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
          <div className="absolute inset-8 rounded-full border border-gray-400/10 dark:border-gray-500/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

          {/* Active Member Full Display in Center */}
          <AnimatePresence mode="popLayout">
            {activeMember && (
              <motion.div
                key={`center-${activeMember.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative z-30 flex flex-col items-center justify-center"
              >
                <motion.div
                  layoutId={`avatar-${activeMember.name}`}
                  className="w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center text-white text-4xl md:text-6xl font-bold shadow-[0_0_40px_rgba(0,0,0,0.2)] border-[6px] border-[var(--color-surface)] relative"
                  style={{ backgroundColor: `hsl(${activeMember.hue}, 55%, 50%)` }}
                >
                  {/* Subtle inner glow matching hue */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-40 mix-blend-screen pointer-events-none" 
                    style={{ backgroundColor: `hsl(${activeMember.hue}, 65%, 60%)` }} 
                  />
                  <span className="relative z-10">{activeMember.initials}</span>
                </motion.div>
                
                {/* Floating details popup map below active member */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="absolute top-full mt-6 bg-[var(--color-surface)] px-8 py-5 rounded-2xl border border-[var(--color-border)] shadow-2xl whitespace-nowrap text-center z-40"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">{activeMember.name}</h3>
                  <p className="text-[var(--color-primary)] font-semibold mt-1.5">{activeMember.role}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Other Members Orbiting on Perimeter */}
          {otherMembers.map((member, i) => {
            const angle = (i * (360 / otherMembers.length)) * (Math.PI / 180)
            const radiusPercent = 50 // sits on the orbit edge
            
            return (
              <div 
                key={member.name}
                className="absolute w-16 h-16 md:w-20 md:h-20 z-20 -ml-8 -mt-8 md:-ml-10 md:-mt-10"
                style={{
                  left: `${50 + Math.cos(angle) * radiusPercent}%`,
                  top: `${50 + Math.sin(angle) * radiusPercent}%`,
                }}
              >
                <div className="relative w-full h-full group cursor-pointer">
                  {/* The interactive smaller avatar orb */}
                  <motion.div
                    layoutId={`avatar-${member.name}`}
                    onClick={() => setActiveId(member.name)}
                    className="w-full h-full rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold border-4 border-[var(--color-surface)] shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-transform duration-300"
                    style={{ backgroundColor: `hsl(${member.hue}, 55%, 50%)` }}
                  >
                    {member.initials}
                  </motion.div>
                  
                  {/* Tooltip on hover mapping to name */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1.5 rounded-lg shadow-xl z-50">
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">{member.name}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
