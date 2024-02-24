import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type ServiceFormContainerType = {
  serviceDescription?: string;

  /** Style props */
  editFillIconMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ServiceFormContainer = ({
  serviceDescription,
  editFillIconMarginTop,
}: ServiceFormContainerType) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", editFillIconMarginTop),
    };
  }, [editFillIconMarginTop]);

  return (
    <View style={[styles.ellipseParent, frameView4Style]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-162.png")}
      />
      <Text style={styles.websiteDesign}>{serviceDescription}</Text>
      <View style={[styles.dellFillWrapper, styles.fillWrapperPosition]}>
        <Image
          style={styles.dellFillIcon}
          contentFit="cover"
          source={require("../assets/dell-fill.png")}
        />
      </View>
      <View style={[styles.editFillWrapper, styles.fillWrapperPosition]}>
        <Image
          style={styles.dellFillIcon}
          contentFit="cover"
          source={require("../assets/edit-fill1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fillWrapperPosition: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 18,
    left: 10,
    width: 8,
    height: 8,
    position: "absolute",
  },
  websiteDesign: {
    top: 12,
    left: 27,
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
    textAlign: "left",
    width: 220,
    position: "absolute",
  },
  dellFillIcon: {
    width: 20,
    height: 20,
  },
  dellFillWrapper: {
    left: 253,
  },
  editFillWrapper: {
    left: 213,
  },
  ellipseParent: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 296,
    height: 45,
  },
});

export default ServiceFormContainer;
