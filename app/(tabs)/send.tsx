import { SkiaCanvasSnowForest } from "@/features/skia_snow_forest/skia_loader";
import { useLayoutStore } from "@/store/layout";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function SendPage() {
	const setIsTabBarVisible = useLayoutStore((state) => state.setIsTabBarVisible);
	const setIsFullScreen = useLayoutStore((state) => state.setIsFullScreen);
	useFocusEffect(
		useCallback(() => {
			setIsTabBarVisible(false);
			setIsFullScreen(true);
			return () => {
				setIsTabBarVisible(true);
				setIsFullScreen(false);
			};
		}, [setIsTabBarVisible, setIsFullScreen])
	);
	return <SkiaCanvasSnowForest />;
}
