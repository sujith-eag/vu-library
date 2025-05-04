import { linuxSection } from "../theme/data/linux/linuxSection";

import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function linuxSidebar() {
  return [
    {
      text : 'Linux & Bash',
      collapsed: true,
      items: transformToSidebar(linuxSection)
    }
  ];
}
