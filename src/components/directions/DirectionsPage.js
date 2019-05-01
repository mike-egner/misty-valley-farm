import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DirectionsPage = () => {
  const [direction, setDirection] = useState(3);

  const directionsList = [
    {
      id: 1,
      origin: "Pietermaritzburg",
      instructions:
        "Take Greytown turnoff from N3 at Pietermaritzburg.Travel through New Hanover and onto Greytown. About 10km before Greytown, you will see a turn to the right marked Mispah. Pass this and about 100m to the left is a dirt road marked Rietvlei / Shalom Ministeries (if you pass large grain silos on the right, you have missed the turnoff). Take the dirt road and travel for about 8km , passing Shalom farm on the right, then descending a windy road into a valley. In the valley, you will pass through an oak avenue and by an entrance to Oakleigh farm on the right. The road bends left into a dip, where there is a bridge over a stream. Immediately after the dip is the entrance to farm. It is a wrought-iron gate between red brick pillars. Take this entrance and travel up the farm road."
    },
    {
      id: 2,
      origin: "North Coast of Durban",
      instructions:
        "Take the N2 towards Stanger. At Stanger, take the exit onto the R74. Travel inland, passing Kranskop, onto Greytown. On entering Greytown travel straight through town (uphill) until you reach a traffic light intersection with a sign indicating left for Pietermaritzburg. This is the start of the R33. Take this road for about 1 km. At the top of the rise, take the tar road to your right (the D76). You will pass an airfield and hangers on the left and eventually reach a T-junction shortly after the road becomes dirt. Turn right, pass Shalom farm on the right, then descend a windy road into a valley. In the valley, you will pass through an oak avenue and by an entrance to Oakleigh farm on the right. The road bends left into a dip, where there is a bridge over a stream. Immediately after the dip is the entrance to farm. It is a wrought-iron gate between red brick pillars. Take this entrance and travel up the farm road."
    },
    {
      id: 3,
      origin: "Johannesburg",
      instructions:
        "Take the N3 towards Durban. At the Mooi River toll gate, take the turnoff to Greytown. You will need to use the leftmost lane at the toll gate and loop over the highway. Travel to Greytown (approx 70km). Once there, travel through town (downhill) to the first set of traffic lights and turn right following the road indicating Pietermaritzburg. This is the start of the R33. Take this road for about 1 km. At the top of the rise, take the tar road to your right (the D76). You will pass an airfield and hangers on the left and eventually reach a T-junction shortly after the road becomes dirt. Turn right, pass Shalom farm on the right, then descend a windy road into a valley. In the valley, you will pass through an oak avenue and by an entrance to Oakleigh farm on the right. The road bends left into a dip, where there is a bridge over a stream. Immediately after the dip is the entrance to farm. It is a wrought-iron gate between red brick pillars. Take this entrance and travel up the farm road."
    }
  ];

  const handleDropdownClick = newDirection => setDirection(newDirection);

  return (
    <>
      <h1>Directions Page</h1>
      <div>This is where directions go</div>
      <Dropdown className="my-3">
        <Dropdown.Toggle variant="primary" id="dropdown">
          From {directionsList.find(x => x.id === direction).origin}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={() => handleDropdownClick(1)}>
            From {directionsList.find(x => x.id === 1).origin}
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => handleDropdownClick(2)}>
            From {directionsList.find(x => x.id === 2).origin}
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => handleDropdownClick(3)}>
            From {directionsList.find(x => x.id === 3).origin}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p>{directionsList.find(x => x.id === direction).instructions} </p>
    </>
  );
};

export default DirectionsPage;
