const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import AccountCreatedSuccessfully from "./screens/AccountCreatedSuccessfully";
import DesignYourCard from "./screens/DesignYourCard";
import DesignYourCard1 from "./screens/DesignYourCard1";
import EnterOTP from "./screens/EnterOTP";
import EnterProductsServices from "./screens/EnterProductsServices";
import EnterProductsServices1 from "./screens/EnterProductsServices1";
import ForgotPassword from "./screens/ForgotPassword";
import PasswordUpdated from "./screens/PasswordUpdated";
import ResetPassword from "./screens/ResetPassword";
import SaveDigitalCardPDFOrJpg from "./screens/SaveDigitalCardPDFOrJpg";
import SelectDesign from "./screens/SelectDesign";
import ShareYourDigitalCardWithD from "./screens/ShareYourDigitalCardWithD";
import SignIn from "./screens/SignIn";
import SplashScreen from "./screens/SplashScreen";
import WrongOTP from "./screens/WrongOTP";
import YourCard from "./screens/YourCard";
import YourDigitalCardIsReadyTo from "./screens/YourDigitalCardIsReadyTo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [fontsLoaded, error] = useFonts({
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          {showSplash ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountCreatedSuccessfully"
                component={AccountCreatedSuccessfully}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EnterOTP"
                component={EnterOTP}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WrongOTP"
                component={WrongOTP}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="PasswordUpdated"
                component={PasswordUpdated}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectDesign"
                component={SelectDesign}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DesignYourCard"
                component={DesignYourCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DesignYourCard1"
                component={DesignYourCard1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EnterProductsServices"
                component={EnterProductsServices}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EnterProductsServices1"
                component={EnterProductsServices1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="YourDigitalCardIsReadyTo"
                component={YourDigitalCardIsReadyTo}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="ShareYourDigitalCardWithD"
                component={ShareYourDigitalCardWithD}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SaveDigitalCardPDFOrJpg"
                component={SaveDigitalCardPDFOrJpg}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="YourCard"
                component={YourCard}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
