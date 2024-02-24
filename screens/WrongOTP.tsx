import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "../components/Buttonprimary";
import ErrorContainer from "../components/ErrorContainer";
import { Color } from "../GlobalStyles";

const WrongOTP = () => {
  return (
    <View style={styles.wrongOtp}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
      <Image
        style={[styles.forgotPasswordIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/forgotpassword.png")}
      />
      <ButtonPrimary
        buttonText={`Verify & Proceed`}
        buttonPrimaryPosition="absolute"
        buttonPrimaryMarginLeft={-125}
        buttonPrimaryTop={702}
        buttonPrimaryLeft="50%"
        buttonPrimaryBackgroundColor="#ef5e42"
        buttonPrimaryWidth={250}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        createAccountColor="#fff"
      />
      <ErrorContainer />
      <Image
        style={styles.arrowLeftIcon}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  maskGroupIcon: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    width: 328,
    height: 760,
  },
  forgotPasswordIcon: {
    marginLeft: -60,
    top: 117,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  arrowLeftIcon: {
    top: 43,
    left: 27,
    width: 24,
    height: 24,
    position: "absolute",
  },
  wrongOtp: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default WrongOTP;
