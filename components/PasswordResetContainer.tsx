import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type PasswordResetContainerType = {
  passwordActionText?: string;
};

const PasswordResetContainer = ({
  passwordActionText,
}: PasswordResetContainerType) => {
  return (
    <View style={styles.frameParent}>
      <View>
        <Text style={styles.forgotPassword}>{passwordActionText}</Text>
        <Text style={[styles.enterTheEmail, styles.emailTypo]}>
          Enter the email address associated with your account
        </Text>
      </View>
      <View style={styles.frameWrapper}>
        <View style={styles.emailWrapper}>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    fontFamily: FontFamily.typeParagraph,
    lineHeight: 20,
    fontSize: FontSize.typeParagraph_size,
    textAlign: "left",
  },
  forgotPassword: {
    fontSize: FontSize.typeHeading1_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    textAlign: "left",
    color: Color.fontSecondaryColor,
  },
  enterTheEmail: {
    width: 248,
    marginTop: 16,
    color: Color.fontSecondaryColor,
    lineHeight: 20,
    fontSize: FontSize.typeParagraph_size,
  },
  email: {
    top: 12,
    left: 12,
    color: Color.fontTextField,
    width: 265,
    position: "absolute",
  },
  emailWrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 260,
    height: 45,
  },
  frameWrapper: {
    alignItems: "center",
    marginTop: 32,
  },
  frameParent: {
    top: 399,
    left: 50,
    position: "absolute",
  },
});

export default PasswordResetContainer;
