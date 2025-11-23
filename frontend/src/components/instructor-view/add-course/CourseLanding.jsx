import FormControls from "@/components/common-form/FormControls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config/form";
import { InstructorContext } from "@/context/InstructorContext";
import React, { useContext } from "react";

const CourseLanding = () => {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Langing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setformData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
};

export default CourseLanding;
