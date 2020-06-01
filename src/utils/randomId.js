export default function () {
  const id = Math.random(1, 99999);
  const parsedId = String(id).substr(2, 20);
  return parsedId;
}
