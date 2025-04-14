import React, { useState, useEffect } from "react";

const DonateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    amount: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.cardNumber ||
      !formData.expiryDate ||
      !formData.cvc ||
      !formData.amount
    ) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    setShowMessage(true);
    setTimeout(() => {
      toggleModal();
    }, 2000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <button
        onClick={toggleModal} // Викликає відкриття модального вікна
        className="bg-[#E5E7EB] text-black py-2 px-4 rounded-full hover:bg-[#D1D5DB] transition ml-auto flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-5 w-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16M4 12h16"
          />
        </svg>
        Задонатити
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target.id === "backdrop") toggleModal();
          }}
          id="backdrop"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 w-full max-w-lg shadow-2xl relative text-black transform translate-y-[-20%]">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center text-[#2563EB]">
              Донат картою
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium mb-1">
                  Номер картки
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] placeholder-gray-500 border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="expiry-date" className="block text-sm font-medium mb-1">
                    MM/YY
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="12/25"
                    className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] placeholder-gray-500 border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc" className="block text-sm font-medium mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] placeholder-gray-500 border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Сума (₴)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="100"
                  className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] placeholder-gray-500 border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1E40AF] py-2 rounded-lg transition font-semibold text-white"
              >
                Надіслати
              </button>
            </form>

            <div className="my-5 text-center text-gray-500">або</div>

            <a
              href="https://send.monobank.ua/jar/ВАШ_ID_БАНКИ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-[#F3F4F6] border border-[#D1D5DB] text-black py-2 rounded-lg hover:bg-[#E5E7EB] transition-all"
            >
              Донатити через Monobank 💳
            </a>

            {showMessage && (
              <div className="mt-6 text-green-500 text-center font-semibold">
                Дякуємо за ваш донат! 💚
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DonateModal;
