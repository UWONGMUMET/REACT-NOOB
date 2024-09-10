// import Header from "./Header"
// import Footer from "./Footer";
// import Food from "./Food";
// import Card from "./Card Component/Card";
// import Button from "./Add Css Styles/Button";
// import Student from "./3.Props/Student";
// import UserGreeting from "./4. Conditional Rendering/UserGreeting";
// import List from "./5. Render Lists/List";
// import Button from "./6. Click Events/Button";
// import MyComp from "./7. useState Hook/MyComp";
// import OnChange from "./8. onChange event handle/OnChange";
import ColorPicker from "./9. color picker app/ColorPicker";

function App() {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pineapple", calories: 37 },
  // ];

  // const vegetables = [
  //   { id: 6, name: "potato", calories: 110 },
  //   { id: 7, name: "celery", calories: 15 },
  //   { id: 8, name: "carrot", calories: 25 },
  //   { id: 9, name: "corn", calories: 63 },
  //   { id: 10, name: "borccoli", calories: 50 },
  // ];

  return(
    // <div>
    //   {/* <Header></Header>
    //   <Food></Food>
    //   <Footer></Footer> */}
    // </div>
    // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    //   <Card title="Me" text="It's somebody to you" />
    //   <Card title="Another Person" text="Another description here" />
    //   <Card title="Someone Else" text="Some other text here" />
    //   <Card title="And Another" text="Final card text" />
    // </div>
    // <div>
    //   {/* <Button></Button> */}
    // </div>

    // <div>
    //   <Student name="Firman" age={30} isStudent={false}></Student>
    //   <Student name="Hasibuan" age={42} isStudent={true}></Student>
    //   <Student name="Manskie" age={50} isStudent={false}></Student>
    //   <Student name="fenrir" age={27} isStudent={true}></Student>
    //   <Student name="CMIIW"></Student>
    // </div>
    
    // <div>
    //   <UserGreeting isLoggedIn={true} username="BroCode"></UserGreeting>
    // </div>
    
    // <div>
    //   <List items={fruits} category="Fruits" />
    //   <List items={vegetables} category="Vegetables" />
    // </div>

    // <div>
    //   <Button></Button>
    // </div>

    // <div>
    //   <MyComp></MyComp>
    // </div>

    // <div>
    //   <OnChange></OnChange>
    // </div>

    <div>
      <ColorPicker></ColorPicker>
    </div>
  );
}

export default App
