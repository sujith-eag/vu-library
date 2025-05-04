import { dbmsSections } from "../theme/data/dbms/dbmsSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function dbmsSidebar() {
  return [
    {
      text : 'DataBase',
      collapsed: true,
      items: transformToSidebar(dbmsSections)
    }
  ];
}
