import { View, Text, Dimensions, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { LineChart } from "react-native-chart-kit";

const { width, height } = Dimensions.get("window");

const dataSets = [
  {
    title: "Body Weight (kg)",
    icon: icons.weight,
    data: [
      { date: "Jan", value: 70 },
      { date: "Feb", value: 71 },
      { date: "Mar", value: 70.5 },
      { date: "Apr", value: 72 },
      { date: "May", value: 73 },
    ],
  },
  {
    title: "Muscle Mass (%)",
    icon: icons.trendUp,
    data: [
      { date: "Jan", value: 45 },
      { date: "Feb", value: 46 },
      { date: "Mar", value: 47 },
      { date: "Apr", value: 46.5 },
      { date: "May", value: 47.2 },
    ],
  },
  {
    title: "Body Fat (%)",
    icon: icons.trendDown,
    data: [
      { date: "Jan", value: 18 },
      { date: "Feb", value: 17.5 },
      { date: "Mar", value: 17 },
      { date: "Apr", value: 16.8 },
      { date: "May", value: 16.5 },
    ],
  },
];

const ChartSlide = ({ title, icon, data }) => {
  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.value);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: width * 0.9, padding: 20 }}>
      <Image source={icon} style={{ width: 30, height: 30, marginBottom: 10 }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>{title}</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: values }],
        }}
        width={width * 0.8}
        height={220}
        yAxisSuffix=" kg"
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const ProfileSlides = () => {
  return (
    <FlatList
      data={dataSets}
      keyExtractor={(item) => item.title}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ChartSlide title={item.title} icon={item.icon} data={item.data} />}
    />
  );
};

export default ProfileSlides;
