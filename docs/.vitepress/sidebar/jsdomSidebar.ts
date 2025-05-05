import { jsdomSection } from "../theme/data/fileStructures/jsdomSections"; 
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function jsdomSidebar() {
  return [
    {
      text : 'JS-DOM',
      collapsed: true,
      items: transformToSidebar(jsdomSection)
    }
  ];
}
