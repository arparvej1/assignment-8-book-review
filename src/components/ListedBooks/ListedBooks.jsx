import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishlistBooks from '../WishlistBooks/WishlistBooks';

const ListedBooks = () => {
  return (
    <div>
      <div className="text-center rounded-2xl bg-base-200 py-6 my-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#131313]">Books</h1>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishlistBooks></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;