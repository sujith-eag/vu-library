import { cSection } from "../theme/data/fileStructures/cSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function cSidebar() {
  return [
    {
      text : 'C Language',
      collapsed: true,
      items: transformToSidebar(cSection)
    }
  ];
}
