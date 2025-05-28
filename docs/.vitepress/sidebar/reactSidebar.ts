import { reactSection } from "../theme/data/fileStructures/reactSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function reactSidebar() {
  return [
    {
      text : 'React',
      collapsed: true,
      items: transformToSidebar(reactSection)
    }
  ];
}
