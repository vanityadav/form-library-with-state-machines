import "./App.css";
import Fields from "./one-form-lib/Fields";
import Forms from "./one-form-lib/Form";
const array = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Age", name: "age", type: "number" },
  { label: "Min Price", name: "min", type: "number" },
  { label: "Max Price", name: "max", type: "number" },
];

const structure = {
  fullName: "name",
  mail: "email",
  ageGroup: "age",
  price: { min: "min", max: "max" },
};
function App() {
  function hello(data: any) {
    console.log(data);
  }
  return (
    <div className="App">
      <Forms formId="hello" onSubmit={(data) => hello(data)}>
        {array.map((ele, i) => (
          <Fields key={i} {...ele} />
        ))}
        <button>Save</button>
      </Forms>
    </div>
  );
}

export default App;
