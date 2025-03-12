import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Flow from './flow';

const TabComponent = () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <div className="grid justify-center w-full h-full border-8 border-amber-800 overflow-hidden">
        <Flow></Flow>
      </div>
    </TabPanel>
  </Tabs>
);

export default TabComponent;