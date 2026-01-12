import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SaavnSong, getBestImage } from "../api/saavn";

type Props = {
  songs: SaavnSong[];
  onPressSong: (song: SaavnSong) => void;
};

function getUniqueArtists(songs: SaavnSong[]) {
  const map = new Map<string, { name: string; image: string }>();

  songs.forEach((s) => {
    const name = s.primaryArtists || "Unknown Artist";
    if (!map.has(name)) {
      map.set(name, { name, image: getBestImage(s) });
    }
  });

  return Array.from(map.values()).slice(0, 10);
}

export default function SuggestedHome({ songs, onPressSong }: Props) {
  const recentlyPlayed = songs.slice(0, 10);
  const artists = getUniqueArtists(songs);
  const mostPlayed = songs.slice(10, 20);

  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
      {/* Recently Played */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "900" }}>Recently Played</Text>
        <Text style={{ color: "orange", fontWeight: "800" }}>See All</Text>
      </View>

      <FlatList
        data={recentlyPlayed}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => `${item.id}-${idx}`}
        style={{ marginTop: 10 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressSong(item)}
            style={{ width: 120 }}
          >
            <Image
              source={{ uri: getBestImage(item) }}
              style={{ width: 120, height: 120, borderRadius: 18, backgroundColor: "#eee" }}
            />
            <Text style={{ marginTop: 6, fontWeight: "800" }} numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Artists */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "900" }}>Artists</Text>
        <Text style={{ color: "orange", fontWeight: "800" }}>See All</Text>
      </View>

      <FlatList
        data={artists}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        style={{ marginTop: 10 }}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", width: 90 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "#eee" }}
            />
            <Text style={{ marginTop: 6, fontWeight: "800" }} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        )}
      />

      {/* Most Played */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "900" }}>Most Played</Text>
        <Text style={{ color: "orange", fontWeight: "800" }}>See All</Text>
      </View>

      <FlatList
        data={mostPlayed}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => `${item.id}-${idx}`}
        style={{ marginTop: 10, marginBottom: 120 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressSong(item)}
            style={{ width: 120 }}
          >
            <Image
              source={{ uri: getBestImage(item) }}
              style={{ width: 120, height: 120, borderRadius: 18, backgroundColor: "#eee" }}
            />
            <Text style={{ marginTop: 6, fontWeight: "800" }} numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
