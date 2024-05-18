import { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Button, WingBlank, Carousel } from "@ant-design/react-native";
import splashScreen1 from "../../../assets/images/splashScreen1.png";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: "90%",
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
});

const SplashScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Carousel style={styles.wrapper}>
        <View style={{ ...styles.containerHorizontal }}>
          <Image source={splashScreen1} />

          <Text>KEGIATAN LINGKUNGAN HIDUP & KEBERSIHAN</Text>
        </View>

        <View style={{ ...styles.containerHorizontal }}>
          <Text>Carousel 2</Text>
        </View>
      </Carousel>

      <WingBlank style={{ marginTop: 20 }}>
        <Button
          type="primary"
          onPressIn={() => {
            setCount(count + 1);
          }}
        >
          MEMULAI AWAL
        </Button>
      </WingBlank>
    </View>
  );
};

export default SplashScreen;
