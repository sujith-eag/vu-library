
import { javaSection } from "../theme/data/fileStructures/javaSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

   
export function javaSidebar() {
  return [
    {
      text : 'Java',
      collapsed: true,
      items: transformToSidebar(javaSection)
    }
  ];
}
