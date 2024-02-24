import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "../components/Buttonprimary";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignIn1 = () => {
  return (
    <View style={styles.signIn}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.welcomeBack}>{`Welcome
Back`}</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.email}>Email</Text>
            </View>
            <View style={[styles.passwordWrapper, styles.wrapperLayout]}>
              <Text style={styles.email}>Password</Text>
            </View>
          </View>
          <Text
            style={[styles.forgotPasswordClickContainer, styles.containerTypo]}
          >
            <Text style={styles.forgotPassword}>{`forgot password? `}</Text>
            <Text style={styles.clickHere}>Click here</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.buttonParent, styles.iconPosition]}>
        <ButtonPrimary
          buttonText="Sign in"
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
        <Text style={[styles.dontHaveAnContainer, styles.containerTypo]}>
          <Text style={styles.forgotPassword}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.clickHere}>Sign Up</Text>
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
  wrapperLayout: {
    height: 45,
    width: 260,
    borderBottomWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  containerTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
  },
  maskGroupIcon: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    width: 328,
    height: 760,
  },
  welcomeBack: {
    fontSize: FontSize.typeHeading1_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    textAlign: "left",
    color: Color.fontSecondaryColor,
  },
  email: {
    top: 12,
    left: 12,
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    color: Color.fontTextField,
    width: 265,
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
    position: "absolute",
  },
  passwordWrapper: {
    marginTop: 12,
  },
  frameContainer: {
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.fontSecondaryColor,
  },
  clickHere: {
    color: Color.fontLogoColor,
  },
  forgotPasswordClickContainer: {
    marginTop: 32,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    top: 399,
    left: 50,
    position: "absolute",
  },
  text: {
    color: Color.fontMainColor,
  },
  dontHaveAnContainer: {
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
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignIn1;
