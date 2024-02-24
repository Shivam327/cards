import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import LocationCardContainer1 from "../components/LocationCardContainer1";
import LocationCardContainer from "../components/LocationCardContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const ShareYourDigitalCardWithD = () => {
  return (
    <View style={styles.shareYourDigitalCardWithD}>
      <View style={styles.shareYourDigitalCardWithDChild} />
      <Image
        style={[styles.shareYourDigitalCardWithDItem, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.kirtanPatelParent}>
        <Text style={[styles.kirtanPatel, styles.kirtanPatelTypo]}>
          Kirtan Patel
        </Text>
        <Text style={[styles.executiveDirector, styles.abcPrivateLtdClr]}>
          Executive Director
        </Text>
      </View>
      <Image
        style={styles.image37Icon}
        contentFit="cover"
        source={require("../assets/image-371.png")}
      />
      <View style={[styles.image38Wrapper, styles.parentFlexBox]}>
        <Image
          style={styles.image38Icon}
          contentFit="cover"
          source={require("../assets/image-38.png")}
        />
      </View>
      <Image
        style={[
          styles.shareYourDigitalCardWithDInner,
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
        <Text style={[styles.text, styles.textLayout]}>9999999999</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupBorder]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/group-16291.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>email@email.com</Text>
      </View>
      <View style={[styles.frameView, styles.groupBorder]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/group-1629.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>www.website.com</Text>
      </View>
      <LocationCardContainer1 />
      <LocationCardContainer />
      <Text style={[styles.abcPrivateLtd, styles.abcPrivateLtdClr]}>
        ABC Private Ltd
      </Text>
      <View style={styles.sendbusinessParent}>
        <Image
          style={styles.sendbusinessIcon}
          contentFit="cover"
          source={require("../assets/sendbusiness.png")}
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-1794.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
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
      <View style={[styles.buttonParent, styles.parentFlexBox]}>
        <ButtonPrimary
          buttonText="Share"
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
          buttonText="Export"
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
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[
          styles.shareYourDigitalCardWithDChild1,
          styles.rectangleViewLayout,
        ]}
      />
      <Text style={[styles.shareYourDigital, styles.textLayout]}>
        Share Your Digital Card
      </Text>
      <Image
        style={styles.group17042}
        contentFit="cover"
        source={require("../assets/group-1704-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 24,
    width: 24,
  },
  kirtanPatelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
  },
  abcPrivateLtdClr: {
    color: Color.fontSecondaryColor,
    textAlign: "center",
  },
  parentFlexBox: {
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
    top: 0,
    left: 0,
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
  textLayout: {
    lineHeight: 20,
    color: Color.fontSecondaryColor,
  },
  rectangleViewLayout: {
    width: 360,
    position: "absolute",
  },
  shareYourDigitalCardWithDChild: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    width: 328,
    height: 712,
    left: "50%",
    position: "absolute",
  },
  shareYourDigitalCardWithDItem: {
    left: 27,
    top: 43,
    width: 24,
    position: "absolute",
  },
  kirtanPatel: {
    color: Color.fontMainColor,
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
    textAlign: "center",
  },
  executiveDirector: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    marginTop: 8,
    fontFamily: FontFamily.typeParagraph,
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
    width: 329,
    height: 143,
    position: "absolute",
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
  shareYourDigitalCardWithDInner: {
    top: 151,
  },
  groupChild: {
    left: 0,
    height: 24,
    width: 24,
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
    top: 184,
  },
  text: {
    fontSize: FontSize.typeParagraph_size,
    textAlign: "left",
    marginLeft: 12,
    fontFamily: FontFamily.typeParagraph,
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
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    color: Color.fontSecondaryColor,
    lineHeight: 24,
    fontSize: FontSize.typeHeading4_size,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  sendbusinessIcon: {
    top: 3,
    width: 113,
    height: 15,
    left: 0,
    position: "absolute",
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
  buttonParent: {
    marginLeft: -129,
    top: 748,
    left: "50%",
  },
  rectangleView: {
    backgroundColor: "rgba(0, 0, 0, 0.66)",
    left: 0,
    top: 0,
    height: 800,
  },
  shareYourDigitalCardWithDChild1: {
    marginLeft: -180,
    bottom: 0,
    height: 220,
    left: "50%",
    backgroundColor: Color.fontWhite,
  },
  shareYourDigital: {
    marginLeft: -93,
    top: 612,
    fontSize: FontSize.typeHeading5_size,
    textAlign: "center",
    fontFamily: FontFamily.typeHeading1,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  group17042: {
    marginLeft: -117,
    top: 662,
    width: 235,
    height: 87,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  shareYourDigitalCardWithD: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.fontWhite,
  },
});

export default ShareYourDigitalCardWithD;
