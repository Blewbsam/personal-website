import { useState } from "react";

import LeftMain from "./LeftMain.jsx";
import RightMain from "./RightMain.jsx";


const allSections = ["Bio", "Skills", "Projects", "Blogs"]

function Home() {

  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //just making sure page initializes at top

  const [section, setSection] = useState(allSections[0])

  function handleSetSection(newSection){
    if (!allSections.includes(newSection)) throw new Error("Section notc ontained: ", newSection)

    setSection(newSection)
  }

  return (
    <main className="main">
      <LeftMain section={section} onSetSection={handleSetSection}/>
      <RightMain section={section} onSetSection={handleSetSection}/> 
    </main>
  );
}

export default Home;
