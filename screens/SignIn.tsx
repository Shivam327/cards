import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "../components/Buttonprimary";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignIn = ({}) => {
  const onSignInPress = () => {};

  return (
    <View style={styles.signIn}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.createAccountWrapper}>
          <Text style={styles.createAccount}>{`Create
Account`}</Text>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.frameGroup}>
            <View style={styles.wrapperLayout}>
              <Text style={[styles.fullName, styles.fullNameTypo]}>
                Full name
              </Text>
            </View>
            <View
              style={[styles.enterMobileNumberWrapper, styles.wrapperLayout]}
            >
              <Text style={[styles.fullName, styles.fullNameTypo]}>
                Enter mobile number
              </Text>
            </View>
            <View
              style={[styles.enterMobileNumberWrapper, styles.wrapperLayout]}
            >
              <Text style={[styles.fullName, styles.fullNameTypo]}>
                Enter email ID
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttonParent, styles.iconPosition]}>
        <ButtonPrimary
          // onPress={onSignInPress}
          buttonText="Create Account"
          buttonPrimaryPosition="unset"
          buttonPrimaryMarginLeft="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft="unset"
          buttonPrimaryBackgroundColor="#ef5e42"
          buttonPrimaryWidth={250}
          buttonPrimaryBorderStyle="unset"
          buttonPrimaryBorderColor="unset"
          createAccountColor="#fff"
        />
        <Text style={[styles.alreadyHaveAnContainer, styles.fullNameTypo]}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.signIn1}>Sign In</Text>
        </Text>
      </View>
      <Image
        style={[styles.createamtImg1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/createamtimg-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  fullNameTypo: {
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
  },
  wrapperLayout: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 260,
  },
  maskGroupIcon: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    width: 328,
    height: 760,
    backgroundColor: "red",
  },
  createAccount: {
    fontSize: FontSize.typeHeading1_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    textAlign: "left",
    color: Color.fontSecondaryColor,
    width: 260,
  },
  createAccountWrapper: {
    width: 260,
  },
  fullName: {
    top: 12,
    left: 12,
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    color: Color.fontTextField,
    width: 265,
    position: "absolute",
  },
  enterMobileNumberWrapper: {
    marginTop: 12,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    top: 399,
    left: 50,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.fontSecondaryColor,
  },
  text: {
    color: Color.fontMainColor,
  },
  signIn1: {
    color: Color.fontLogoColor,
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    marginTop: 16,
  },
  buttonParent: {
    marginLeft: -125,
    top: 702,
    alignItems: "center",
  },
  createamtImg1Icon: {
    marginLeft: -84,
    top: 96,
    width: 168,
    height: 197,
    overflow: "hidden",
  },
  signIn: {
    backgroundColor: Color.fontWhite,
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default SignIn;
