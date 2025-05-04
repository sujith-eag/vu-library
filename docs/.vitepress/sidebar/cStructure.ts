import { cSections } from "../theme/data/c/cSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function cSidebar() {
  return [
    {
      text : 'C Language',
      collapsed: true,
      items: transformToSidebar(cSections)
    }
  ];
}
