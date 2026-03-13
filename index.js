import { useState, useEffect } from "react";

// رقم التحقق اللي الشبكة اعطتهولك
const verificationToken = "2a742c3848ef3bdaa03616e";

export default function App() {
  const [money, setMoney] = useState(0);
  const [currentLink, setCurrentLink] = useState("");
  const links = [
    "https://smartlink1.com",
    "https://smartlink2.com",
    "https://smartlink3.com",
  ];

  const start = () => {
    setCurrentLink(links[Math.floor(Math.random() * links.length)]);
    setMoney((prev) => prev + 0.01);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLink(links[Math.floor(Math.random() * links.length)]);
      setMoney((prev) => prev + 0.01);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // وظيفة لإظهار ملف التحقق عند طلبه من الشبكة
  const downloadVerification = () => {
    const blob = new Blob([verificationToken], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "2a742c3848bdaa03616e.txt";
    link.click();
  };

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

      <div style={{ marginTop: "30px" }}>
        <button onClick={downloadVerification}>تحميل ملف التحقق</button>
      </div>
    </div>
  );
  }
