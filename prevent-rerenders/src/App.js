import Form from "./Form/Form";
import './index.css'
import { TitleProvider, useTitle } from "./context/TitleContext";
import {
  DescriptionProvider,
  useDescription
} from "./context/DescriptionContext";
import {
  HandlingTimeProvider,
  useHandlingTime
} from "./context/HandlingTimeContext";

function App() {
  return (
    <div className="App">
     <TitleProvider>
        <DescriptionProvider>
          <HandlingTimeProvider>
            <Form />
            <SaveButton />
          </HandlingTimeProvider>
        </DescriptionProvider>
      </TitleProvider>
    </div>
  );
}

export default App;


function SaveButton() {
  const { title, setTitle } = useTitle();
  const { description, setDescription } = useDescription();
  const { handlingTime, setHandlingTime } = useHandlingTime();

  const handleSaveClick = () => {
    // Print the state values on the parent
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Handling Time:", handlingTime);
  };

  return <button onClick={handleSaveClick}>Save</button>;
}

