import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "../components/Buttonprimary";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PasswordUpdated = () => {
  return (
    <View style={styles.passwordUpdated}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <Image
        style={[styles.passwordVerificationDoneIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/passwordverificationdone.png")}
      />
      <View style={styles.passwordUpdatedInner}>
        <View>
          <Text style={styles.passwordUpdatedSuccessfully}>{`Password
Updated
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
  passwordVerificationDoneIcon: {
    marginLeft: -60,
    top: 117,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  passwordUpdatedSuccessfully: {
    fontSize: FontSize.typeHeading1_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontSecondaryColor,
    textAlign: "left",
  },
  passwordUpdatedInner: {
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
  passwordUpdated: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PasswordUpdated;
