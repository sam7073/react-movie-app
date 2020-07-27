import React from "react";

function Food({ name, pic }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <img src={pic} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
  },
  {
    id: 2,
    name: "sogogi",
    image: "https://www.lamb.international/news/photo/201904/176_79_2716.jpg",
  },
  {
    id: 3,
    name: "dongas",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201508/05/htm_20150805071153241.jpg",
  },
];

function renderFood(food) {
  return <Food key={food.id} name={food.name} pic={food.image} />;
}

function App() {
  return (
    <div>
      <h1>Hello, Hoon!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
