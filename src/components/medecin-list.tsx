import { Medecin } from "@/types";
import {MedecinCard} from "@/components/medecin-card";
import {NoResults} from "@/components/ui/no-results"


interface MedecinListProps {
    items:Medecin [];
}

export const MedecinList: React.FC<MedecinListProps> = ({items}) => {
  return (
    <div className="space-y-4  ">
      
      { items.length === 0 && <NoResults />}
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mr-4 ">
        {(items).map((item)=> (
            <MedecinCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

