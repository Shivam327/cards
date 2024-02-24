import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonPrimary from "../components/Buttonprimary";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SelectDesign = () => {
  return (
    <View style={styles.selectDesign}>
      <View style={[styles.selectDesignChild, styles.maskGroupIconPosition]} />
      <Image
        style={styles.maskGroupIconPosition}
        contentFit="cover"
        source={require("../assets/mask-group6.png")}
      />
      <ButtonPrimary
        buttonText="Select card design"
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
      <Text style={styles.selectCardTheme}>Select Card Theme</Text>
      <Image
        style={styles.maskGroupIcon1}
        contentFit="cover"
        source={require("../assets/mask-group7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    height: 760,
    width: 328,
    top: "50%",
    marginLeft: -160,
    marginTop: -380,
    left: "50%",
    position: "absolute",
  },
  selectDesignChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
  },
  selectCardTheme: {
    top: 90,
    left: 90,
    fontSize: FontSize.typeHeading4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontSecondaryColor,
    textAlign: "center",
    position: "absolute",
  },
  maskGroupIcon1: {
    marginLeft: -118,
    top: 169,
    width: 235,
    height: 461,
    left: "50%",
    position: "absolute",
  },
  selectDesign: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SelectDesign;
