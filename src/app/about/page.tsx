import Dev_info from '@/components/about/Dev_info'
import Education from '@/components/about/Education'
import Languages from '@/components/about/Languages'
export default function About() {
    return (
        <div className='mt-18'>
            <Dev_info />
            <Education />
            <Languages />
        </div>
    )
}