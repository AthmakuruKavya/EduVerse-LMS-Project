import MediaProgressBar from "@/components/media-progress-bar/MediaProgressBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config/form";
import { InstructorContext } from "@/context/InstructorContext";
import { mediaUploadService } from "@/services/services";
import React, { useContext } from "react";

const CourseCurriculum = () => {
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage
  } = useContext(InstructorContext);

  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }

  function handleCourseTitleChange(event, curIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    cpyCourseCurriculumFormData[curIndex] = {
      ...cpyCourseCurriculumFormData[curIndex],
      title: event.target.value,
    };
    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }

  function handleFreePreviewChange(currentValue, currentIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    cpyCourseCurriculumFormData[currentIndex] = {
      ...cpyCourseCurriculumFormData[currentIndex],
      freePreview: currentValue,
    };
    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }

  async function handleSingleLectureUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const videoFormData = new FormData();
      videoFormData.append("file", selectedFile);
      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(videoFormData, setMediaUploadProgressPercentage);
        if (response.success) {
          let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
          cpyCourseCurriculumFormData[currentIndex] = {
            ...cpyCourseCurriculumFormData[currentIndex],
            videoUrl : response?.data?.url,
            public_id : response?.data?.public_id
          }
          setCourseCurriculumFormData(cpyCourseCurriculumFormData)
          setMediaUploadProgress(false)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  console.log(courseCurriculumFormData);

  return (
    <Card className="border border-[#E8DFFF] shadow-sm rounded-2xl bg-white">
      <CardHeader className="border-b border-[#F0E6FF] pb-4">
        <CardTitle className="text-xl font-bold text-[#3A2F50]">
          Create Course Curriculum
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <Button
          onClick={handleNewLecture}
          className="bg-[#A86CFF] hover:bg-[#965BEB] text-white font-semibold shadow rounded-lg px-5 py-2"
        >
          Add Lecture
        </Button>
        {
          mediaUploadProgress ? 
          <MediaProgressBar
          isMediaUploading={mediaUploadProgress}
          progress={mediaUploadProgressPercentage}
          /> : null
        }

        <div className="space-y-6">
          {courseCurriculumFormData.map((curriculumItem, index) => (
            <div
              className="border border-[#E8DFFF] p-5 rounded-xl bg-[#F9F5FF] shadow-sm"
              key={index}
            >
              {/* TITLE + INPUT + SWITCH ALL IN ONE LINE */}
              <div className="flex items-center gap-6 mb-4">
                <h3 className="text-lg font-semibold text-[#3A2F50] whitespace-nowrap">
                  Lecture {index + 1}
                </h3>

                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="w-96 bg-white border border-[#D8C8FF] focus:border-[#A86CFF] focus:ring-0 rounded-lg"
                  onChange={(event) => handleCourseTitleChange(event, index)}
                  value={courseCurriculumFormData[index]?.title}
                />

                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Switch
                    checked={courseCurriculumFormData[index]?.freePreview}
                    id={`freePreview-${index + 1}`}
                    onCheckedChange={(value) =>
                      handleFreePreviewChange(value, index)
                    }
                    className="
    data-[state=checked]:bg-[#A86CFF]
    data-[state=unchecked]:bg-gray-300
    relative w-10 h-5
    [&>span]:w-4 [&>span]:h-4
    [&>span]:bg-white
    [&>span]:translate-x-0
    data-[state=checked]:[&>span]:translate-x-5
  "
                  />

                  <Label
                    htmlFor={`freePreview-${index + 1}`}
                    className="text-sm text-[#463860]"
                  >
                    Free Preview
                  </Label>
                </div>
              </div>

              {/* FILE UPLOAD BELOW */}
              <div className="">
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(event) => handleSingleLectureUpload(event, index)}
                  className="border border-[#D8C8FF] rounded-lg bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCurriculum;
