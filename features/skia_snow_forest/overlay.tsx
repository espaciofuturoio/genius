import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";

export const DemoSkiaOverlay = () => {
    const goHome = () => {
        router.replace('/receive');
    }
    return (
        <SafeAreaView className="flex-1">
            <Box className="flex-1 items-start justify-start">
                <Button onPress={goHome}>
                    <ButtonText>Go Home</ButtonText>
                </Button>
            </Box>
        </SafeAreaView>
    )
}