import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import LocationCardContainer1 from "../components/LocationCardContainer1";
import LocationCardContainer from "../components/LocationCardContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SaveDigitalCardPDFOrJpg = () => {
  return (
    <View style={styles.saveDigitalCardPdfOrJpg}>
      <View
        style={[styles.saveDigitalCardPdfOrJpgChild, styles.image37IconLayout]}
      />
      <Image
        style={[styles.saveDigitalCardPdfOrJpgItem, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.kirtanPatelParent}>
        <Text style={[styles.kirtanPatel, styles.kirtanPatelTypo]}>
          Kirtan Patel
        </Text>
        <Text style={[styles.executiveDirector, styles.textTypo]}>
          Executive Director
        </Text>
      </View>
      <Image
        style={[styles.image37Icon, styles.image37IconLayout]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <View style={[styles.image38Wrapper, styles.frameParentFlexBox]}>
        <Image
          style={styles.image38Icon}
          contentFit="cover"
          source={require("../assets/image-38.png")}
        />
      </View>
      <Image
        style={[
          styles.saveDigitalCardPdfOrJpgInner,
          styles.ellipseParentPosition,
        ]}
        contentFit="cover"
        source={require("../assets/group-1625.png")}
      />
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupBorder]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/group-1627.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>9999999999</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupBorder]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/group-16291.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>email@email.com</Text>
      </View>
      <View style={[styles.frameView, styles.groupBorder]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/group-1629.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>www.website.com</Text>
      </View>
      <LocationCardContainer1 />
      <LocationCardContainer />
      <Text style={[styles.abcPrivateLtd, styles.kirtanPatelTypo]}>
        ABC Private Ltd
      </Text>
      <View style={styles.sendbusinessParent}>
        <Image
          style={[styles.sendbusinessIcon, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/sendbusiness.png")}
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-1794.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <Image
          style={[styles.frameChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Image
          style={[styles.frameChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.frameChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-51.png")}
        />
      </View>
      <ButtonPrimary
        buttonText="Save"
        buttonPrimaryPosition="absolute"
        buttonPrimaryMarginLeft="unset"
        buttonPrimaryTop={748}
        buttonPrimaryLeft={55}
        buttonPrimaryBackgroundColor="#ef5e42"
        buttonPrimaryWidth={250}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        createAccountColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image37IconLayout: {
    width: 328,
    position: "absolute",
  },
  groupChildLayout: {
    height: 24,
    width: 24,
  },
  kirtanPatelTypo: {
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.typeParagraph,
    color: Color.fontSecondaryColor,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  ellipseParentPosition: {
    left: 304,
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupBorder: {
    padding: Padding.p_3xs,
    width: 280,
    borderBottomWidth: 1,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 40,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  saveDigitalCardPdfOrJpgChild: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    height: 712,
    left: "50%",
  },
  saveDigitalCardPdfOrJpgItem: {
    left: 27,
    top: 43,
    position: "absolute",
  },
  kirtanPatel: {
    color: Color.fontMainColor,
    textAlign: "center",
  },
  executiveDirector: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    marginTop: 8,
    color: Color.fontSecondaryColor,
    textAlign: "center",
  },
  kirtanPatelParent: {
    marginLeft: -57.5,
    top: 320,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  image37Icon: {
    top: 138,
    left: 16,
    height: 143,
  },
  image38Icon: {
    width: 108,
    height: 110,
  },
  image38Wrapper: {
    top: 208,
    left: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  saveDigitalCardPdfOrJpgInner: {
    top: 151,
  },
  groupChild: {
    top: 0,
    height: 24,
    width: 24,
  },
  image9Icon: {
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    position: "absolute",
  },
  ellipseParent: {
    top: 184,
  },
  text: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    textAlign: "left",
    marginLeft: 12,
    color: Color.fontSecondaryColor,
  },
  groupParent: {
    top: 388,
  },
  groupContainer: {
    top: 440,
  },
  frameView: {
    top: 492,
  },
  abcPrivateLtd: {
    marginLeft: -73,
    color: Color.fontSecondaryColor,
    textAlign: "center",
    top: 43,
    position: "absolute",
    left: "50%",
  },
  sendbusinessIcon: {
    top: 3,
    width: 113,
    height: 15,
  },
  groupItem: {
    height: "100%",
    width: "26.66%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "73.34%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sendbusinessParent: {
    top: 93,
    left: 100,
    width: 161,
    height: 20,
    position: "absolute",
  },
  groupIcon: {
    overflow: "hidden",
  },
  frameChild1: {
    marginLeft: 24,
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: -84,
    top: 688,
    left: "50%",
  },
  saveDigitalCardPdfOrJpg: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SaveDigitalCardPDFOrJpg;
