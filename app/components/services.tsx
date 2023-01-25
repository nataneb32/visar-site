import {HiArrowRight} from 'react-icons/hi'
/*
Equipe altamente qualificada: A equipe de sua empresa é composta por engenheiros e técnicos altamente qualificados e experientes, garantindo a excelência na execução de cada projeto.

Atendimento ao cliente: Sua empresa se dedica a prestar um atendimento excepcional aos clientes, garantindo uma comunicação clara e eficiente durante todo o processo de projeto.

Flexibilidade: Sua empresa oferece flexibilidade para se adaptar às necessidades e prazos de cada projeto, garantindo a satisfação dos clientes.

Seguimentos atendidos: Sua empresa atende a diversos seguimentos, como automação industrial, automotivo, sistemas de segurança, entre outros, mostrando a capacidade de adaptação e versatilidade.

Garantia de qualidade: Sua empresa se compromete a garantir a qualidade e confiabilidade de seus projetos, através de processos rigorosos de teste e inspeção antes da entrega final.




*/
export const Services = () => (
	<section className='text-gray-600 body-font'>
		<div className='container px-5 pt-24 mx-auto'>
			<div className='text-start mb-10'>
				<h1 className='text-2xl font-light uppercase tracking-widest text-gray-900 mb-4 border-b-2 border-orange-500 inline py-2'>
				Como podemos ajudá-lo
				</h1>
			</div>
			<div className='flex flex-row gap-8'>
				<ServiceItem
					title='Projetos personalizados'
					description='Sua empresa se destaca por oferecer soluções personalizadas para cada projeto, levando em consideração as necessidades únicas de cada cliente.'
				/>

				<ServiceItem
					title='Equipe altamente qualificada'
					description='A equipe de sua empresa é composta por engenheiros e técnicos altamente qualificados e experientes, garantindo a excelência na execução de cada projeto.'
				/>
			</div>
			<div className='flex flex-row gap-8'>
				<ServiceItem
					title='Atendimento ao cliente'
					description='Sua empresa se dedica a prestar um atendimento excepcional aos clientes, garantindo uma comunicação clara e eficiente durante todo o processo de projeto.'
				/>

				<ServiceItem
					title='Flexibilidade'
					description='Sua empresa oferece flexibilidade para se adaptar às necessidades e prazos de cada projeto, garantindo a satisfação dos clientes.'
				/>
			</div>
			<div className='flex flex-row gap-8'>
				<ServiceItem
					title='Seguimentos atendidos'
					description='Sua empresa atende a diversos seguimentos, como automação industrial, automotivo, sistemas de segurança, entre outros, mostrando a capacidade de adaptação e versatilidade.'
				/>

				<ServiceItem
					title='Garantia de qualidade'
					description='Sua empresa se compromete a garantir a qualidade e confiabilidade de seus projetos, através de processos rigorosos de teste e inspeção antes da entrega final.'
				/>
			</div>
		</div>
	</section>
)

const ServiceItem: React.FC<{title: string; description: string}> = ({
	title,
	description,
}) => (
	<div className='flex flex-col items-start py-10 flex-1'>
		<h1 className='text-xl text-gray-900 mb-4 flex flex-row items-center font-thin uppercase'>
			{title}
		</h1>
		{description}
		<a className='text-orange-500 text-md inline-flex items-center mt-4 cursor-pointer hover:font-bold ease-in duration-300'>
			Saiba mais <HiArrowRight className='ml-2' />
		</a>
	</div>
)
