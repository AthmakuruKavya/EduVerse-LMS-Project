// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Label } from '@/components/ui/label'
// import React from 'react'

// const CourseSettings = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Course Settings</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className=''>
//           <Label>Upload Course Image</Label>
//           <input type='file' accept='image/*' />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default CourseSettings

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'

const CourseSettings = () => {
  return (
    <Card className="border border-[#E8DFFF] shadow-sm rounded-2xl bg-white">
      {/* Very tight header spacing */}
      <CardHeader className="border-b border-[#F0E6FF] px-4 py-1">
        <CardTitle className="text-lg font-semibold text-[#3A2F50] leading-tight">
          Course Settings
        </CardTitle>
      </CardHeader>

      {/* Tight content spacing */}
      <CardContent className="px-4 py-2">
        <div className="space-y-2">
          <Label className="text-[#463860] font-medium">
            Upload Course Image
          </Label>

          <input
            type="file"
            accept="image/*"
            className="block w-full rounded-lg border border-[#D8C8FF] bg-white
                       text-sm text-[#3A2F50] file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0 file:bg-[#A86CFF]
                       file:text-white file:font-semibold
                       hover:file:bg-[#965BEB] cursor-pointer shadow-sm"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseSettings


