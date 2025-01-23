import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP } from "react-native-responsive-screen";
export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();
	return (
		<SafeAreaView
			className="flex-1 justify-center"
			style={{ backgroundColor: theme.screenColor }}
		>
			<View
				className="items-center mb-10"
				style={{ position: "absolute", top: 80, left: 110 }}
			>
				{/* background image */}
				<TouchableOpacity>
					<Image
						source={require("../../assets/images/proxia.png")}
						style={{
							width: widthPercentageToDP(45),
							height: widthPercentageToDP(16),
						}}
					/>
				</TouchableOpacity>
			</View>

			<View className="items-center w-full">
				<View className="w-3/4">
					{/* Name Input */}
					<TextInput
						className="border-2 border-gray-300 rounded-lg p-2 mb-4 text-gray-800 text-lg"
						placeholder="Username"
						value={username}
						onChangeText={setUsername}
					/>
					{/* Password Input */}
					<TextInput
						className="border-2 border-gray-300 rounded-lg p-2 mb-4 text-gray-800 text-lg"
						placeholder="Password"
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
					{/* Login Button */}
					<View className="flex-1 justify-center items-center">
						<TouchableOpacity
							className="rounded-lg p-3 w-40"
							style={{ backgroundColor: theme.loginbutton }}
							onPress={() => navigation.navigate("Home")}
						>
							<Text className="text-center text-white font-semibold text-lg">
								Log in
							</Text>
						</TouchableOpacity>
					</View>
					{/* Forgot Password */}
					<TouchableOpacity className="mt-4">
						<Text style={{ color: theme.loginbutton }}>
							Forgot Password?
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="mt-4">
						<Text style={{ color: theme.loginbutton }}>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
