import { IconOutline } from "@ant-design/icons-react-native";
import { Card, WingBlank, Button } from "@ant-design/react-native";
import { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import avatarMalePic from "../../../assets/images/avatar_male.png";
import ModalSetting from "./setting";

const Profile = ({ navigation }) => {
  const [modalSettings, setmodalSettings] = useState(false);

  return (
    <View>
      <WingBlank>
        <Card style={{ borderRadius: 20 }}>
          <Card.Header
            title={
              <View>
                <Text style={{ fontWeight: 600 }}>Mohammad Nur Wahidin</Text>
                <Text style={{ fontSize: 12 }}>12220519</Text>
              </View>
            }
            thumbStyle={{ width: 30, height: 30 }}
            thumb={<Image source={avatarMalePic} />}
          />
          <Card.Body>
            <View style={{ marginLeft: 16 }}>
              <Text>NIP: 12220519</Text>
              <Text>Bagian: tukang tindur</Text>
              <Text>Departemen: tukang tindur</Text>
            </View>
          </Card.Body>
        </Card>
      </WingBlank>

      <WingBlank>
        <Card style={style.card}>
          <View style={{ marginTop: 30 }}>
            <WingBlank>
              {/* pengaturan */}
              <Button
                onPress={() => setmodalSettings(true)}
                style={style.button}
              >
                <View style={[style.buttonView]}>
                  <Text style={{ color: "#000000" }}>Pengaturan</Text>
                  <IconOutline name="right" size={20} />
                </View>
                <ModalSetting
                  modalSettings={modalSettings}
                  setmodalSettings={setmodalSettings}
                />
              </Button>

              {/* ganti password */}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Ganti Password</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/* ganti foto profile */}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Ganti Foto Profile</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/* Master referensi */}
              <Button
                onPressIn={() => {
                  navigation.navigate("MasterReferensi");
                }}
                style={style.button}
              >
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Master referensi</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/* Keluar */}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Keluar</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>
            </WingBlank>
          </View>
        </Card>
      </WingBlank>
    </View>
  );
};
export default Profile;

const style = StyleSheet.create({
  cardId: {
    flexDirection: "row",
  },
  card: {
    height: 456,
    marginTop: 10,
    borderRadius: 12,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
  button: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingLeft: 0,
    paddingRight: 0,
  },
});
