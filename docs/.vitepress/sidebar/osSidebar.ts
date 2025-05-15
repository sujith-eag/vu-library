// docs/.vitepress/sidebar/os.js
import { osSection } from "../theme/data/fileStructures/osSections"
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function osSidebar() {
  return [
    {
      text : 'Operating System',
      collapsed: true,
      items: transformToSidebar(osSection)
    }
  ];
}
