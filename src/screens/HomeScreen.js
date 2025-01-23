import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Destinations from "../components/Destinations";
import FooterOfInsight from "../components/FooterOfInsight";

export default function HomeScreen() {
	return (
		<SafeAreaView className="bg-white flex-1">
			<View className="flex-1 mt-10">
				<Destinations />
			</View>
			<View className="absolute bottom-0 left-5 right-5">
				<FooterOfInsight />
			</View>
		</SafeAreaView>
	);
}
