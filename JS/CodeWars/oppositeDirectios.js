function directionsReduce(directions) {
  let counter = 0;
  while(true) {
    if( directions[counter] + directions[counter + 1] === "NORTHSOUTH" ||
        directions[counter] + directions[counter + 1] === "SOUTHNORTH" ||
        directions[counter] + directions[counter + 1] === "EASTWEST" ||
        directions[counter] + directions[counter + 1] === "WESTEAST"
      ) 
    {
      directions.splice(counter, 2);
      counter = 0;
    }
    else {
      if(counter === directions.length - 1 || !directions.length) {
        break
      }
      counter++;
    }
  }

  return directions;
}


directionsReduce("NORTH", "WEST", "SOUTH", "EAST");