Array.length;

//Data property of an Array instance
//  represents the number of elements in that array

//Value is an Unsigned, 32-bit integer
//   ???-always numerically greater than the highest index in the array
//    ???=why mention this?

Array.length = 5;
//An Array instance's length can be changed.
//  Higher than its length creates empty array slots
//    empty slots do not have undefined values.
//  Lower than its length deletes arrays.
//    Elements beyond the new length are deleted