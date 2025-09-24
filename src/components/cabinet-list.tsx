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
      <div className="flex flex-row gap-10 ml-10 mr-10 items-center justify-center">
        {(items).map((item)=> (
            <CabinetCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
