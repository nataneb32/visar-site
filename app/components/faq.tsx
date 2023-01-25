import {HiQuestionMarkCircle} from 'react-icons/hi'
/*
O que a sua empresa faz?
Nós oferecemos soluções personalizadas para projetos eletrônicos e mecânicos, desde o desenvolvimento de produtos até a fabricação e entrega final.
Qual é o processo de trabalho da sua empresa?
Primeiramente, realizamos uma reunião para entender as necessidades do cliente e elaborar um orçamento. Em seguida, desenvolvemos um protótipo e realizamos testes para garantir a qualidade e confiabilidade do produto. Por fim, fabricamos e entregamos o produto final.
Qual é o prazo de entrega para um projeto?
O prazo de entrega varia de acordo com a complexidade do projeto, mas sempre buscamos entregar o mais rápido possível sem comprometer a qualidade do trabalho.
Como vocês garantem a qualidade dos projetos?
Nós realizamos testes rigorosos e inspeções antes da entrega final para garantir a qualidade e confiabilidade do produto.
Sua empresa atende a quais setores?
Atuamos em diversos setores, como automação industrial, automotivo, sistemas de segurança, entre outros.
Qual é a garantia oferecida pela sua empresa?
Oferecemos garantia de qualidade e confiabilidade para todos os nossos projetos. Caso haja algum problema, trabalharemos para resolvê-lo o mais rápido possível.
Como posso entrar em contato com a sua empresa?
Você pode entrar em contato conosco através do nosso formulário de contato no site, e-mail ou por telefone. Também estamos disponíveis nas redes sociais e podemos ser contatados através delas.

A sua empresa faz projetos internacionais?
Sim, estamos abertos para projetos internacionais e temos experiência trabalhando com clientes de diferentes países.
Qual é o seu diferencial em relação a outras empresas?
Nós oferecemos soluções personalizadas para cada projeto, levando em consideração as necessidades únicas de cada cliente. Além disso, temos uma equipe altamente qualificada e comprometida, garantindo a excelência na execução de cada projeto.
Como posso saber mais sobre os projetos anteriores da sua empresa?
Você pode ver alguns de nossos projetos anteriores na nossa seção de portfólio no site, e também estamos disponíveis para mostrar outros projetos e fornecer referências de clientes anteriores.


*/

const faqData = [
	{
		question: 'O que a sua empresa faz?',
		answer:
			'Nós oferecemos soluções personalizadas para projetos eletrônicos e mecânicos, desde o desenvolvimento de produtos até a fabricação e entrega final.',
	},
	{
		question: 'Qual é o processo de trabalho da sua empresa?',
		answer:
			'Primeiramente, realizamos uma reunião para entender as necessidades do cliente e elaborar um orçamento. Em seguida, desenvolvemos um protótipo e realizamos testes para garantir a qualidade e confiabilidade do produto. Por fim, fabricamos e entregamos o produto final.',
	},
	{
		question: 'Qual é o prazo de entrega para um projeto?',
		answer:
			'O prazo de entrega varia de acordo com a complexidade do projeto, mas sempre buscamos entregar o mais rápido possível sem comprometer a qualidade do trabalho.',
	},
	{
		question: 'Como vocês garantem a qualidade dos projetos?',
		answer:
			'Nós realizamos testes rigorosos e inspeções antes da entrega final para garantir a qualidade e confiabilidade do produto.',
	},
	{
		question: 'Sua empresa atende a quais setores?',
		answer:
			'Atuamos em diversos setores, como automação industrial, automotivo, sistemas de segurança, entre outros.',
	},
	{
		question: 'Qual é a garantia oferecida pela sua empresa?',
		answer:
			'Oferecemos garantia de qualidade e confiabilidade para todos os nossos projetos. Caso haja algum problema, trabalharemos para resolvê-lo o mais rápido possível.',
	},
	{
		question: 'Como posso entrar em contato com a sua empresa?',
		answer:
			'Você pode entrar em contato conosco através do nosso formulário de contato no site, e-mail ou por telefone. Também estamos disponíveis nas redes sociais e podemos ser contatados através delas.',
	},
	{
		question: 'A sua empresa faz projetos internacionais?',
		answer:
			'Sim, estamos abertos para projetos internacionais e temos experiência trabalhando com clientes de diferentes países.',
	},
]

export const Faq = () => (
	<section className='text-gray-600 pt-52 body-font'>
		<div className='container px-5 mx-auto'>
			<div className='text-start mb-24'>
				<h1 className='text-2xl font-light uppercase tracking-widest title-font text-gray-900 mb-4 border-b-2 border-orange-500 pb-2 inline'>
					Perguntas frequentes
				</h1>
			</div>
		</div>
		<div className='container grid grid-cols-1 md:grid-cols-2 px-5 mx-auto gap-12'>
			{faqData.map((faq, index) => (
				<FaqItem key={index} question={faq.question} answer={faq.answer} />
			))}
		</div>
	</section>
)

export const FaqItem: React.FC<{question: string; answer: string}> = ({
	question,
	answer,
}) => (
	<div className='flex flex-col'>
		<h2 className='text-lg mb-4 flex flex-row items-center text-gray-600'>
			<HiQuestionMarkCircle />
			<span className='ml-2'>
				{question}
			</span>
		</h2>
		<p className='leading-relaxed text-sm'>{answer}</p>
	</div>
)
