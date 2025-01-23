import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuIcon from "../../assets/icons/menu.svg";
import FooterOfResult from "../components/FooterOfResult";

export default function ResultScreen() {
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
								minHeight: 100,
								maxHeight: 100,
								color: "#1A1A1A",
								fontSize: 20,
							}}
						/>
					</View>
					<View className="mx-3 mt-10">
						<Text style={{ fontSize: 18, color: "#1A1A1A" }}>
							Yes. There have been 3 new complaints today.
						</Text>
					</View>
					<View className="mx-3 mt-10">
						<TouchableOpacity>
							<View className="flex-row">
								<View
									className="w-5 h-5 rounded-full mt-2 mr-2"
									style={{ backgroundColor: "#FF0000" }}
								></View>
								<View>
									<Text
										style={{
											fontSize: 20,
											color: "#FF0000",
										}}
									>
										Insight
									</Text>
									<View
										style={{
											height: 1,
											backgroundColor: "#FF0000",
											width: "100%", // Ensures the border spans the width of the text
										}}
									/>
								</View>
							</View>
						</TouchableOpacity>
					</View>
					<View className="mt-10">
						<Text
							style={{
								fontSize: 18,
								color: "#1A1A1A",
							}}
						>
							117 new customer complaints have been made in the
							last 49 days. That is an increase of 32%. 87% of
							these complaints relate to reception staff.
						</Text>
					</View>
				</View>
			</ScrollView>
			<View>
				<FooterOfResult />
			</View>
		</SafeAreaView>
	);
}
