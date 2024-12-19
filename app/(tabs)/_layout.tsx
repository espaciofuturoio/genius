import { BottomTabBar } from "@/components/containers/tab-bar/tab-bar";
import { DesktopHeader } from "@/components/layout/desktop-header";
import { Box } from "@/components/ui/box";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { useSizes } from "@/hooks/useSizes";
import { useLayoutStore } from "@/store/layout";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const TabsLayout = () => {
	const isFullScreen = useLayoutStore((state) => state.isFullScreen);
	const { isSmall } = useSizes();
	const { width } = useWindowDimensions();
	const isCompact = isSmall || isFullScreen;
	return (
		<Box className="flex-1 bg-background-app-white">
			{!isFullScreen && <DesktopHeader />}
			<View
				className={isCompact ? "" : "relative flex justify-center"}
				style={
					isCompact
						? styles.mobileContainer
						: [styles.desktopContainer, { width }]
				}
			>
				<Tabs tabBar={(props) => <BottomTabBar {...props} />}>
					<Tabs.Screen
						name="send"
						options={{ title: "Send", headerShown: false }}
					/>
					<Tabs.Screen
						name="receive"
						options={{ title: "Receive", headerShown: false }}
					/>
					<Tabs.Screen
						name="profile"
						options={{ title: "My Assets", headerShown: false }}
					/>
					<Tabs.Screen
						name="history"
						options={{ title: "History", headerShown: false }}
					/>
				</Tabs>
			</View>
		</Box>
	);
};

const styles = StyleSheet.create({
	mobileContainer: {
		flex: 1,
	},
	desktopContainer: {
		maxWidth: 1024,
		minWidth: 481,
		height: 932,
		overflow: "hidden",
		alignSelf: "center",
		marginTop: "auto",
		marginBottom: "auto",
	},
});

export default TabsLayout;
