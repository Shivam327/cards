import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LocationCardContainer = () => {
  return (
    <TouchableOpacity
      style={[styles.yourDigitalCardIsReadyToInner, styles.frameParentFlexBox]}
    >
      <View style={styles.frameParentFlexBox}>
        <View style={styles.frameParentFlexBox}>
          <Image
            style={styles.frameChildLayout}
            contentFit="cover"
            source={require("../assets/group-16281.png")}
          />
          <Text style={styles.ourServicesProducts}>Our Services/Products</Text>
        </View>
        <Image
          style={[styles.arrowDropRightIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-drop-right.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChildLayout: {
    height: 24,
    width: 24,
  },
  ourServicesProducts: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
    textAlign: "left",
    marginLeft: 12,
  },
  arrowDropRightIcon: {
    marginLeft: 67,
  },
  yourDigitalCardIsReadyToInner: {
    position: "absolute",
    top: 605,
    left: 40,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 280,
    padding: Padding.p_3xs,
  },
});

export default LocationCardContainer;
