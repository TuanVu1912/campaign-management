import { Button } from "components/button";
import Heading from "components/common/Heading";
import { IconPlus } from "components/icons";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <>
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10 ">
        <div className="flex items-start gap-x-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary text-white bg-opacity-60">
            <IconPlus></IconPlus>

          </div>
          <div className="flex-1">
            <h1 className="text-[22px] mb-2 font-semibold">Create your campaign</h1>
            <p className="text-sm text-text3 mb-2"> Jump right into our editor and create your first Virtue campaign!</p>
          <a href="/" className="text-sm text-primary">Need any help? Learn More ...</a>
          </div>
        </div>
        <div>
            <Button type="button" kind="ghost" className="px-8" href="/start-campaign"  >Create campaign</Button>
        </div>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center">
      <Button kind="ghost" className="mx-auto px-8">
        <IconPlus></IconPlus>
      </Button>
      </div>
      
    </>
  );
};

export default CampaignPage;
