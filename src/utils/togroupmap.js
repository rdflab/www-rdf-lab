// const toLabMap = peopleMap => {
//   let ret = new Map()

//   for (let id of peopleMap.keys()) {
//     const person = peopleMap.get(id)

//     if (person.tags.includes("faculty")) {
//       for (let labId of person.labs) {
//         if (!ret.has(labId) && person.id === labId) {
//           const lab = new Object()
//           lab.labId = labId
//           lab.faculty = person
//           ret.set(labId, lab)
//         }
//       }
//     }
//   }

//   return ret
// }

const toGroupMap = labs => {
  let ret = {}

  for (let lab of labs) {
    ret[lab.id] = lab
  }

  return ret
}

export default toGroupMap
