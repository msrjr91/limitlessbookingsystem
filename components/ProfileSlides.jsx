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
    <View style={{ alignItems: "center", justifyContent: "center", width, padding: 5 }} className=''>
      <View className='flex-row items-center justify-center w-full mb-2'>
        <Image source={icon} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      </View>
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const renderDot = (index) => {
    return (
      <View
        key={index}
        style={{
          width: 8,
          height: 8,
          margin: 3,
          borderRadius: 4,
          backgroundColor: index === currentIndex ? "blue" : "gray",
        }}
      />
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={dataSets}
        keyExtractor={(item) => item.title}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ChartSlide title={item.title} icon={item.icon} data={item.data} />}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {dataSets.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
};

export default ProfileSlides;
