const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let updatedCarCollection = {};
  if (carCollection.includes(carBrand)) {
    let position = carCollection.indexOf(carBrand) + 1;
    updatedCarCollection =
      carBrand +
      " already exists in position " +
      position +
      " of the car collection";
  } else {
    carCollection.push(carBrand);
    updatedCarCollection = "new car collection is: " + carCollection;
  }
  return updatedCarCollection;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
