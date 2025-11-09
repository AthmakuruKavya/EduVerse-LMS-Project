// import React from 'react'
// import { Button } from '../ui/button'
// import FormControls from './FormControls'

// const CommonForm = ({handleSubmit, buttonText, formControls = [], formData, setformData}) => {
//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//         {/*render form controls here*/}
//         <FormControls formControls={formControls} formData={formData} setformData={setformData}/>
//         <Button 
//           type="submit" 
//           className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all"
//         >
//           {buttonText || "Submit"}
//         </Button>

//     </form>
//   )
// }

// export default CommonForm

import React from 'react'
import { Button } from '../ui/button'
import FormControls from './FormControls'

const CommonForm = ({ handleSubmit, buttonText, formControls = [], formData, setformData }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <FormControls 
        formControls={formControls}
        formData={formData}
        setformData={setformData}
      />

      {/* ✅ Updated richer button gradient */}
      <Button
        type="submit"
        className="w-full py-2.5 bg-gradient-to-r from-[#B374FF] to-[#8A35FF] 
        hover:opacity-95 text-white rounded-xl font-semibold shadow-md transition-all"
      >
        {buttonText || "Submit"}
      </Button>

    </form>
  )
}

export default CommonForm


