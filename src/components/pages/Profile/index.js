import BottomBar from "../../globals/BottomBar";

const Profile = ({ navigation, routeTitleActive, setRouteTitleActive }) => {
  return (
    <BottomBar
      navigation={navigation}
      routeTitleActive={routeTitleActive}
      setRouteTitleActive={setRouteTitleActive}
    />
  );
};

export default Profile;
