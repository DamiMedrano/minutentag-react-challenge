import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation/ListItemsForNavigation";
import { Rating } from "./components/Rating/Rating";

import './App.css';

export default function App() {

  const imageLinks = [
    "https://i.redd.it/funkib13kvf31.jpg",
    "https://i.redd.it/1o219x45sz771.jpg",
    "https://i.redd.it/awamt0irl5h41.jpg",
    "https://i.redd.it/0rypgwdi1xe31.jpg",
  ];

  const products = [
    { name: "Apples", votes: 0 },
    { name: "Bananas", votes: 0 },
    { name: "Oranges", votes: 0 },
    { name: "Grapes", votes: 0 },
    { name: "Tofu", votes: 0 },
    { name: "Tomato", votes: 0 },
    { name: "Bread", votes: 0 },
    { name: "Water", votes: 0 },
    { name: "Rice", votes: 0 },
    { name: "Potatoes", votes: 0 }
  ];

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <div className="test-container">
        <h3>'Message' test</h3>
        <Message />
      </div>
      <div className="test-container">
        <h3>'FocusableInput' test</h3>
        <FocusableInput focused={true} placeholder="(starts focused)" />
        <FocusableInput focused={false} placeholder="(needs to be focused)" />
      </div>
      <div className="test-container">
        <h3>'ImageGallery' test</h3>
        <ImageGallery links={imageLinks}/>
      </div>
      <div className="test-container">
        <h3>'PlayerStatus' test</h3>
        <PlayerStatus />
      </div>
      <div className="test-container">
        <h3>'TeamsList' test</h3>
        <TeamsList />
      </div>
      <div className="test-container">
        <h3>'Grocery' test</h3>
        <Grocery products={products} />
      </div>
      <div className="test-container">
        <h3>'ListItemsForNavigation' Game of Dogs cast:</h3>
        <ListItemsForNavigation products={products} />
      </div>
      <div className="test-container">
        <h3>'Rating' test, rate Game of Dogs series</h3>
        <Rating products={products} />
      </div>
    </div>
  );
}
