import { SkiaCanvasSnowForest } from "@/features/skia_snow_forest/skia_loader";
import { useLayoutStore } from "@/store/layout";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function SendPage() {
	const setIsTabBarVisible = useLayoutStore((state) => state.setIsTabBarVisible);
	const setIsFullScreen = useLayoutStore((state) => state.setIsFullScreen);
	const [isActive, setIsActive] = useState(false);
	useFocusEffect(
		useCallback(() => {
			setIsTabBarVisible(false);
			setIsFullScreen(true);
			setIsActive(true);
			return () => {
				setIsTabBarVisible(true);
				setIsFullScreen(false);
				setIsActive(false);
			};
		}, [setIsTabBarVisible, setIsFullScreen])
	);
	if (!isActive) return null
	return <SkiaCanvasSnowForest />;
}

