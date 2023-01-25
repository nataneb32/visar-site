import {Footer} from './components/footer';
import {Header} from './components/header';
import './global.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<head />
			<body className="">
				<div className='flex flex-col w-full h-screen'>
					<Header />
					{children}

					<Footer />
				</div>
			</body>
		</html>
	)
}
