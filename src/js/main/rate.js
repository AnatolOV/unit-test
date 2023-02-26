export default function rateParticipant(array) {
  return array.sort((a, b) => (a.health > b.health ? -1 : 1));
}
