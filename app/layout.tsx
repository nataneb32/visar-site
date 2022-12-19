import { Header } from "./components/Header"
import "./global.css"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body>
				<div className="flex flex-col w-full h-screen">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
