import { jsSection } from "../theme/data/fileStructures/jsSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function javascriptSidebar() {
  return [
    {
      text : 'JavaScript',
      collapsed: true,
      items: transformToSidebar(jsSection)
    }
  ];
}
