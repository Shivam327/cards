import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import SocialMediaLinksContainer from "../components/SocialMediaLinksContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const DesignYourCard1 = () => {
  return (
    <View style={styles.designYourCard}>
      <View style={[styles.designYourCardChild, styles.designCardLayout]} />
      <View style={[styles.designYourCardItem, styles.designCardLayout]} />
      <View style={[styles.menuParent, styles.parentFlexBox1]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
        <Text style={[styles.designYourDigital, styles.kirtanPatelTypo]}>
          Design your digital card
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.parentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-160.png")}
        />
        <Image
          style={[styles.cameraFillIcon, styles.cameraFillIconPosition]}
          contentFit="cover"
          source={require("../assets/camera-fill1.png")}
        />
      </View>
      <View style={[styles.kirtanPatelParent, styles.parentFlexBox1]}>
        <Text style={[styles.kirtanPatel, styles.kirtanPatelTypo]}>
          Kirtan Patel
        </Text>
        <Text style={styles.executiveDirector}>Executive Director</Text>
      </View>
      <Image
        style={[styles.designYourCardInner, styles.ellipseGroupPosition]}
        contentFit="cover"
        source={require("../assets/group-1625.png")}
      />
      <View style={[styles.ellipseGroup, styles.ellipseGroupPosition]}>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <SocialMediaLinksContainer />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View
          style={[
            styles.enterCompanyNameWrapper,
            styles.uploadLogoParentFlexBox,
          ]}
        >
          <Text style={[styles.enterCompanyName, styles.uploadLogoTypo]}>
            Enter company name
          </Text>
        </View>
        <View style={[styles.uploadLogoParent, styles.uploadLogoParentFlexBox]}>
          <Text style={[styles.uploadLogo, styles.uploadLogoTypo]}>
            Upload logo
          </Text>
          <Image
            style={[styles.arhiveAltExportIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arhive-alt-export.png")}
          />
        </View>
      </View>
      <View style={styles.buttonParent}>
        <ButtonPrimary
          buttonText="Create Card"
          buttonPrimaryPosition="unset"
          buttonPrimaryMarginLeft="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft="unset"
          buttonPrimaryBackgroundColor="#ef5e42"
          buttonPrimaryWidth={122}
          buttonPrimaryBorderStyle="unset"
          buttonPrimaryBorderColor="unset"
          createAccountColor="#fff"
        />
        <ButtonPrimary
          buttonText="Preview Card"
          buttonPrimaryPosition="unset"
          buttonPrimaryMarginLeft={15}
          buttonPrimaryTop="unset"
          buttonPrimaryLeft="unset"
          buttonPrimaryBackgroundColor="#fff"
          buttonPrimaryWidth={122}
          buttonPrimaryBorderStyle="solid"
          buttonPrimaryBorderColor="#d9d9d9"
          buttonPrimaryBorderWidth={1}
          createAccountColor="#737373"
        />
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.editFillWrapper}>
          <Image
            style={styles.editFillIcon}
            contentFit="cover"
            source={require("../assets/edit-fill1.png")}
          />
        </View>
      </View>
      <View style={[styles.designYourCardInner1, styles.frameViewPosition]}>
        <View style={styles.editFillWrapper}>
          <Image
            style={styles.editFillIcon}
            contentFit="cover"
            source={require("../assets/edit-fill1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  designCardLayout: {
    width: 328,
    position: "absolute",
  },
  parentFlexBox1: {
    alignItems: "center",
    position: "absolute",
  },
  kirtanPatelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  cameraFillIconPosition: {
    top: "50%",
    left: "50%",
  },
  ellipseGroupPosition: {
    left: 304,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  uploadLogoParentFlexBox: {
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
  },
  uploadLogoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.typeParagraph,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
  },
  frameViewPosition: {
    left: 254,
    flexDirection: "row",
    position: "absolute",
  },
  designYourCardChild: {
    marginTop: -380,
    marginLeft: -164,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    height: 760,
    left: "50%",
    top: "50%",
  },
  designYourCardItem: {
    top: 91,
    left: 16,
    backgroundColor: Color.fontTextField,
    height: 120,
  },
  designYourDigital: {
    marginLeft: 12,
    color: Color.fontSecondaryColor,
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
  },
  menuParent: {
    top: 43,
    left: 27,
    flexDirection: "row",
  },
  frameChild: {
    width: 100,
    height: 100,
    zIndex: 0,
  },
  cameraFillIcon: {
    marginTop: -18,
    marginLeft: -18,
    width: 36,
    height: 36,
    zIndex: 1,
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    top: 161,
    left: 130,
  },
  kirtanPatel: {
    color: Color.fontMainColor,
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
  },
  executiveDirector: {
    marginTop: 8,
    fontFamily: FontFamily.typeParagraph,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    textAlign: "center",
    color: Color.fontSecondaryColor,
  },
  kirtanPatelParent: {
    marginLeft: -57.5,
    top: 273,
    left: "50%",
  },
  designYourCardInner: {
    top: 104,
  },
  groupChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  image9Icon: {
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    position: "absolute",
  },
  ellipseGroup: {
    top: 137,
  },
  enterCompanyName: {
    color: Color.fontTextField,
  },
  enterCompanyNameWrapper: {
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.fontWhite,
  },
  uploadLogo: {
    color: Color.fontWhite,
  },
  arhiveAltExportIcon: {
    marginLeft: 8,
  },
  uploadLogoParent: {
    backgroundColor: Color.fontSecondaryColor,
    width: 123,
    paddingLeft: Padding.p_smi,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_9xs,
    marginLeft: 8,
  },
  frameParent: {
    marginLeft: -143,
    top: 653,
    left: "50%",
  },
  buttonParent: {
    marginLeft: -129,
    top: 721,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  editFillIcon: {
    width: 20,
    height: 20,
  },
  editFillWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameView: {
    top: 265,
  },
  designYourCardInner1: {
    top: 292,
  },
  designYourCard: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default DesignYourCard1;
