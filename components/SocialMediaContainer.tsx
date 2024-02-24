import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

export type SocialMediaContainerType = {
  socialMediaIconId?: ImageSourcePropType;
  platformIconName?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SocialMediaContainer = ({
  socialMediaIconId,
  platformIconName,
  propMarginTop,
}: SocialMediaContainerType) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View
      style={[
        styles.facebookIcon1Parent,
        styles.facebookIcon1ParentFlexBox,
        frameView5Style,
      ]}
    >
      <Image
        style={styles.facebookIcon1}
        contentFit="cover"
        source={socialMediaIconId}
      />
      <View
        style={[
          styles.instagramusernameWrapper,
          styles.facebookIcon1ParentFlexBox,
        ]}
      >
        <Text style={styles.instagramusername}>
          <Text style={styles.instagram}>{platformIconName}</Text>
          <Text style={styles.username}>username</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  facebookIcon1ParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  facebookIcon1: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  instagram: {
    color: Color.fontSecondaryColor,
  },
  username: {
    color: Color.fontTextField,
  },
  instagramusername: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
  },
  instagramusernameWrapper: {
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  facebookIcon1Parent: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    width: 296,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 12,
  },
});

export default SocialMediaContainer;
