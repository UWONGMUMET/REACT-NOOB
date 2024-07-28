// import Header from "./Header"
// import Footer from "./Footer";
// import Food from "./Food";
import Card from "./Card Component/Card";

function App() {
  return(
    // <div>
    //   {/* <Header></Header>
    //   <Food></Food>
    //   <Footer></Footer> */}
    // </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card title="Me" text="It's somebody to you" />
      <Card title="Another Person" text="Another description here" />
      <Card title="Someone Else" text="Some other text here" />
      <Card title="And Another" text="Final card text" />
    </div>
  );
}

export default App
