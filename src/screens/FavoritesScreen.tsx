

import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useFavoritesStore } from "../store/favoritesStore";
import { getBestImage, SaavnSong } from "../api/saavn";

export default function FavoritesScreen({ navigation }: any) {
  const { favorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "800" }}>
          No Favorites Yet ❤️
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", marginBottom: 14 }}
          onPress={() => navigation.navigate("Player", { song: item })}
        >
          <Image
            source={{ uri: getBestImage(item) }}
            style={{ width: 56, height: 56, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text numberOfLines={1} style={{ fontWeight: "900" }}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={{ color: "#666", marginTop: 2 }}>
              {item.primaryArtists || "Unknown Artist"}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
