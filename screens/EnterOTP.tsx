import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonPrimary from "../components/Buttonprimary";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const EnterOTP = () => {
  return (
    <View style={styles.enterOtp}>
      <View style={[styles.enterOtpChild, styles.enterOtpChildPosition]} />
      <Image
        style={[styles.maskGroupIcon, styles.enterOtpChildPosition]}
        contentFit="cover"
        source={require("../assets/mask-group3.png")}
      />
      <ButtonPrimary
        buttonText={`Verify & Proceed`}
        buttonPrimaryPosition="absolute"
        buttonPrimaryMarginLeft="unset"
        buttonPrimaryTop={742}
        buttonPrimaryLeft={55}
        buttonPrimaryBackgroundColor="#d9d9d9"
        buttonPrimaryWidth={250}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        createAccountColor="#fff"
      />
      <Image
        style={styles.enterOtpItem}
        contentFit="cover"
        source={require("../assets/group-16221.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.enterOtp1, styles.textTypo]}>{`Enter
OTP`}</Text>
          <Text style={styles.enter4Digit}>
            Enter 4 digit verification code sent to your registered email ID
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.wrapperBorder}>
              <Text style={[styles.text, styles.textTypo]}>2</Text>
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
          <Text style={[styles.dontReceiveTheContainer, styles.containerTypo]}>
            <Text
              style={styles.dontReceiveThe}
            >{`Don't receive the OTP? `}</Text>
            <Text style={styles.resendOtp}>Resend OTP</Text>
          </Text>
        </View>
      </View>
      <Image
        style={styles.arrowLeftIcon}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
      <View style={styles.image3Parent}>
        <Image
          style={styles.image3Icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Text style={[styles.iAgreeToContainer, styles.containerTypo]}>
          <Text
            style={styles.dontReceiveThe}
          >{`I agree to the SendBusinessCard `}</Text>
          <Text style={styles.resendOtp}>{`Terms & Conditions`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterOtpChildPosition: {
    height: 760,
    width: 328,
    top: "50%",
    left: "50%",
    position: "absolute",
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
    borderWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  containerTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    fontFamily: FontFamily.typeParagraph,
  },
  enterOtpChild: {
    marginTop: -380,
    marginLeft: -164,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
  },
  maskGroupIcon: {
    marginTop: -381,
    marginLeft: -162,
  },
  enterOtpItem: {
    top: 120,
    left: 106,
    width: 148,
    height: 150,
    position: "absolute",
  },
  enterOtp1: {
    width: 196,
    textAlign: "left",
    color: Color.fontSecondaryColor,
  },
  enter4Digit: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    width: 248,
    marginTop: 16,
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
    color: Color.fontSecondaryColor,
  },
  text: {
    color: Color.colorBlack,
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
    marginTop: 21,
    textAlign: "center",
  },
  frameGroup: {
    marginTop: 32,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -134,
    top: 399,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 43,
    left: 27,
    width: 24,
    height: 24,
    position: "absolute",
  },
  image3Icon: {
    width: 16,
    height: 16,
  },
  iAgreeToContainer: {
    width: 181,
    marginLeft: 12,
    textAlign: "left",
  },
  image3Parent: {
    top: 686,
    left: 46,
    flexDirection: "row",
    position: "absolute",
  },
  enterOtp: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default EnterOTP;
