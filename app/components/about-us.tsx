import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'

export const AboutUs = () => {
	let a = 'arst'

	return (
		<section className='text-gray-600 body-font'>
			<div className='container flex flex-wrap px-5 pt-24 mx-auto items-center justify-center'>
				<div className='md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10'>
					<h1 className='text-2xl font-light mb-2 text-gray-900 tracking-widest uppercase'>
						Quem nos somos?{' '}
					</h1>
					<p className='leading-relaxed text-base'>
						Somos uma empresa inovadora, nascida de estudantes universitários,
						com a missão de resolver problemas reais através de soluções
						personalizadas em projetos eletrônicos e mecânicos. Com uma equipe
						altamente qualificada e comprometida, oferecemos as melhores
						soluções aos nossos clientes. Junte-se a nós nesta jornada de
						inovação e transformação.
					</p>
					<a className='text-orange-500 inline-flex items-center mt-4 uppercase tracking-wide'>
						Inove com a gente
						<HiArrowRight className='ml-2' />
					</a>
				</div>
				<div className='md:flex-1' />
				<img src='https://dummyimage.com/300x300' />
			</div>
		</section>
	)
}
