export default function Handler(req, res) {
  // محتوى التحقق اللي الشبكة اعطتهولك
  const content = "2a742c3848bdaa03616e";

  // خلي Response يكون نص فقط
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(content);
}
