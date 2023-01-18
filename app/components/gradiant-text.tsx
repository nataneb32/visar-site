import classNames from 'classnames'

export const GradientText = ({
	children,
	className,
}: {
	className?: string
	children?: React.ReactNode
}) => (
	<h1
		className={classNames(
			`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-500 ${className}`,
		)}
	>
		{children}
	</h1>
)
