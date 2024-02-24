import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LocationCardContainer1 = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentFlexBox]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/group-16283.png")}
      />
      <View
        style={[
          styles.kartarMensionLamingtonRoadWrapper,
          styles.groupParentFlexBox,
        ]}
      >
        <Text style={styles.kartarMensionLamington}>
          Kartar Mension, Lamington Road, Mumbai, Maharashtra - 4000000
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  kartarMensionLamington: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
    textAlign: "left",
    width: 234,
    height: 41,
  },
  kartarMensionLamingtonRoadWrapper: {
    height: 62,
    marginLeft: 12,
  },
  groupParent: {
    position: "absolute",
    top: 544,
    left: 40,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 280,
    height: 54,
    padding: Padding.p_3xs,
  },
});

export default LocationCardContainer1;
