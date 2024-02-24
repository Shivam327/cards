import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ErrorContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View>
        <Text
          style={[styles.somethingWentWrong, styles.somethingWentWrongFlexBox]}
        >{`Something
went wrong`}</Text>
        <Text
          style={[styles.verificationCodeYou, styles.somethingWentWrongFlexBox]}
        >
          Verification code you entered is not matched. Please enter valid OTP
        </Text>
      </View>
      <View style={styles.frameWrapper}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.wrapperBorder}>
              <Text style={[styles.text, styles.textTypo]}>3</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>5</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>7</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>0</Text>
            </View>
          </View>
          <Text style={styles.dontReceiveTheContainer}>
            <Text
              style={styles.dontReceiveThe}
            >{`Don't receive the OTP? `}</Text>
            <Text style={styles.resendOtp}>Resend OTP</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  somethingWentWrongFlexBox: {
    textAlign: "left",
    color: Color.fontSecondaryColor,
  },
  textTypo: {
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.typeHeading1_size,
  },
  wrapperBorder: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_lgi,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  somethingWentWrong: {
    width: 196,
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.typeHeading1_size,
  },
  verificationCodeYou: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    width: 248,
    marginTop: 16,
    fontFamily: FontFamily.typeParagraph,
  },
  text: {
    color: Color.colorGray_100,
    textAlign: "center",
  },
  container: {
    marginLeft: 12,
  },
  frameContainer: {
    flexDirection: "row",
  },
  dontReceiveThe: {
    color: Color.fontSecondaryColor,
  },
  resendOtp: {
    color: Color.fontLogoColor,
  },
  dontReceiveTheContainer: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    marginTop: 20,
    textAlign: "center",
    fontFamily: FontFamily.typeParagraph,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 32,
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 399,
    left: 50,
  },
});

export default ErrorContainer;
