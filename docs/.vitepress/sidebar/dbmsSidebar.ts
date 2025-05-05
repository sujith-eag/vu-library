import { dbmsSection } from "../theme/data/fileStructures/dbmsSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function dbmsSidebar() {
  return [
    {
      text : 'DataBase',
      collapsed: true,
      items: transformToSidebar(dbmsSection)
    }
  ];
}
