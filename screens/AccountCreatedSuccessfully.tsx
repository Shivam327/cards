import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "../components/Buttonprimary";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AccountCreatedSuccessfully = () => {
  return (
    <View style={styles.accountCreatedSuccessfully}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={styles.accountCreatedSuccessfullyChild}
        contentFit="cover"
        source={require("../assets/group-1622.png")}
      />
      <View style={styles.accountCreatedSuccessfullyInner}>
        <View>
          <Text style={styles.accountCreatedSuccessfully1}>{`Account 
Created
Successfully`}</Text>
        </View>
      </View>
      <ButtonPrimary
        buttonText="Sign In"
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
      <Image
        style={styles.arrowLeftIcon}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIcon: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    left: "50%",
    width: 328,
    height: 760,
    position: "absolute",
  },
  accountCreatedSuccessfullyChild: {
    top: 117,
    left: 115,
    width: 131,
    height: 133,
    position: "absolute",
  },
  accountCreatedSuccessfully1: {
    fontSize: FontSize.typeHeading1_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontSecondaryColor,
    textAlign: "left",
  },
  accountCreatedSuccessfullyInner: {
    top: 454,
    left: 50,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 43,
    left: 27,
    width: 24,
    height: 24,
    position: "absolute",
  },
  accountCreatedSuccessfully: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AccountCreatedSuccessfully;
