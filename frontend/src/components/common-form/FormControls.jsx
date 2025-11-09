// import React from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { Textarea } from "../ui/textarea";

// const FormControls = ({ formControls = [], formData, setformData }) => {
//   function renderComponentByType(getcontrolItem) {
//     const commonClasses =
//       "w-full bg-white border border-gray-200 hover:border-gray-300 focus:border-gray-900 focus:ring-0 rounded-lg transition-colors";

//     let element = null;

//     switch (getcontrolItem.componentType) {
//       case "input":
//         element = (
//           <Input
//             className={commonClasses}
//             id={getcontrolItem.name}
//             name={getcontrolItem.name}
//             placeholder={getcontrolItem.placeholder}
//             type={getcontrolItem.type}
//           />
//         );
//         break;
//       case "select":
//         element = (
//           <Select>
//             <SelectTrigger className={commonClasses}>
//               <SelectValue placeholder={getcontrolItem.label} />
//             </SelectTrigger>
//             <SelectContent className="bg-white border border-gray-200">
//               {getcontrolItem.options?.map((optionItem) => (
//                 <SelectItem
//                   key={optionItem.id}
//                   value={optionItem.id}
//                   className="hover:bg-gray-50"
//                 >
//                   {optionItem.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         );
//         break;
//       case "textarea":
//         element = (
//           <Textarea
//             className={commonClasses}
//             id={getcontrolItem.name}
//             name={getcontrolItem.name}
//             placeholder={getcontrolItem.placeholder}
//           />
//         );
//         break;
//       default:
//         element = (
//           <Input
//             className={commonClasses}
//             id={getcontrolItem.name}
//             name={getcontrolItem.name}
//             placeholder={getcontrolItem.placeholder}
//             type={getcontrolItem.type}
//           />
//         );
//     }
//     return element;
//   }

//   return (
//     <div className="space-y-4">
//       {formControls.map((controlItem) => (
//         <div key={controlItem.name} className="space-y-1.5">
//           <Label
//             htmlFor={controlItem.name}
//             className="text-sm font-medium text-gray-600"
//           >
//             {controlItem.label}
//           </Label>
//           <div className="relative">{renderComponentByType(controlItem)}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormControls;


import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControls = ({ formControls = [], formData, setformData }) => {

  const commonClasses =
    "w-full bg-white border border-[#E6D9F5] rounded-xl text-[#463860] \
    placeholder:text-[#9485A9] focus:border-[#A86CFF] hover:border-[#C9A7FF] \
    transition-all h-11 px-4 shadow-sm";

  function renderComponentByType(getcontrolItem) {
    let element = null;

    switch (getcontrolItem.componentType) {

      case "input":
        element = (
          <Input
            className={commonClasses}
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            type={getcontrolItem.type}
          />
        );
        break;

      case "select":
        element = (
          <Select>
            <SelectTrigger className={commonClasses}>
              <SelectValue placeholder={getcontrolItem.label} />
            </SelectTrigger>
            <SelectContent className="bg-white border border-[#E6D9F5] text-[#463860]">
              {getcontrolItem.options?.map((optionItem) => (
                <SelectItem
                  key={optionItem.id}
                  value={optionItem.id}
                  className="hover:bg-[#F7F0FF]"
                >
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            className={commonClasses}
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
          />
        );
        break;

      default:
        element = (
          <Input
            className={commonClasses}
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            type={getcontrolItem.type}
          />
        );
    }

    return element;
  }

  return (
    <div className="space-y-4">
      {formControls.map((controlItem) => (
        <div key={controlItem.name} className="space-y-1.5">
          
          {/* ✅ DARKER, PROFESSIONAL LABEL */}
          <Label
            htmlFor={controlItem.name}
            className="text-sm font-semibold text-[#3A2F50]"
          >
            {controlItem.label}
          </Label>

          <div>{renderComponentByType(controlItem)}</div>
        </div>
      ))}
    </div>
  );
};

export default FormControls;

