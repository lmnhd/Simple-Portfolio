import React from "react";
import {
  FaRobot,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaCloud,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaShip,
  FaDrumSteelpan,
  FaPhone,
  FaStar,
  FaLightbulb,
  FaCube,
  FaChartLine,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import NavbarManager from "@/components/portfolio/NavbarManager";
import DownloadButton from "@/components/portfolio/DownloadButton";
import portfolioData from './portfolio-data.json';
import { PortfolioData } from './types';

export default async function PortfolioPage() {
  const data: PortfolioData = portfolioData;
  const { personalInfo, coverLetter, experience, education, skills, projects } = data;



  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarManager />
      
      {/* Hero Section with Animated Background - 2026 Redesign */}
      <WavyBackground 
        containerClassName="min-h-screen w-full flex flex-col items-center justify-center"
        className="w-full max-w-4xl mx-auto px-4 pb-10 sm:pb-20"
        colors={["#FF1B6B", "#45CAFF", "#FFD700", "#9B00FF", "#00FF9E"]} // Vivid: Radiant Red, Sky Blue, Gold, Electric Violet, Neon Mint
        blur={6}
        speed="fast"
        waveOpacity={0.7}
        backgroundFill="#020010" // Almost black with a hint of purple
        waveWidth={60}
      >
        <div className="relative z-10 p-6 sm:p-10 md:p-14 rounded-[2.5rem] border border-white/10 bg-black/20 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(41,98,255,0.3)] flex flex-col items-center text-center overflow-hidden group/card transition-all hover:border-white/20">
          
          {/* Decorative gradients inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Glowing Avatar */}
          <div className="relative mb-8 group">
             <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-blue-600 to-pink-500 opacity-60 blur-md transition duration-500 group-hover:opacity-100 animate-pulse"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl">
              <Image
                src="/headshot.jpg"
                alt={personalInfo.name}
                width={176}
                height={176}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Typography */}
          <h1 className="mb-4 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
            {personalInfo.name}
          </h1>
          
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 mr-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60A5FA]"></span>
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-200 uppercase">
              {personalInfo.company}
            </p>
          </div>

          <p className="mb-10 text-xl sm:text-2xl font-light text-blue-50 max-w-2xl leading-relaxed drop-shadow-md">
            {personalInfo.title}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full md:w-auto mb-10">
            <a href={`mailto:${personalInfo.email}`} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-10 py-7 text-lg font-bold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(41,98,255,0.5)] border-0 ring-1 ring-white/20">
                Contact Me
              </Button>
            </a>
            <div className="w-full sm:w-auto transform transition-transform hover:scale-105">
              <DownloadButton />
            </div>
          </div>

          {/* Social Links - Glass styling */}
          <div className="flex items-center justify-center gap-5">
            {[ 
              { href: personalInfo.github, Icon: FaGithub },
              { href: personalInfo.linkedin, Icon: FaLinkedin },
              { href: `mailto:${personalInfo.email}`, Icon: FaEnvelope },
              { href: `tel:${personalInfo.phone}`, Icon: FaPhone }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative p-4 text-white/80 transition-all duration-300 rounded-2xl bg-white/5 hover:bg-white/10 hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_-5px_rgba(255,255,255,0.1)] border border-white/5 hover:border-white/20 group/icon"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>
                <social.Icon className="relative z-10 w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Location & Contact - Subtle footer inside card */}
          <div className="mt-8 pt-6 border-t border-white/5 w-full text-center">
            <p className="text-sm font-light tracking-widest text-blue-200/50 uppercase">
              {personalInfo.location} • {personalInfo.phone}
            </p>
          </div>
        </div>
      </WavyBackground>

      {/* Featured Projects Section - MOVED TO POSITION 2 */}
      <section className="relative px-4 py-20 bg-gradient-to-b from-white to-gray-50" id="projects">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600">
              <FaStar className="w-3 h-3" />
              FEATURED WORK
            </div>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
              Flagship Projects
            </h2>
            <p className="text-lg text-gray-600">
              Demonstrations of AI innovation and full-stack development
            </p>
          </div>

          {/* Projects Grid - Currently 1 flagship project, scales for multiple */}
          <div className="grid gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Decorative gradient border */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 -z-10" />
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-80 overflow-hidden bg-gray-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 1000px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-8 md:p-12">
                    {/* Header with Title and Audience */}
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      {project.audience && (
                        <p className="text-lg font-medium text-blue-600">
                          {project.audience}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mb-8 text-lg leading-relaxed text-gray-700">
                      {project.description}
                    </p>

                    {/* Highlights - Key Features Bullets */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <h4 className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                          <FaLightbulb className="w-4 h-4 text-blue-600" />
                          Key Features
                        </h4>
                        <ul className="grid gap-3 md:grid-cols-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Capabilities - Feature Cards with Icons */}
                    {project.capabilities && project.capabilities.length > 0 && (
                      <div className="mb-8">
                        <h4 className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
                          <FaCube className="w-4 h-4 text-indigo-600" />
                          Core Capabilities
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {project.capabilities.map((capability, idx) => (
                            <div
                              key={idx}
                              className="p-4 border border-gray-200 rounded-lg bg-white hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                            >
                              <h5 className="font-semibold text-foreground mb-2">
                                {capability.name}
                              </h5>
                              <p className="text-sm text-gray-600">
                                {capability.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact Metrics */}
                    {project.impact && project.impact.length > 0 && (
                      <div className="mb-8 p-6 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
                        <h4 className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                          <FaChartLine className="w-4 h-4 text-blue-600" />
                          Impact & Benefits
                        </h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                              <span className="text-blue-600 font-bold mt-0.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        View Live Project
                        <span className="text-lg">→</span>
                      </a>
                      <a
                        href={project.github || personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-foreground rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                      >
                        <FaGithub className="w-5 h-5" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            {coverLetter.title}
          </h2>
          <div className="space-y-4 leading-relaxed text-gray-700">
            {coverLetter.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="px-4 py-20 bg-white" id="experience">
        <div className="max-w-6xl mx-auto">
          {/* Experience */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <FaBriefcase className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="pb-8 border-b border-gray-100 last:border-0">
                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    {job.title}
                  </h3>
                  <p className="mb-1 text-base font-semibold text-primary">
                    {job.company}
                  </p>
                  <p className="mb-4 text-sm text-gray-500">
                    {job.period}
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-gray-700">
                    {job.description}
                  </p>
                  {job.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium border border-blue-200 rounded-lg bg-blue-50 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {job.projects && (
                    <ul className="space-y-2">
                      {job.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-primary mt-1.5">▪</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-8 border border-gray-200 rounded-lg bg-gray-50" id="education">
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Education
              </h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="mb-2 text-lg font-bold text-foreground">
                    {edu.school}
                  </h4>
                  <p className="mb-2 text-sm text-gray-500">
                    {edu.period}
                  </p>
                  <p className="text-base text-gray-700">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-20 border-b border-gray-100 bg-gray-50" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-foreground">
            Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Languages */}
            <div className="p-8 transition-colors bg-white border border-gray-200 rounded-lg hover:border-primary">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Languages
                </h3>
              </div>
              <ul className="space-y-2">
                {skills.languages.map((lang, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & Development */}
            <div className="p-8 transition-colors bg-white border border-gray-200 rounded-lg hover:border-primary">
              <div className="flex items-center gap-3 mb-6">
                <FaTools className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  AI & Development
                </h3>
              </div>
              <ul className="space-y-2">
                {skills.aiAndDevelopment.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms */}
            <div className="p-8 transition-colors bg-white border border-gray-200 rounded-lg hover:border-primary">
              <div className="flex items-center gap-3 mb-6">
                <FaCloud className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Platforms
                </h3>
              </div>
              <ul className="space-y-2">
                {skills.platforms.map((platform, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Ready to work together.
          </h2>
          <p className="mb-8 text-gray-700">
            Let's discuss how I can help with your next project.
          </p>
          <a href={`mailto:${personalInfo.email}`}>
            <Button className="px-8 py-3 font-semibold text-white rounded-lg bg-primary hover:bg-blue-700">
              Get in touch
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 transition-colors hover:text-primary"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
          <div className="space-y-2 text-sm text-center text-gray-600">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors hover:text-primary"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
