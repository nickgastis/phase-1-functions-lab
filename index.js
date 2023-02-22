

function distanceFromHqInBlocks(street) {
    const scuber = 42
    if (street < scuber) {
    return scuber - street;
    }
    else {
        return street - scuber;
    }

}

function distanceFromHqInFeet(feetD) {
    const blocks = distanceFromHqInBlocks(feetD);
    const feet = blocks * 264;
    return feet;
  }

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const blockNum = (destination > start) ? (destination - start) : (start - destination)
    const distanceInFeet = blockNum * blockLength;
    return distanceInFeet;
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}