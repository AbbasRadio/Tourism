import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/organisms/Home";
import Hula from "./src/organisms/Hula";
import Surfing from "./src/organisms/Surfing";
import Vulcano from "./src/organisms/Vulcano";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#008080',
      tabBarInactiveTintColor: '#001A1A',
      tabBarIconStyle: { display: "none" },
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        fontWeight: "400",
        fontSize: 15,
      },
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Surfing" component={Surfing} />
      <Tab.Screen name="Hula" component={Hula} />
      <Tab.Screen name="Vulcano" component={Vulcano} />
    </Tab.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;