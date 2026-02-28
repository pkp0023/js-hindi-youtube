console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null === 0);

console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0); //don't try to use this type of comparision
console.log(undefined === 0);



// null == 0      → false  (null only equals undefined in ==)
// null > 0       → false  (null is converted to 0, 0 > 0 is false)
// null >= 0      → true   (null → 0, 0 >= 0 is true)

// Note: == does NOT coerce null to number, but comparison operators do.
// Rule: Always prefer === to avoid coercion bugs.(Strict check_, it also check the datatype)







