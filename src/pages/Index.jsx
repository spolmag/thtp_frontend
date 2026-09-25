import { useState } from "react";

export default function Index() {
  const [calOption, setCalOption] = useState("todayRemaining");
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  //   Helper for format number with comma and 2 decimals
  const formatNum = (num) => {
    return Number(num).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleCalculate = () => {
    setResultMessage(null);
    setWarningMessage(null);

    const val = parseFloat(inputValue);

    // Check if input is error or not a number
    if (isNaN(val) || inputValue.trim() === "") {
      setWarningMessage("จำนวนเงินไม่ถูกต้อง");
      setResultMessage(null);
      return;
    }

    if (calOption === "todayRemaining") {
      if (val > 200) {
        setWarningMessage("สิทธิที่ได้รับสูงสุดต่อวัน ไม่เกิน 200 บาทต่อวัน");
        return;
      }
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      const gWalletNeeded = val * (40 / 60);
      const maxPurchase = val + gWalletNeeded;
      setResultMessage(
        `ยอดซื้อสินค้าได้สูงสุดคงเหลือในวันนี้ ${formatNum(maxPurchase)} บาท โดยท่านต้องมีเงินใน G Wallet ${formatNum(gWalletNeeded)} บาท`,
      );
    } else if (calOption === "monthRemaining") {
      if (val > 1000) {
        setWarningMessage("สิทธิที่ได้รับสูงสุดต่อเดือน ไม่เกิน 1,000 บาท");
        return;
      }
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      const gWalletNeeded = val * (40 / 60);
      const maxPurchase = val + gWalletNeeded;
      setResultMessage(
        `ยอดที่ซื้อสินค้าได้สูงสุดคงเหลือในเดือนนี้ ${formatNum(maxPurchase)} บาท โดยท่านต้องมีเงินใน G Wallet ${formatNum(gWalletNeeded)} บาท`,
      );
    } else if (calOption === "gWalletAmount") {
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      const govCover = val * (60 / 40);
      const maxPurchase = val + govCover;
      setResultMessage(
        `ยอดซื้อสินค้าได้สูงสุด ${formatNum(maxPurchase)} บาท โดยยอดซื้อรวมต้องไม่เกินเงื่อนไข 333.33 บาทต่อวัน หรือ 1,666.67 บาทต่อเดือน`,
      );
    } else if (calOption === "productPrice") {
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      const govCover = val * 0.6;
      const userPay = val * 0.4;
      setResultMessage(
        `ส่วนที่รัฐออกให้ ${formatNum(govCover)} บาท ส่วนที่ท่านต้องออก ${formatNum(userPay)} บาท โดยยอดซื้อรวมต้องไม่เกินเงื่อนไข 333.33 บาทต่อวัน หรือ 1,666.67 บาทต่อเดือน และถ้ายอดซื้อสินค้าเกินกว่ายอดสิทธิสูงสุด ท่านต้องจ่ายเพิ่มส่วนต่างเต็มจำนวน`,
      );
    }
  };

  const handleClear = () => {
    setCalOption("todayRemaining");
    setInputValue("");
    setResultMessage(null);
    setWarningMessage(null);
  };

  const getInputLabel = () => {
    switch (calOption) {
      case "todayRemaining":
        return "มูลค่าคงเหลือวันนี้ (บาท)";
      case "monthRemaining":
        return "สิทธิคงเหลือในเดือน (บาท)";
      case "gWalletAmount":
        return "เงินใน G Wallet (บาท)";
      case "productPrice":
        return "ราคาสินค้า (บาท)";
      default:
        return "จำนวนเงิน (บาท)";
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
      <h2 className="text-lg font-bold text-gray-800 text-center">
        คำนวณสิทธิไทยช่วยไทยพลัส 60/40
      </h2>

      {/* Option select */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-gray-600">
          คำนวนจาก
        </label>
        <select
          value={calOption}
          onChange={(e) => {
            setCalOption(e.target.value);
            setInputValue("");
            setResultMessage(null);
            setWarningMessage(null);
          }}
          className="w-full p-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="todayRemaining">มูลค่าคงเหลือวันนี้</option>
          <option value="monthRemaining">สิทธิคงเหลือในเดือน</option>
          <option value="gWalletAmount">เงินใน G Wallet</option>
          <option value="productPrice">ราคาสินค้า</option>
        </select>
      </div>

      {/* Input field */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-gray-600">
          {getInputLabel()}
        </label>
        <input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={inputValue}
          onChange={(e) => {
            // Allow only number and decimal points
            const val = e.target.value;
            if (val === "" || /^\d*\.?\d*$/.test(val)) {
              setInputValue(val);
            }
          }}
          className="w-full p-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button */}
      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={handleCalculate}
          className="px-4 bg-gray-100 text-gray-600 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:bg-blue-700 transition-all"
        >
          คำนวน
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 bg-gray-100 text-gray-600 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:bg-blue-700 transition-all"
        >
          เคลียร์
        </button>
      </div>

      {/* Warning display */}
      {warningMessage && (
        <div className="mt-4 p-3.5 bg-red-50 border border-red-100 rounded-xl">
          <p className="text-sm font-medium text-red-600">{warningMessage}</p>
        </div>
      )}
      {/* Result display */}
      {resultMessage && (
        <div className="mt-4 p-3.5 bg-blue-50 border border-blue-100 rounded-xl space-y-1">
          <p className="text-sm text-blue-900 leading-relaxed">
            {resultMessage}
          </p>
        </div>
      )}
    </div>
  );
}
