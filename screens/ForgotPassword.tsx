import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import PasswordResetContainer from "../components/PasswordResetContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <Image
        style={[styles.forgotPasswordIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/forgotpassword.png")}
      />
      <PasswordResetContainer
        passwordActionText={`Forgot
Password?`}
      />
      <ButtonPrimary
        buttonText="Submit"
        buttonPrimaryPosition="absolute"
        buttonPrimaryMarginLeft="unset"
        buttonPrimaryTop={702}
        buttonPrimaryLeft={55}
        buttonPrimaryBackgroundColor="#ef5e42"
        buttonPrimaryWidth={250}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        createAccountColor="#fff"
      />
      <Image
        style={[styles.arrowLeftIcon, styles.backPosition]}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
      <Text style={[styles.back, styles.backPosition]}>Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  backPosition: {
    top: 43,
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
    left: 27,
    width: 24,
    height: 24,
  },
  back: {
    left: 63,
    fontSize: FontSize.typeHeading4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontSecondaryColor,
    textAlign: "center",
    display: "none",
  },
  forgotPassword: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ForgotPassword;
