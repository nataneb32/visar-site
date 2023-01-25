import {GradientText} from './gradiant-text'
import {HiArrowRight} from 'react-icons/hi'

export const Hero = () => {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='https://dummyimage.com/720x600'
					/>
				</div>
				<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-thin uppercase text-gray-900'>
						Projetos
						<GradientText className=''>mecanicos e eletronicos</GradientText>
					</h1>
					<p className='mb-8 leading-relaxed'>
						Nós oferecemos soluções personalizadas de desenvolvimento de produtos eletrônicos para atender às suas necessidades específicas. Com nossa equipe altamente qualificada e processos ágeis, garantimos entregas rápidas e eficientes, tornando o seu projeto uma realidade.
					</p>
					<div className='flex justify-center'>
						<button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-md flex items-center uppercase tracking-wide'>
							Converse com um especialista
							<HiArrowRight className="ml-2"/>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
