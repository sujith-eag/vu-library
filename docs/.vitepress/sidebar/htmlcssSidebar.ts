import { webSection } from "../theme/data/fileStructures/htmlcscSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function htmlcssSidebar() {
  return [
    {
      text : 'HTML/CSS',
      collapsed: true,
      items: transformToSidebar(webSection)
    }
  ];
}
