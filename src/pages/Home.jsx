import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
function Home() {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle button */}
        <ThemeToggle />
        {/* background effect */}
        <StarBackground />
        {/* navbar */}
        <Navbar />
        {/* main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
        {/* footer */}
    </div>
}

export default Home