// import { useLocation } from "react-router-dom";

// import PetsListNav from "./PetsListNav";
// import Pet from "./Pet";
// import "./PetsList.css";

// export const PetsList = ({ pets }) => {
//   const { pathname } = useLocation();

  // current location path

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  let urlPath = pathname.split("/").pop();

  let slicedUrlPath = urlPath.slice(0, -1);

  let showPetData;

  if (slicedUrlPath === "dog") {
    showPetData = (
      <section className="pets-list">
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
    );
  } else if (slicedUrlPath === "cat") {
    showPetData = (
      <section className="pets-list">
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}
      </section>
    );
  } else {
    showPetData = (
      <section className="pets-list">
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}

        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
    );
  }

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      {showPetData}
    </section>
  );
};

// export default PetsList;