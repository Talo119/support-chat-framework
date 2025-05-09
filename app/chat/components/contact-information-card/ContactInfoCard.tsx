import { Button } from "~/components/ui/button";
import ContactInfo from "./ContactInfo";
import ContactInfoSkeleton from "./ContactInfoSkeleton";
import NoContactSelected from "./NoContactSelected";
import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "~/chat/interfaces/chat-interface";

interface ContactInfoCardProps {
  client?: Client;
}

const ContactInfoCard = () => {
  const { id } = useParams();
  const { clients = [], client } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === "loading";

  if (client) return <ContactInfo client={client} />;

  // const client = clients.find((client: Client) => client.id === id);

  if (isPending) return <ContactInfoSkeleton />;

  if (!id || !client) return <NoContactSelected />;

};

export default ContactInfoCard;
