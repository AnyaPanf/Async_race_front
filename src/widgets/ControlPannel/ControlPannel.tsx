import { CarCustomizer } from "@/shared/ui/CarCustomizer/CarCustomizer";
import { CustomButton } from "../../shared/ui/Buttons/CustomButton";

export function ControlPannel() {
  const handleClick = () => {
    // console.log('Button clicked');
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        <CustomButton title="Race" type="race" handleClick={handleClick} />
        <CustomButton title="Reset" type="reset" handleClick={handleClick} />
        <CustomButton
          title="Generate"
          type="generate"
          handleClick={handleClick}
        />
      </div>
      <div className="flex gap-4">
        <CarCustomizer text="Create" />
        <CarCustomizer text="Update" />
      </div>
    </div>
  );
}
