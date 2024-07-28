import Card from "./Card Component/Card";

function App() {
  return(
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card title="Me" text="It's somebody to you" />
      <Card title="Another Person" text="Another description here" />
      <Card title="Someone Else" text="Some other text here" />
      <Card title="And Another" text="Final card text" />
    </div>
  );
}

export default App
