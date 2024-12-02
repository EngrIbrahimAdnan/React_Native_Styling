import { View, Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "rgb(64, 180, 208)",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 75, // Half of width and height to make it circular
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            overflow: "hidden", // Ensures the image is clipped to the circular shape
          }}
        >
          <Image
            source={require("./assets/Ibrahim_avatar.jpeg")}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Ibrahim Adnan
        </Text>
        <Text>Kuwait</Text>

        <View
          style={{
            backgroundColor: "lightgray",
            width: 200,
            height: 2,
            margin: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              80K
            </Text>
            <Text style={{ fontSize: 10 }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>803K</Text>
            <Text style={{ fontSize: 10 }}>Likes</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>1.4K</Text>
            <Text style={{ fontSize: 10 }}>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
