import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonPrimary from "../components/Buttonprimary";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DesignYourCard = () => {
  return (
    <View style={styles.designYourCard}>
      <View style={[styles.designYourCardChild, styles.designCardLayout]} />
      <View style={[styles.designYourCardItem, styles.designCardLayout]} />
      <View style={[styles.menuParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
        <Text style={[styles.designYourDigital, styles.yourSpaceBlock]}>
          Design your digital card
        </Text>
      </View>
      <View style={[styles.designYourCardInner, styles.frameGroupFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-160.png")}
        />
      </View>
      <View style={[styles.yourNameHereParent, styles.parentFlexBox]}>
        <Text style={[styles.yourNameHere, styles.yourTypo]}>
          Your Name Here
        </Text>
        <Text style={styles.yourDesignationHere}>Your designation here</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1625.png")}
      />
      <View style={[styles.ellipseParent, styles.groupIconPosition]}>
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
      <View style={styles.frameParent}>
        <View style={styles.groupBorder}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-1627.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            Enter your mobile number
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-1629.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            Enter your email id
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-16291.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            enter your website
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-1628.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            Enter your address
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-16281.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            Enter your products/services
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <Image
            style={[styles.path6251, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/path-625-1.png")}
          />
          <Text style={[styles.enterYourMobile, styles.enterTypo]}>
            Enter social media links
          </Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
        <View
          style={[
            styles.enterCompanyNameWrapper,
            styles.uploadLogoParentFlexBox,
          ]}
        >
          <Text style={[styles.enterCompanyName, styles.enterTypo]}>
            Enter company name
          </Text>
        </View>
        <View style={[styles.uploadLogoParent, styles.uploadLogoParentFlexBox]}>
          <Text style={[styles.uploadLogo, styles.enterTypo]}>Upload logo</Text>
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
      <Image
        style={styles.designYourCardChild1}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.cameraFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/camera-fill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  designCardLayout: {
    width: 328,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  yourSpaceBlock: {
    marginLeft: 12,
    color: Color.fontSecondaryColor,
  },
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  yourTypo: {
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
  },
  groupIconPosition: {
    left: 304,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  enterTypo: {
    textAlign: "left",
    fontFamily: FontFamily.typeParagraph,
  },
  groupBorder: {
    padding: Padding.p_3xs,
    width: 280,
    borderBottomWidth: 1,
    borderRadius: Border.br_5xs,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  uploadLogoParentFlexBox: {
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
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
  },
  designYourCardInner: {
    top: 161,
    left: 130,
  },
  yourNameHere: {
    color: Color.fontTextField,
  },
  yourDesignationHere: {
    marginTop: 8,
    fontFamily: FontFamily.typeParagraph,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    color: Color.fontTextField,
    textAlign: "center",
  },
  yourNameHereParent: {
    marginLeft: -78.5,
    top: 273,
    left: "50%",
  },
  groupIcon: {
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
  ellipseParent: {
    top: 137,
  },
  enterYourMobile: {
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    marginLeft: 12,
    color: Color.fontSecondaryColor,
  },
  groupContainer: {
    marginTop: 4,
  },
  path6251: {
    overflow: "hidden",
  },
  frameParent: {
    top: 341,
    left: 40,
    position: "absolute",
  },
  enterCompanyName: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    textAlign: "left",
    color: Color.fontTextField,
  },
  enterCompanyNameWrapper: {
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderColor: Color.backgroundColorDisable,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.fontWhite,
  },
  uploadLogo: {
    color: Color.fontWhite,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    textAlign: "left",
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
  frameGroup: {
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
  designYourCardChild1: {
    height: "10.14%",
    width: "25.56%",
    top: "20.63%",
    right: "37.22%",
    bottom: "69.24%",
    left: "37.22%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cameraFillIcon: {
    marginTop: -201,
    marginLeft: 34,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  designYourCard: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default DesignYourCard;
