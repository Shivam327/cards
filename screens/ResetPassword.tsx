import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import PasswordResetContainer from "../components/PasswordResetContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={styles.resetPassword}>
      <Image
        style={[styles.maskGroupIcon, styles.buttonParentPosition]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <View style={[styles.passwordVerification, styles.buttonParentPosition]}>
        <View style={styles.passwordVerification1}>
          <Image
            style={[styles.passwordVerificationChild, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-691.png")}
          />
          <View style={styles.groupParent}>
            <View
              style={[styles.groupContainer, styles.groupContainerPosition]}
            >
              <Image
                style={[styles.groupChild, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/group-2102.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/group-2103.png")}
              />
            </View>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-2105.png")}
            />
          </View>
        </View>
      </View>
      <PasswordResetContainer
        passwordActionText={`Reset
Password?`}
      />
      <View style={[styles.buttonParent, styles.buttonParentPosition]}>
        <ButtonPrimary
          buttonText="Submit"
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
        <Text style={styles.signIn}>Sign In</Text>
      </View>
      <Image
        style={styles.arrowLeftIcon}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentPosition: {
    left: "50%",
    position: "absolute",
  },
  groupInnerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupContainerPosition: {
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupLayout: {
    width: "16.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    width: 328,
    height: 760,
  },
  passwordVerificationChild: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
  groupChild: {
    right: "83.36%",
    left: "0%",
  },
  groupItem: {
    left: "83.36%",
    right: "0%",
  },
  groupContainer: {
    height: "34.05%",
    bottom: "65.95%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  groupInner: {
    height: "44.16%",
    width: "76.64%",
    top: "55.84%",
    right: "11.36%",
    left: "12%",
  },
  groupParent: {
    height: "42.83%",
    width: "52.08%",
    top: "32.33%",
    right: "23.92%",
    bottom: "24.83%",
    left: "24%",
    position: "absolute",
  },
  passwordVerification1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  passwordVerification: {
    marginLeft: -60,
    top: 117,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  signIn: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontLogoColor,
    textAlign: "left",
    marginTop: 16,
  },
  buttonParent: {
    marginLeft: -125,
    top: 702,
    alignItems: "center",
  },
  arrowLeftIcon: {
    top: 43,
    left: 27,
    width: 24,
    height: 24,
    position: "absolute",
  },
  resetPassword: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ResetPassword;
