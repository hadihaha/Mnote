import { StyleSheet, View } from "react-native";
const tabs = [
  { title: "Notes", id: 1 },
  { title: "Stories", id: 2 },
  { title: "Journals", id: 3 },
];
function notetab() {
  return (
    <View name="tabContainer" style={styles.tabContainer}>
      {tabs.map((item) => (
        <View key={item.id} style={styles.tab} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  notetabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "30",
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    height: "30",
    width: "50",
  },
});
export default notetab;
