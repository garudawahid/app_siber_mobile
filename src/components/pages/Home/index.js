import BottomBar from "../../globals/BottomBar";

const Home = ({ navigation, routeTitleActive, setRouteTitleActive }) => {
  return (
    <BottomBar
      navigation={navigation}
      routeTitleActive={routeTitleActive}
      setRouteTitleActive={setRouteTitleActive}
    />
  );
};

export default Home;
