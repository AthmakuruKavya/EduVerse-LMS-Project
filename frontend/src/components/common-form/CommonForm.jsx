import React from "react";
import { Button } from "../ui/button";
import FormControls from "./FormControls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setformData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormControls
        formControls={formControls}
        formData={formData}
        setformData={setformData}
      />

      {/* ✅ Updated richer button gradient */}
      <Button
        disabled={isButtonDisabled}
        type="submit"
        className="w-full py-2.5 bg-[#8A35FF] hover:bg-[#7A2FE6] cursor-pointer text-white rounded-xl font-semibold shadow-md transition-all"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
