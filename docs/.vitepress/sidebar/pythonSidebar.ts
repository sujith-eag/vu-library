import { pythonSection } from "../theme/data/fileStructures/pythonSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function pythonSidebar() {
  return [
    {
      text : 'Python',
      collapsed: true,
      items: transformToSidebar(pythonSection)
    }
  ];
}
