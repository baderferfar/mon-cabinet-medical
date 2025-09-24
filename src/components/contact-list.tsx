import { ContactInfo } from "@/types";
import {ContactCard} from "@/components/contact-card";
import {NoResults} from "@/components/ui/no-results"


interface ContactListProps {
    items:ContactInfo [];
}

export const ContactList: React.FC<ContactListProps> = ({items}) => {
  return (
    <div className="space-y-4">
      
      { items.length === 0 && <NoResults />}
      <div className="flex flex-row  items-center justify-between gap-4">
        {(items).map((item)=> (
            <ContactCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}