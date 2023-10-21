
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";

import './App.css';

export default function App() {

  const imageLinks = [
    "https://i.redd.it/funkib13kvf31.jpg",
    "https://i.redd.it/1o219x45sz771.jpg",
    "https://i.redd.it/awamt0irl5h41.jpg",
    "https://i.redd.it/0rypgwdi1xe31.jpg",
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
        <FocusableInput focused={false} />
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
    </div>
  );
}
