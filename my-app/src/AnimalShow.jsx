import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  console.log(type);
  return (
    <div>
      <img src={svgMap[type]} alt="animal" />
    </div>
  );
}

export default AnimalShow;
