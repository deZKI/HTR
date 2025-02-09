import {FC} from "react";
import InformationSection from "@/pages/Account/components/InformationSection/InformationSection.tsx";
import ActionsPanel from "@/ui/ActionsPanel/ActionsPanel.tsx";

const Dashboard: FC = () => {
  return (
    <section className="w-full">
      <div className="flex gap-12 px-8 mx-auto max-w-[1072px]">
        <ActionsPanel />
        <InformationSection />
      </div>
    </section>
  );
}

export default Dashboard;