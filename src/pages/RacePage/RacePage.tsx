import { GarageSection } from "@/widgets/GarageSection/GarageSection";
import { ControlPannel } from "../../widgets/ControlPannel/ControlPannel";

const RacePage = () => {
  return (
    <div className="p-4 text-white">
      <ControlPannel />
      <GarageSection />
    </div>
  );
};

export default RacePage;
