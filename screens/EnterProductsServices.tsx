import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ServiceFormContainer from "../components/ServiceFormContainer";
import ButtonPrimary from "../components/Buttonprimary";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const EnterProductsServices = () => {
  return (
    <View style={styles.enterProductsServices}>
      <View style={styles.enterProductsServicesChild} />
      <View style={[styles.arrowLeftParent, styles.arrowLeftParentFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
        <Text style={styles.enterProductsservices1}>
          Enter products/services
        </Text>
      </View>
      <View style={styles.frameParent}>
        <ServiceFormContainer serviceDescription=" Website Design" />
        <ServiceFormContainer
          serviceDescription=" Social Media Marketing"
          editFillIconMarginTop={12}
        />
        <ServiceFormContainer
          serviceDescription=" Logo Design"
          editFillIconMarginTop={12}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-162.png")}
          />
          <Text style={styles.mobileAppDevel}> Mobile App Devel</Text>
          <View
            style={[styles.addRingFillWrapper, styles.arrowLeftParentFlexBox]}
          >
            <Image
              style={styles.addRingFillIcon}
              contentFit="cover"
              source={require("../assets/add-ring-fill.png")}
            />
          </View>
        </View>
      </View>
      <ButtonPrimary
        buttonText="Save"
        buttonPrimaryPosition="absolute"
        buttonPrimaryMarginLeft="unset"
        buttonPrimaryTop={702}
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
  arrowLeftParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  enterProductsServicesChild: {
    marginTop: -380,
    marginLeft: -164,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke,
    width: 328,
    height: 760,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  enterProductsservices1: {
    fontSize: FontSize.typeHeading4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.typeHeading1,
    textAlign: "center",
    marginLeft: 12,
    color: Color.fontSecondaryColor,
  },
  arrowLeftParent: {
    top: 43,
    alignItems: "center",
    left: 27,
  },
  frameChild: {
    top: 18,
    left: 10,
    width: 8,
    height: 8,
    position: "absolute",
  },
  mobileAppDevel: {
    top: 12,
    fontSize: FontSize.typeParagraph_size,
    lineHeight: 20,
    fontFamily: FontFamily.typeParagraph,
    textAlign: "left",
    width: 220,
    color: Color.fontSecondaryColor,
    left: 27,
    position: "absolute",
  },
  addRingFillIcon: {
    width: 20,
    height: 20,
  },
  addRingFillWrapper: {
    top: 0,
    left: 253,
    padding: Padding.p_3xs,
  },
  ellipseParent: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.backgroundColorDisable,
    borderBottomWidth: 1,
    height: 45,
    marginTop: 12,
    width: 296,
  },
  frameParent: {
    top: 106,
    left: 31,
    width: 296,
    position: "absolute",
  },
  enterProductsServices: {
    backgroundColor: Color.fontWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EnterProductsServices;
