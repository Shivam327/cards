import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonPrimary from "../components/Buttonprimary";
import SocialMediaContainer from "../components/SocialMediaContainer";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EnterProductsServices1 = () => {
  return (
    <View style={styles.enterProductsservices}>
      <View style={styles.enterProductsservicesChild} />
      <View style={styles.arrowLeftParent}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
        <Text style={styles.enterSocialMedia}>Enter social media links</Text>
      </View>
      <ButtonPrimary
        buttonText="Save"
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
      <View style={styles.frameParent}>
        <View style={styles.icon1ParentBorder}>
          <Image
            style={styles.facebookIcon1}
            contentFit="cover"
            source={require("../assets/facebookicon-1.png")}
          />
          <View style={styles.frameChild} />
        </View>
        <SocialMediaContainer
          socialMediaIconId={require("../assets/facebookicon-1.png")}
          platformIconName="Instagram/"
        />
      </View>
      <View style={styles.frameParent}>
        <SocialMediaContainer
          socialMediaIconId={require("../assets/facebookicon-1.png")}
          platformIconName="Facebook/"
          propMarginTop="unset"
        />
        <View style={[styles.instagramIcon1Parent, styles.icon1ParentBorder]}>
          <Image
            style={styles.facebookIcon1}
            contentFit="cover"
            source={require("../assets/instagramicon-1.png")}
          />
          <View style={styles.frameChild} />
        </View>
        <SocialMediaContainer
          socialMediaIconId={require("../assets/twittericon-1.png")}
          platformIconName="Twitter/"
          propMarginTop={12}
        />
        <SocialMediaContainer
          socialMediaIconId={require("../assets/linkedinicon-1.png")}
          platformIconName="LinkedIn/"
          propMarginTop={12}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1ParentBorder: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    width: 296,
    borderBottomWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  enterProductsservicesChild: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    width: 328,
    height: 760,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  enterSocialMedia: {
    fontSize: FontSize.typeHeading4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    color: Color.fontSecondaryColor,
    textAlign: "center",
    marginLeft: 12,
  },
  arrowLeftParent: {
    top: 43,
    left: 27,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  facebookIcon1: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameChild: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 108,
    left: 32,
    position: "absolute",
  },
  instagramIcon1Parent: {
    marginTop: 12,
  },
  enterProductsservices: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EnterProductsServices1;
