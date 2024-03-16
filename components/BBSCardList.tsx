import BBSCard from "./BBSCard";

const BBSCardList = () => {
  return (
    <div className="grid lg:grid-cols-3 p-4 gap-4">
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
};

export default BBSCardList;
