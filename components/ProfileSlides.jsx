import { View, Text, Dimensions, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { LineChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

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
  const minValue = Math.floor(Math.min(...values)); // Round down
  const maxValue = Math.ceil(Math.max(...values) + 1);  // Add a buffer to max value for better spacing

  return (
    <View style={{ alignItems: "center", justifyContent: "center", width }} className='border border-red-500'>
      <View className="flex-row items-center justify-center w-full mb-2">
        <Image source={icon} style={{ width: 25, height: 25, marginRight: 10 }} />
        <Text style={{ fontSize: 14, fontWeight: "bold", color: 'white' }}>{title}</Text>
      </View>

      <LineChart
        data={{
          labels: data.map((item) => item.date), // Extract labels dynamically
          datasets: [{ data: values }],
        }}
        width={width * 0.9}
        height={220}
        yAxisSuffix=" kg"
        fromZero={false} 
        yAxisInterval={0.5} 
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForBackgroundLines: {
            stroke: "transparent",
          },
          gridBackgroundColor: "transparent",
        }}
        bezier
        style={{
          borderRadius: 10,
          // alignSelf: "center",
        }}
        yAxisMin={minValue} // Dynamically adjust y-axis minimum
        yAxisMax={maxValue} // Apply the adjusted max value
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
          margin: 2,
          borderRadius: 4,
          backgroundColor: index === currentIndex ? "#D69006" : "#CDCDE0",
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
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        {dataSets.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
};

export default ProfileSlides;
