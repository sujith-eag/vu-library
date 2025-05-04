import { javascriptSection } from "../theme/data/javascript/javascriptSection";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function javascriptSidebar() {
  return [
    {
      text : 'JavaScript',
      collapsed: true,
      items: transformToSidebar(javascriptSection)
    }
  ];
}
