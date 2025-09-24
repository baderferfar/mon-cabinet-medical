
import { Soin } from "@/types";
import {SoinCard} from "@/components/soin-card";
import {NoResults} from "@/components/ui/no-results"


interface SoinListProps {
    items:Soin[];
}

export const SoinList: React.FC<SoinListProps> = ({items}) => {
  return (
    <div className="space-y-4">
      
      { items.length === 0 && <NoResults />}
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mr-4">
        {(items).map((item)=> (
            <SoinCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

