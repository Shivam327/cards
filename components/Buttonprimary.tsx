import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type ButtonPrimaryType = {
  buttonText?: string;

  /** Style props */
  buttonPrimaryPosition?: string;
  buttonPrimaryMarginLeft?: number | string;
  buttonPrimaryTop?: number | string;
  buttonPrimaryLeft?: number | string;
  buttonPrimaryBackgroundColor?: string;
  buttonPrimaryWidth?: number | string;
  buttonPrimaryBorderStyle?: string;
  buttonPrimaryBorderColor?: string;
  buttonPrimaryBorderWidth?: number;
  createAccountColor?: string;
  // onPress: any;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimary = ({
  buttonText,
  buttonPrimaryPosition: buttonPrimaryPosition,
  buttonPrimaryMarginLeft: buttonPrimaryMarginLeft,
  buttonPrimaryTop: buttonPrimaryTop,
  buttonPrimaryLeft: buttonPrimaryLeft,
  buttonPrimaryBackgroundColor: buttonPrimaryBackgroundColor,
  buttonPrimaryWidth: buttonPrimaryWidth,
  buttonPrimaryBorderStyle: buttonPrimaryBorderStyle,
  buttonPrimaryBorderColor: buttonPrimaryBorderColor,
  buttonPrimaryBorderWidth: buttonPrimaryBorderWidth,
  createAccountColor,
}: // onPress,
ButtonPrimaryType) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPrimaryPosition),
      ...getStyleValue("marginLeft", buttonPrimaryMarginLeft),
      ...getStyleValue("top", buttonPrimaryTop),
      ...getStyleValue("left", buttonPrimaryLeft),
      ...getStyleValue("backgroundColor", buttonPrimaryBackgroundColor),
      ...getStyleValue("width", buttonPrimaryWidth),
      ...getStyleValue("borderStyle", buttonPrimaryBorderStyle),
      ...getStyleValue("borderColor", buttonPrimaryBorderColor),
      ...getStyleValue("borderWidth", buttonPrimaryBorderWidth),
    };
  }, [
    buttonPrimaryPosition,
    buttonPrimaryMarginLeft,
    buttonPrimaryTop,
    buttonPrimaryLeft,
    buttonPrimaryBackgroundColor,
    buttonPrimaryWidth,
    buttonPrimaryBorderStyle,
    buttonPrimaryBorderColor,
    buttonPrimaryBorderWidth,
  ]);

  const createAccountStyle = useMemo(() => {
    return {
      ...getStyleValue("color", createAccountColor),
    };
  }, [createAccountColor]);

  return (
    <TouchableOpacity
      style={[styles.buttonPrimary, buttonPrimaryStyle]}
      // onPress={onPress}
    >
      <Text style={[styles.createAccount, createAccountStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createAccount: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontWhite,
    textAlign: "center",
  },
  buttonPrimary: {
    borderRadius: Border.br_33xl,
    backgroundColor: Color.fontLogoColor,
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_5xs,
  },
});

export default ButtonPrimary;
