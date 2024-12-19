import * as React from "react";
import Svg, { type SvgProps, Path, Circle } from "react-native-svg";

export const LoadingIcon = (props: SvgProps) => (
	<Svg
		className="animate-spin h-5 w-5 text-black dark:text-white"
		fill="none"
		viewBox="0 0 24 24"
		aria-label="Loading"
		role="img"
		{...props}
	>
		<Circle
			opacity={0.25}
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		/>
		<Path
			opacity={0.75}
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		/>
	</Svg>
);