import BottomBar from "../../globals/BottomBar";

const Report = ({ navigation, routeTitleActive, setRouteTitleActive }) => {
  return (
    <BottomBar
      navigation={navigation}
      routeTitleActive={routeTitleActive}
      setRouteTitleActive={setRouteTitleActive}
    />
  );
};

export default Report;
