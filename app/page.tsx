import {AboutUs} from './components/about-us'
import { Faq } from './components/faq'
import {Footer} from './components/footer'
import {Hero} from './components/hero'
import {Services} from './components/services'
import {Team} from './components/team'

const HomePage = () => {
	console.log('HomePage')
	return (
		<>
			<Hero />
			<AboutUs />
			<Services />
			<Faq />
		</>
	)
}

export default HomePage
