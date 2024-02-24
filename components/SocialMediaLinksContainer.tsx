import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DataDisplayContainer from "./DataDisplayContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SocialMediaLinksContainer = () => {
  return (
    <View style={styles.frameParent}>
      <DataDisplayContainer
        uniqueIdentifierText={require("../assets/group-16271.png")}
        customerInfoText="9999999999"
        specificIdentifierText={require("../assets/edit-fill.png")}
      />
      <DataDisplayContainer
        uniqueIdentifierText={require("../assets/group-16292.png")}
        customerInfoText="email@email.com"
        specificIdentifierText={require("../assets/edit-fill.png")}
        propMarginTop={4}
        propLeft={10}
        propMarginLeft="unset"
        propWidth={213}
        propMarginLeft1={16}
      />
      <DataDisplayContainer
        uniqueIdentifierText={require("../assets/group-16282.png")}
        customerInfoText="www.website.com"
        specificIdentifierText={require("../assets/edit-fill.png")}
        propMarginTop={4}
        propLeft={10}
        propMarginLeft="unset"
        propWidth={213}
        propMarginLeft1={16}
      />
      <DataDisplayContainer
        uniqueIdentifierText={require("../assets/group-1628.png")}
        customerInfoText="Kartar Mension, Lamington"
        specificIdentifierText={require("../assets/edit-fill1.png")}
        propMarginTop={4}
        propLeft="50%"
        propMarginLeft={-130}
        propWidth={200}
        propMarginLeft1={28}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.path6251Layout}
          contentFit="cover"
          source={require("../assets/group-16281.png")}
        />
        <Text style={styles.enterYourProductsservices}>
          Enter your products/services
        </Text>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.path6251, styles.path6251Layout]}
          contentFit="cover"
          source={require("../assets/path-625-1.png")}
        />
        <Text style={styles.enterYourProductsservices}>
          Enter social media links
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  path6251Layout: {
    height: 24,
    width: 24,
  },
  enterYourProductsservices: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
    textAlign: "left",
    marginLeft: 12,
  },
  groupParent: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 280,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    marginTop: 4,
  },
  path6251: {
    overflow: "hidden",
  },
  frameParent: {
    position: "absolute",
    top: 341,
    left: 40,
  },
});

export default SocialMediaLinksContainer;
