import Layout from "../components/layout";
import {DataService} from "../services";
import {ContactsModel} from "../types";

interface ContactsProps {
  contacts: ContactsModel
}

export default function Contacts({contacts: {phone, telegram, linkedin}}: ContactsProps) {
  return (
    <Layout>
      contact page:
      {phone}<br/>
      {telegram}<br/>
      {linkedin}<br/>
    </Layout>
  )
}

export async function getStaticProps() {
  const contacts = DataService.contacts()

  return {
    props: {
      contacts
    }
  }
}