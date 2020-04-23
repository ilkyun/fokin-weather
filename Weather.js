import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Clouds",
    subtitle: "Please stay at home if you don't want to meet Jason",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={99}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}ºC</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
