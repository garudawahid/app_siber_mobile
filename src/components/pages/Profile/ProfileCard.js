import { View, Text, Card } from "@ant-design/react-native";
import { Image } from "react-native";
import avatarMalePic from "../../../assets/images/avatar_male.png";

const ProfileCard = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", padding: 15 }}>
      <Card style={{ flex: 2, borderRadius: 20 }}>
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

      <View style={{ flex: 4, marginTop: 15 }}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
