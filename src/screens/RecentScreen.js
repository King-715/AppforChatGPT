import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../assets/icons/search.svg";
import FooterOfRecent from "../components/FooterOfRecent";
import RoundedTabs from "../components/RoundedTabs";
import MenuIcon from "../../assets/icons/menu.svg";
import { useNavigation } from "@react-navigation/native";

export default function RecentScreen() {
	navigation = useNavigation();
	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView
				showsVerticalScrollIndicator={true}
				className={"space-y-5 mt-3"}
			>
				<View className="mx-5 flex-row justify-end items-center">
					<TouchableOpacity>
						<MenuIcon />
					</TouchableOpacity>
				</View>

				<View className="mx-4">
					<View
						className="flex-row items-center pl-3 py-4"
						style={{
							borderRadius: 40,
							borderColor: "#f26218",
							borderWidth: 5,
						}}
					>
						<TextInput
							multiline={true}
							numberOfLines={5}
							placeholder="Any complaints today?"
							placeholderTextColor="#aaaaaa"
							className="flex-1 text-base pl-1 tracking-wider text-black"
							style={{
								textAlignVertical: "top",
								minHeight: 150,
								maxHeight: 150,
								color: "#1a1a1a",
								fontSize: 20,
							}}
						/>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate("Result")}
					>
						<View className="items-center mt-1">
							<SearchIcon width={50} height={50} />
						</View>
					</TouchableOpacity>
				</View>
				<View className="mx-3">
					<RoundedTabs />
				</View>
			</ScrollView>
			<View>
				<FooterOfRecent />
			</View>
		</SafeAreaView>
	);
}
