import React, { useEffect, useState } from "react";
import { usePlayerStore } from "../store/playerStore";
import { useQueueStore } from "../store/queueStore";
import { Ionicons } from "@expo/vector-icons";
import SuggestedHome from "../components/SuggestedHome";

import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import SongCard from "../components/SongCard";
import { SaavnSong, searchSongs } from "../api/saavn";

export default function HomeScreen({ navigation }: any) {
  const [query, setQuery] = useState("arijit");
  const [songs, setSongs] = useState<SaavnSong[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const playSong = usePlayerStore((s) => s.playSong);
  const setQueue = useQueueStore((s) => s.setQueue);
  const tabs = ["Suggested", "Songs", "Artists", "Albums"] as const;
  type TabType = (typeof tabs)[number];

  const sortOptions = [
    "Ascending",
    "Descending",
    "Artist",
    "Album",
    "Year",
    "Date Added",
    "Date Modified",
    "Composer",
  ] as const;

  type SortType = (typeof sortOptions)[number];

  const [activeTab, setActiveTab] = useState<TabType>("Suggested");
  const [sortType, setSortType] = useState<SortType>("Ascending");
  const [showSort, setShowSort] = useState(false);

  async function loadSongs(isLoadMore = false) {
    try {
      if (loading || loadingMore) return;

      if (isLoadMore) setLoadingMore(true);
      else setLoading(true);

      const res = await searchSongs(query, isLoadMore ? page + 1 : 1);

      if (isLoadMore) {
        setSongs((prev) => {
          const merged = [...prev, ...res.results];
          return Array.from(new Map(merged.map((s) => [s.id, s])).values());
        });

        setPage((p) => p + 1);
      } else {
        const unique = Array.from(
          new Map(res.results.map((s) => [s.id, s])).values()
        );
        setSongs(unique);

        setPage(1);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    loadSongs(false);
  }, []);
  const sortedSongs = React.useMemo(() => {
    const copy = [...songs];

    if (sortType === "Ascending") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "Descending") {
      copy.sort((a, b) => b.name.localeCompare(a.name));
    }

    return copy;
  }, [songs, sortType]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "800" }}>Music</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Queue")}
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Ionicons name="list" size={22} color="#111" />
        </TouchableOpacity>
      </View>
      {/* ✅ Top Tabs */}
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", gap: 22, paddingHorizontal: 16 }}>
          {tabs.map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setActiveTab(t)}
              style={{ paddingBottom: 10 }}
            >
              <Text
                style={{
                  fontWeight: activeTab === t ? "900" : "600",
                  color: activeTab === t ? "orange" : "#999",
                }}
              >
                {t}
              </Text>
              {activeTab === t && (
                <View
                  style={{
                    height: 3,
                    backgroundColor: "orange",
                    marginTop: 6,
                    borderRadius: 10,
                    width: 26,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {activeTab === "Suggested" ? (
        <SuggestedHome
          songs={sortedSongs}
          onPressSong={async (song) => {
            const index = sortedSongs.findIndex((s) => s.id === song.id);
            await setQueue(sortedSongs, index);
            await playSong(song);
            navigation.navigate("Player");
          }}
        />
      ) : (
        <>
          {/* Search Box */}
          <View
            style={{
              margin: 16,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search songs..."
              style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingHorizontal: 14,
                paddingVertical: 12,
                borderRadius: 12,
              }}
            />

            <TouchableOpacity
              onPress={() => loadSongs(false)}
              style={{
                backgroundColor: "orange",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>Search</Text>
            </TouchableOpacity>
          </View>
          {/* ✅ Songs count + Sort */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 16,
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "800", color: "#111" }}>
              {songs.length} songs
            </Text>

            <TouchableOpacity
              onPress={() => setShowSort((p) => !p)}
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Text style={{ color: "orange", fontWeight: "900" }}>
                {sortType}
              </Text>
              <Ionicons name="swap-vertical" size={18} color="orange" />
            </TouchableOpacity>
          </View>
          {/* ✅ Sort Dropdown */}
          {showSort && (
            <View
              style={{
                position: "absolute",
                top: 175,
                right: 16,
                width: 200,
                backgroundColor: "white",
                borderRadius: 14,
                padding: 10,
                elevation: 6,
                zIndex: 999,
              }}
            >
              {sortOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  onPress={() => {
                    setSortType(opt);
                    setShowSort(false);
                  }}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "700", color: "#111" }}>
                    {opt}
                  </Text>

                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 9,
                      borderWidth: 2,
                      borderColor: "orange",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {sortType === opt && (
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "orange",
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* List */}
          {loading ? (
            <ActivityIndicator size="large" style={{ marginTop: 30 }} />
          ) : (
            <FlatList
              contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
              data={sortedSongs}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item }) => (
                <SongCard
                  song={item}
                  onPress={async () => {
                    const index = songs.findIndex((s) => s.id === item.id);

                    await setQueue(songs, index);
                    await playSong(item);

                    navigation.navigate("Player");
                  }}
                />
              )}
              onEndReached={() => loadSongs(true)}
              onEndReachedThreshold={0.7}
              ListFooterComponent={
                loadingMore ? (
                  <ActivityIndicator style={{ marginVertical: 15 }} />
                ) : null
              }
            />
          )}
        </>
      )}
    </View>
  );
}
