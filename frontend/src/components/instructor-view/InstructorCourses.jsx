import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstructorCourses = () => {

  const navigate = useNavigate();

  return (
    <Card className="border-[#E8DFFF] shadow-md rounded-2xl bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-2xl font-bold text-[#3A2F50]">
          All Courses
        </CardTitle>
        <Button onClick={()=>navigate("/instructor/add-new-course")} className="px-5 py-2 bg-[#A86CFF] hover:bg-[#965BEB] text-white font-semibold rounded-xl shadow">
          Create New Course
        </Button>
      </CardHeader>

      <CardContent>
        <div className="rounded-xl border border-[#F0E6FF] overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-[#F8F5FF]">
              <TableRow>
                <TableHead className="w-[200px] text-[#3A2F50] font-semibold">
                  Course
                </TableHead>
                <TableHead className="text-[#3A2F50] font-semibold">
                  Students
                </TableHead>
                <TableHead className="text-[#3A2F50] font-semibold">
                  Revenue
                </TableHead>
                <TableHead className="text-right text-[#3A2F50] font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="hover:bg-[#F9F6FF] transition">
                <TableCell className="font-medium text-[#463860] py-4">
                  ReactJs full course 2025
                </TableCell>
                <TableCell className="text-[#463860]">100</TableCell>
                <TableCell className="text-[#463860]">500/-</TableCell>

                <TableCell className="text-right space-x-3">
                  <Button
                    variant="ghost"
                    className="p-2 hover:bg-[#EDE3FF] rounded-lg"
                  >
                    <Edit className="text-[#7A52C3]" size={20} />
                  </Button>

                  <Button
                    variant="ghost"
                    className="p-2 hover:bg-red-50 rounded-lg"
                  >
                    <Delete className="text-red-500" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCourses;
