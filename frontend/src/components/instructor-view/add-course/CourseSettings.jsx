import MediaProgressBar from "@/components/media-progress-bar/MediaProgressBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/InstructorContext";
import { mediaUploadService } from "@/services/services";
import React, { useContext } from "react";

const CourseSettings = () => {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);
      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        console.log(response);

        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  console.log(courseLandingFormData);

  return (
    <Card className="border border-[#E8DFFF] shadow-sm rounded-2xl bg-white">
      {/* Very tight header spacing */}
      <CardHeader className="border-b border-[#F0E6FF] px-4 py-1">
        <CardTitle className="text-lg font-semibold text-[#3A2F50] leading-tight">
          Course Settings
        </CardTitle>
      </CardHeader>
      {mediaUploadProgress ? (
        <MediaProgressBar
          isMediaUploading={mediaUploadProgress}
          progress={mediaUploadProgressPercentage}
        />
      ) : null}

      {/* Tight content spacing */}
      <CardContent className="px-4 py-2">
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData.image} />
        ) : (
          <div className="space-y-2">
            <Label className="text-[#463860] font-medium">
              Upload Course Image
            </Label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUploadChange}
              className="block w-full rounded-lg border border-[#D8C8FF] bg-white
                       text-sm text-[#3A2F50] file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0 file:bg-[#A86CFF]
                       file:text-white file:font-semibold
                       hover:file:bg-[#965BEB] cursor-pointer shadow-sm"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSettings;
