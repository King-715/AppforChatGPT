import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginPage from "../screens/LoginScreen";
import RecentScreen from "../screens/RecentScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen name="Result" component={ResultScreen} />

				<Stack.Screen name="Recent" component={RecentScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
