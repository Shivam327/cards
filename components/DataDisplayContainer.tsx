import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

export type DataDisplayContainerType = {
  uniqueIdentifierText?: ImageSourcePropType;
  customerInfoText?: string;
  specificIdentifierText?: ImageSourcePropType;

  /** Style props */
  propMarginTop?: number | string;
  propLeft?: number | string;
  propMarginLeft?: number | string;
  propWidth?: number | string;
  propMarginLeft1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DataDisplayContainer = ({
  uniqueIdentifierText,
  customerInfoText,
  specificIdentifierText,
  propMarginTop,
  propLeft,
  propMarginLeft,
  propWidth,
  propMarginLeft1,
}: DataDisplayContainerType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propLeft, propMarginLeft]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <View style={[styles.frameWrapper, frameViewStyle]}>
      <View style={[styles.frameParent, styles.parentFlexBox, frameView1Style]}>
        <View
          style={[styles.groupParent, styles.parentFlexBox, frameView2Style]}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={uniqueIdentifierText}
          />
          <Text style={styles.text}>{customerInfoText}</Text>
        </View>
        <View style={[styles.frameContainer, frameView3Style]}>
          <View style={styles.editFillWrapper}>
            <Image
              style={styles.editFillIcon}
              contentFit="cover"
              source={specificIdentifierText}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
    textAlign: "left",
    width: 220,
    marginLeft: 8,
  },
  groupParent: {
    width: 213,
  },
  editFillIcon: {
    width: 20,
    height: 20,
  },
  editFillWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: 16,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 270,
    justifyContent: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 280,
    height: 45,
  },
});

export default DataDisplayContainer;
