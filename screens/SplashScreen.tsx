import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splashScreenChild} />
      <View style={[styles.image2Parent, styles.image2Position]}>
        <Image
          style={[styles.image2Icon, styles.image2Position]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <Text style={[styles.saveEnvironment, styles.saveEnvironmentFlexBox]}>
          SAVE ENVIRONMENT
        </Text>
      </View>
      <View
        style={[styles.createSendYourCardParent, styles.saveEnvironmentFlexBox]}
      >
        <Text
          style={[styles.createSend, styles.createSendClr]}
        >{`CREATE & SEND YOUR CARD`}</Text>
        <Text
          style={[styles.digitalBusinessCard, styles.saveEnvironmentText]}
        >{`digital
business
card`}</Text>
      </View>
      <View style={styles.sendbusinessParent}>
        <Text style={[styles.sendbusiness, styles.createSendClr]}>
          sendbusiness
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-45.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image2Position: {
    height: 244,
    width: 292,
    marginLeft: -146,
    left: "50%",
    position: "absolute",
  },
  saveEnvironmentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  createSendClr: {
    color: Color.fontSecondaryColor,
    fontFamily: FontFamily.typeParagraph,
  },
  saveEnvironmentText: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  splashScreenChild: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    // backgroundColor: "red",
    width: 328,
    height: 790,
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    top: 0,
  },
  saveEnvironment: {
    top: 223,
    left: 12,
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    width: 277,
    height: 20,
    textAlign: "center",
    color: Color.fontSecondaryColor,
    fontFamily: FontFamily.typeParagraph,
    textTransform: "uppercase",
  },
  image2Parent: {
    top: 84,
  },
  createSend: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    textAlign: "center",
  },
  digitalBusinessCard: {
    fontSize: 50,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontLogoColor,
    marginTop: 20,
    textAlign: "center",
  },
  createSendYourCardParent: {
    marginLeft: -127,
    top: 417,
    left: "50%",
  },
  sendbusiness: {
    width: "73%",
    top: "0%",
    left: "0%",
    fontSize: 27,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    height: "93.87%",
    width: "27%",
    top: "3.23%",
    right: "0%",
    bottom: "2.9%",
    left: "73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sendbusinessParent: {
    height: "3.88%",
    width: "63.17%",
    top: "89.63%",
    right: "18.5%",
    bottom: "6.5%",
    left: "18.33%",
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreen;
