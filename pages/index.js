import { useState, useEffect } from "react";

export default function Home() {
  const [money, setMoney] = useState(0);
  const [links, setLinks] = useState([
    "https://smartlink1.com",
    "https://smartlink2.com",
    "https://smartlink3.com",
  ]);
  const [currentLink, setCurrentLink] = useState("");

  const start = () => {
    setCurrentLink(links[Math.floor(Math.random() * links.length)]);
    setMoney((prev) => prev + 0.01); // مثال: كل رابط يضيف مبلغ
  };

  // تحديث تلقائي كل 60 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLink(links[Math.floor(Math.random() * links.length)]);
      setMoney((prev) => prev + 0.01);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>مرحبا</h1>
      <button onClick={start} style={{ fontSize: "20px", padding: "10px 20px" }}>
        ابدأ
      </button>

      <div style={{ marginTop: "20px" }}>
        <p>الرابط الحالي: <a href={currentLink} target="_blank">{currentLink}</a></p>
        <p>الأرباح: ${money.toFixed(2)}</p>
      </div>

      <button onClick={start} style={{ marginTop: "20px" }}>تغير الصفحة</button>
    </div>
  );
          }
