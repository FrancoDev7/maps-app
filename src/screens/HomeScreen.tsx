import { BtnMyLocation, MapView, MyLogo, SearchBar } from "../components";

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <MyLogo />
      <SearchBar />
    </div>
  );
};
