import Layout from "../../components/Layout";
import {useRouter} from "next/router";

export default function Project() {
  const router = useRouter()
  const {id} = router.query

  return (
    <Layout>
      project: {id}
    </Layout>
  )
}