import { toolsSection } from "../theme/data/fileStructures/toolsSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function toolsSidebar() {
  return [
    {
      text : 'Dev-Tools',
      collapsed: true,
      items: transformToSidebar(toolsSection)
    }
  ];
}
