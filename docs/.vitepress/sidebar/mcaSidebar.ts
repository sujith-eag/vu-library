// docs/.vitepress/sidebar/os.js
import { mcaSection } from "../theme/data/fileStructures/mcaSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function mcaSidebar() {
  return [
    {
      text : 'MCA Practice',
      collapsed: true,
      items: transformToSidebar(mcaSection)
    }
  ];
}
