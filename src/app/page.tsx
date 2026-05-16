import AboutMe from '@/components/AboutMe'
import ContactSection from '@/components/ContactSectionHome'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skillls'


export default function page() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects count={2} />
            <ContactSection />
        </>
    )
}
