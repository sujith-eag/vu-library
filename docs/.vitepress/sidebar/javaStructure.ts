
import { javaSections } from "../theme/data/java/javaSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

   
export function javaSidebar() {
  return [
    {
      text : 'Java',
      collapsed: true,
      items: transformToSidebar(javaSections)
    }
  ];
}
