import Layout from "../components/common/layout";

import BasicInfo from "../components/index/basicInfo";
import EducationHistory from "../components/index/educationHistory";
import WorkHistory from "../components/index/workHistory";
import License from "../components/index/license";
import Hobby from "../components/index/hobby";
import Motivation from "../components/index/motivation";
// import Separator from "../components/common/sepalator";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col my-3">
        <BasicInfo />
        <EducationHistory />

        <WorkHistory />

        <License />

        <Hobby />

        <Motivation />
      </div>
    </Layout>
  )
}
