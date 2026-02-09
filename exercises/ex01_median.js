/*
Exercice 1 — Médiane de deux tableaux triés

Énoncé :
On te donne deux tableaux de nombres triés nums1 et nums2.
Retourner la médiane de l'ensemble des valeurs des deux tableaux réunis.

Rappel :
- Total impair -> élément du milieu
- Total pair -> moyenne des 2 éléments du milieu
*/

function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2];
  
  merged.sort((a, b) => a - b);
  const length = merged.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 1) {
    return merged[middle];
  }
  return (merged[middle - 1] + merged[middle]) / 2;
}

// --------------------
// Tests (au moins 3)
// --------------------
console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
