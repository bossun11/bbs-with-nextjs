import { BBSData } from "@/app/types/types";
import BBSCard from "./BBSCard";

interface BBSCardListProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSCardListProps) => {
  return (
    <div className="grid lg:grid-cols-3 p-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;
