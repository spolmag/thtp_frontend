import { useState } from "react";

export default function Index() {
  const [calOption, setCalOption] = useState("todayRemaining");
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);
  const [showModal, setShowModal] = useState(null);

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

    if (!inputValue || inputValue === "") {
      setWarningMessage("กรุณาระบุจำนวนเงิน");
      setResultMessage(null);
      return;
    }

    const val = parseFloat(inputValue);

    // Check if input is error or not a number
    if (isNaN(val) || inputValue.trim() === "") {
      setWarningMessage("จำนวนเงินไม่ถูกต้อง");
      setResultMessage(null);
      return;
    }

    if (calOption === "todayRemaining") {
      if (val > 200) {
        setWarningMessage("สิทธิที่ได้รับสูงสุดต่อวัน ไม่เกิน 200 บาท");
        return;
      }
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      const gWalletNeeded = val * (40 / 60);
      const maxPurchase = val + gWalletNeeded;

      setResultMessage(
        <ul className="list-disc pl-5 space-y-1">
          <li>
            ยอดรวมคงเหลือที่ใช้ซื้อสินค้าได้ในวันนี้{" "}
            <span className="font-bold">{formatNum(maxPurchase)} บาท</span>
          </li>
          <li>
            ยอดเงิน 40% ที่คุณต้องจ่ายโดยหักจาก G Wallet{" "}
            <span className="font-bold text-red-900">
              {formatNum(gWalletNeeded)} บาท
            </span>
          </li>
          <li>
            ยอดเงิน 60% ที่รัฐออกให้{" "}
            <span className="font-bold text-green-900">
              {formatNum(val)} บาท
            </span>
          </li>
        </ul>,
      );
      //
    } else if (calOption === "monthRemaining") {
      if (val > 1000) {
        setWarningMessage("สิทธิที่ได้รับสูงสุด ไม่เกิน 1,000 บาท");
        return;
      }
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      if (val > 200) {
        const gWalletNeeded = val * (40 / 60);
        const maxPurchase = val + gWalletNeeded;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ยอดรวมคงเหลือ ใช้ซื้อสินค้าได้จนถึงวันที่ 30 พ.ย. 2569{" "}
              <span className="font-bold">{formatNum(maxPurchase)} บาท</span>
            </li>
            <li>
              ยอดเงิน 40% ที่คุณต้องจ่ายโดยหักจาก G Wallet{" "}
              <span className="font-bold text-red-700">
                {formatNum(gWalletNeeded)} บาท
              </span>
            </li>
            <li>
              ยอดเงิน 60% ที่รัฐออกให้{" "}
              <span className="font-bold text-green-900">
                {formatNum(val)} บาท
              </span>
            </li>
            <li>
              <span className="font-bold text-red-700">
                ใช้ซื้อสินค้าได้ไม่เกินวันละ 333.33 บาท
              </span>
            </li>
          </ul>,
        );
        return;
      } else {
        const gWalletNeeded = val * (40 / 60);
        const maxPurchase = val + gWalletNeeded;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ยอดรวมคงเหลือ ใช้ซื้อสินค้าได้จนถึงวันที่ 30 พ.ย. 2569{" "}
              <span className="font-bold">{formatNum(maxPurchase)} บาท</span>
            </li>
            <li>
              ยอดเงิน 40% ที่คุณต้องจ่ายโดยหักจาก G Wallet{" "}
              <span className="font-bold text-red-700">
                {formatNum(gWalletNeeded)} บาท
              </span>
            </li>
            <li>
              ยอดเงิน 60% ที่รัฐออกให้:{" "}
              <span className="font-bold text-green-900">
                {formatNum(val)} บาท
              </span>
            </li>
          </ul>,
        );
      }
      //
    } else if (calOption === "gWalletAmount") {
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      if (val > 666.67) {
        const gWalletNeeded = 666.67;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              เงินใน G Wallet ของคุณสามารถใช้ซื้อสินค้าได้จนถึงวันที่ 30 พ.ย.
              2569 จำนวน
              <span className="font-bold">1,666.67 บาท</span>
              โดยจะหักจากบัญชี G Wallet จำนวน{" "}
              <span className="font-bold text-rose-700">666.67 บาท</span>
            </li>
            <li>
              <p className="text-rose-700">
                ใช้สิทธิซื้อสินค้าได้สูงสุดไม่เกินวันละ 333.00 บาท
              </p>
            </li>
            <li>
              <p className="text-rose-700">
                ยอดข้างต้นยังไม่หักสิทธิที่ใช้ไปก่อนหน้า
                กรุณาคำนวนสิทธิจากมูลค่าคงเหลือวันนี้
                หรือสิทธิคงเหลือทั้งหมดอีกครั้ง
              </p>
            </li>
          </ul>,
        );
      } else if (val > 133.33) {
        const govCover = val * (60 / 40);
        const monthMaxPurchase = val + govCover;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              เงินใน G Wallet ของคุณสามารถใช้ซื้อสินค้าได้จนถึงวันที่ 30 พ.ย.
              2569 จำนวน{" "}
              <span className="font-bold">
                {formatNum(monthMaxPurchase)} บาท
              </span>
              โดยจะหักจากบัญชี G Wallet จำนวน{" "}
              <span className="font-bold text-rose-700">
                {formatNum(val)} บาท
              </span>
            </li>
            <li>
              <p className="text-rose-700">
                ใช้สิทธิซื้อสินค้าได้สูงสุดไม่เกินวันละ{" "}
                <span className="font-bold">333.33 บาท</span>
              </p>
            </li>
            <li>
              <p className="text-rose-700">
                ยอดข้างต้นยังไม่หักสิทธิที่ใช้ไปก่อนหน้า
                กรุณาคำนวนสิทธิจากมูลค่าคงเหลือวันนี้
                หรือสิทธิคงเหลือทั้งหมดอีกครั้ง
              </p>
            </li>
          </ul>,
        );
      } else {
        const govCover = val * (60 / 40);
        const maxPurchase = val + govCover;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              จำนวนเงินใน G Wallet ของคุณสามารถใช้ซื้อสินค้าได้สูงสุด{" "}
              <span className="font-bold">{formatNum(maxPurchase)} บาท</span>
              โดยจะหักจากบัญชี G Wallet จำนวน{" "}
              <span className="text-rose-700 font-bold">{val} บาท</span>
            </li>
            <li>
              <p className="text-rose-700">
                ใช้สิทธิซื้อสินค้าได้สูงสุดไม่เกินวันละ{" "}
                <span className="font-bold">333.33 บาท</span>
              </p>
            </li>
            <li>
              <p className="text-rose-700">
                ยอดข้างต้นยังไม่หักสิทธิที่ใช้ไปก่อนหน้า
                กรุณาคำนวนสิทธิจากมูลค่าคงเหลือวันนี้
                หรือสิทธิคงเหลือทั้งหมดอีกครั้ง
              </p>
            </li>
          </ul>,
        );
      }
    }
    //
    else if (calOption === "productPrice") {
      if (val < 0) {
        setWarningMessage("จำนวนเงินไม่ถูกต้อง");
        return;
      }
      if (val > 333.33) {
        const priceDif = val - 333.33;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <p className="text-rose-700">
                ราคาสินค้าเกินสิทธิสูงสุดต่อวัน 333.33 บาท
              </p>
            </li>
            <li>
              จำนวนเงิน 60 % ที่รัฐจ่ายให้{" "}
              <span className="text-green-900 font-bold">200 บาท</span>
            </li>
            <li>
              จำนวนเงิน 40% ที่คุณต้องจ่ายจาก G Wallet{" "}
              <span className="text-rose-700 font-bold">133.33 บาท</span>
            </li>
            <li>
              <p className="text-rose-700">
                ส่วนต่างที่เหลือที่คุณต้องจ่ายเต็มจำนวน{" "}
                <span className="font-bold">{formatNum(priceDif)} บาท</span>
              </p>
            </li>
            <li>
              <p className="text-rose-700">
                จำนวนเงินขั้นต่ำที่คุณต้องมีใน G Wallet:{" "}
                <span className="font-bold">
                  {formatNum(133.33 + priceDif)} บาท
                </span>
              </p>
            </li>
            <li>
              <p className="text-rose-700">
                ยอดข้างต้นยังไม่หักสิทธิที่ใช้ไปก่อนหน้า
                กรุณาเช็คสิทธิจากมูลค่าคงเหลือวันนี้
                หรือสิทธิคงเหลือทั้งหมดอีกครั้ง
              </p>
            </li>
          </ul>,
        );
      } else {
        const govCover = val * 0.6;
        const cusPay = val * 0.4;
        setResultMessage(
          <ul className="list-disc pl-5 space-y-1">
            <li>
              จำนวนเงิน 60 % ที่รัฐจ่ายให้{" "}
              <span className="text-green-900 font-bold">
                {formatNum(govCover)} บาท
              </span>
            </li>
            <li>
              จำนวนเงิน 40% ที่คุณต้องจ่ายจาก G Wallet{" "}
              <span className="text-rose-700 font-bold">
                {formatNum(cusPay)} บาท
              </span>
            </li>
            <li>
              <p className="text-rose-700">
                ยอดข้างต้นยังไม่หักสิทธิที่ใช้ไปก่อนหน้า
                กรุณาเช็คสิทธิจากมูลค่าคงเหลือวันนี้
                หรือสิทธิคงเหลือทั้งหมดอีกครั้ง
              </p>
            </li>
          </ul>,
        );
      }
    }
  };

  const handleClear = () => {
    setCalOption("todayRemaining");
    setInputValue("");
    setResultMessage(null);
    setWarningMessage(null);
  };

  // Map example image
  const getImageInfo = () => {
    switch (calOption) {
      case "todayRemaining":
        return {
          title: "รูปตัวอย่าง",
          src: "/pics/todayRemaining.jpg",
        };
      case "monthRemaining":
        return {
          title: "รูปตัวอย่าง",
          src: "/pics/monthRemaining.jpg",
        };
      case "gWalletAmount":
        return {
          title: "รูปตัวอย่าง",
          src: "/pics/gWalletAmount.jpg",
        };
      case "productPrice":
        return {
          title: "รูปตัวอย่าง",
          src: "/pics/productPrice.jpg",
        };
    }
  };

  const currentImageInfo = getImageInfo();

  const getInputLabel = () => {
    switch (calOption) {
      case "todayRemaining":
        return "มูลค่าคงเหลือวันนี้ (บาท)";
      case "monthRemaining":
        return "สิทธิคงเหลือ (บาท)";
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
          <option value="monthRemaining">สิทธิคงเหลือ</option>
          <option value="productPrice">ราคาสินค้า</option>
          <option value="gWalletAmount">เงินใน G Wallet</option>
        </select>
      </div>

      {/* Input field */}
      <div className="space-y-1">
        <div className="flex flex-row">
          <label className="block text-xs font-semibold text-gray-600">
            {getInputLabel()}
          </label>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-xs text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            ❓
          </button>
        </div>
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
          คำนวณ
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

      {/* Show sample picture */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-4 space-y-3 shadow-xl">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex justify-center">
              <img
                src={currentImageInfo.src}
                alt="ตัวย่างภาพหน้าจอ"
                className="w-full h-auto object-contain max-h-75"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-medium hover:bg-blue-700 transition-colors "
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
