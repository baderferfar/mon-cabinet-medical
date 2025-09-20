import { Contact } from "@/types";
import { Html} from "@react-email/components";


interface EmailTemplateProps {
  data: Contact
};

export function EmailTemplate ({data}: EmailTemplateProps) {
  return (
  <Html lang="en">
    <p className="text-xl font-light"> <h3>Nom:</h3>{data.nom}</p>
    <p className="text-xl font-light"> <h3>Email:</h3>{data.email}</p>
    <p className="text-xl font-light"> <h3>Téléphone:</h3>{data.telephone}</p>
    <p className="text-xl font-light"> <h3>Soin:</h3>{data.soin}</p>
    <p className="text-sm font-light"> <h3>Message:</h3>{data.message}</p>
  </Html>
)};

