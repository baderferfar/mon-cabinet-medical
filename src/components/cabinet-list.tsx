import { Cabinet } from "@/types";
import {CabinetCard} from "@/components/cabinet-card";
import {NoResults} from "@/components/ui/no-results"


interface CabinetListProps {
    items:Cabinet [];
}

export const CabinetList: React.FC<CabinetListProps> = ({items}) => {
  return (
    <div className="space-y-4 w-full">
      
      { items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mr-4items-center justify-between">
        {(items).map((item)=> (
            <CabinetCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
