import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: "What is React?",
    content: "React is a front end framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: "The Color Red",
    value: "red",
    hexCode: "#FF0000"
  },
  {
    label: "The Color Green",
    value: "green",
    hexCode: "#149414"
  },
  {
    label: "A Shade of Blue",
    value: "blue",
    hexCode: "#1167b1"
  }
];

const showAccordion = () => {
  if(window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {showAccordion()}
    </div>
  );
}

export default App;