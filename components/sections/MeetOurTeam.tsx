'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export type TeamMember = {
  name: string
  role: string
  subRole?: string
  initials: string
  hue: number
  image?: string
  linkedin?: string
}

interface MeetOurTeamProps {
  team: TeamMember[]
}

export default function MeetOurTeam({ team }: MeetOurTeamProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0f141f]">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="#3b82f6" opacity="0.5"/>
              <path d="M 50 50 L 150 150 M 50 50 L -50 150 M 50 50 L 150 -50 M -50 -50 L 50 50 M 150 -50 L 50 50" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
        <motion.p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
          LEADERSHIP
        </motion.p>
        <motion.h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
          Meet Our Team
        </motion.h2>
      </div>

      <div className="relative w-full h-[520px] md:h-[620px] flex justify-center items-center z-20 perspective-[1200px]">
        {team.map((member, i) => {
          const length = team.length
          let offset = i - activeIndex
          if (offset > Math.floor(length / 2)) {
            offset -= length
          } else if (offset < -Math.floor(length / 2)) {
            offset += length
          }

          const isActive = offset === 0

          // Calculate layout properties based on relative offset
          const zIndex = 10 - Math.abs(offset)
          const scale = isActive ? 1 : 1 - Math.abs(offset) * 0.12
          // Spacing gets tighter the further out they go
          const x = offset * (isMobile ? 140 : 260)

          // Outline colors to match mockup exactly
          let borderColor = 'border-[#3b82f6] shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)]'
          let bgColor = 'bg-[#21263B]' // Rich dark center
          
          if (offset === -1) {
            borderColor = 'border-[#8b5cf6]' // purple left
            bgColor = 'bg-[#272B3F]'
          } else if (offset === 1) {
            borderColor = 'border-[#14b8a6]' // teal right
            bgColor = 'bg-[#252C3D]'
          } else if (offset <= -2) {
            borderColor = 'border-[#5b21b6]' // darker purple far left
            bgColor = 'bg-[#1D2133]'
          } else if (offset >= 2) {
            borderColor = 'border-[#0f766e]' // darker teal far right
            bgColor = 'bg-[#1C2532]'
          }

          return (
            <motion.div
              key={member.name}
              className={`absolute top-1/2 left-1/2 -ml-[135px] -mt-[210px] md:-ml-[175px] md:-mt-[250px] w-[270px] h-[420px] md:w-[350px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] ${borderColor} ${bgColor} cursor-pointer flex flex-col items-center pt-5 md:pt-6 overflow-hidden`}
              onClick={() => handleCardClick(i)}
              initial={false}
              animate={{
                x: x,
                scale: scale,
                zIndex: zIndex,
                opacity: Math.abs(offset) > 2 ? 0 : 1, // Only show center + 2 on each side (max 5)
                filter: isActive ? 'brightness(1.1)' : `brightness(${0.85 - Math.abs(offset)*0.15})`
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 30,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x
                if (swipe < -50) {
                  let newIndex = activeIndex + 1;
                  if (newIndex >= length) newIndex = 0;
                  setActiveIndex(newIndex);
                } else if (swipe > 50) {
                  let newIndex = activeIndex - 1;
                  if (newIndex < 0) newIndex = length - 1;
                  setActiveIndex(newIndex);
                }
              }}
            >
              {/* Avatar */}
              <div className="relative z-10 mx-auto mb-6 md:mb-8 flex items-center justify-center">
                {/* Outer glow ring */}
                <div
                  className="absolute rounded-full blur-xl opacity-40"
                  style={{
                    width: '130%',
                    height: '130%',
                    background: `radial-gradient(circle, hsla(${member.hue}, 70%, 55%, 0.5), transparent 70%)`,
                  }}
                />
                {/* Avatar circle */}
                <div
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-[3px] md:border-[4px] shadow-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, hsl(${member.hue}, 65%, 45%), hsl(${(member.hue + 40) % 360}, 55%, 35%))`,
                    borderColor: `hsla(${member.hue}, 70%, 60%, 0.6)`,
                    boxShadow: `0 0 30px -5px hsla(${member.hue}, 70%, 50%, 0.4), inset 0 2px 8px rgba(255,255,255,0.15)`,
                  }}
                >
                  {member.image && member.image !== '/team/team-placeholder.png' ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-3xl md:text-4xl font-extrabold text-white/90 select-none relative z-10"
                      style={{ fontFamily: 'var(--font-clash), Georgia, serif', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                    >
                      {member.initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Text Area */}
              <div className="text-center px-4 flex-1 flex flex-col items-center justify-start z-10 w-full mb-2">
                <h3 className="text-[1.2rem] md:text-2xl font-bold text-white mb-1.5" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
                  {member.name}
                </h3>
                <p className={`text-[0.85rem] md:text-[0.95rem] font-medium leading-tight ${isActive ? 'text-[#e2e8f0]' : 'text-gray-400'}`}>
                  {member.role}
                </p>
                {member.subRole && (
                  <p className="text-[0.65rem] md:text-[0.75rem] text-gray-500 mt-1.5 max-w-[90%] leading-snug">
                    {member.subRole}
                  </p>
                )}
              </div>

              {/* LinkedIn Bottom */}
              <div className={`mt-auto mb-5 md:mb-7 transition-opacity ${isActive ? 'opacity-100 hover:scale-110' : 'opacity-40'} duration-300 z-10`}>
                 <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!isActive) e.preventDefault() }}>
                    <div className="bg-[#5B6276] p-[6px] md:p-[8px] rounded-lg shadow-md hover:bg-[#4E5466] transition-colors">
                       <Linkedin size={18} className="text-white md:w-5 md:h-5 stroke-[2.5px] fill-current" />
                    </div>
                 </a>
              </div>
              
              {/* Decorative inner gradient to give the card bottom depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-0" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
