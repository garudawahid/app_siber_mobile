import { View, Text } from "@ant-design/react-native";
import { Card } from "@ant-design/react-native";

const Home = () => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#004A99",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Card style={{ borderRadius: 12, padding: 10 }}>
          <Text>Nama: MOhammad Nur Wahidin</Text>
          <Text>Id: MOhammad Nur Wahidin</Text>
        </Card>
      </View>
    </View>
  );
};

export default Home;
