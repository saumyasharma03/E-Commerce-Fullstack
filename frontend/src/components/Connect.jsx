import React from 'react';


const FeaturePage = () => {
    const handleClick = () => {
        window.location.href = 'http://localhost:3000/';
    };
  return (
    <div className="bg-slate-10 min-h-screen">
      {/* Hero Section with a New Background Image */}
      <div className="bg-bannerx bg-cover bg-center h-96 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Introducing Virtual Connect</h1>
      </div>

      {/* Feature Description */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-tertiary mb-4">The Future of Buyer-Seller Interaction</h2>
        <p className="text-lg text-gray-50 mb-8">
          Virtual Connect revolutionizes the way buyers and sellers interact, offering real-time communication through video calling. This feature eliminates the distance between you and your customers, bringing a personal touch to every transaction. With Virtual Connect, you can discuss product details, answer questions instantly, and build trust with your customers, all from the comfort of your own space.
        </p>
        <p className="text-lg text-gray-50 mb-8">
          By connecting virtually, sellers can showcase products more effectively, offering live demonstrations and addressing customer concerns on the spot. Buyers, in turn, gain confidence in their purchasing decisions, knowing they have a direct line to the seller. This enhanced communication leads to better customer satisfaction, fewer returns, and a stronger relationship between buyers and sellers.
        </p>
        <p className="text-lg text-gray-50 mb-8">
          Whether you're a small business owner or an online shopping enthusiast, Virtual Connect provides a seamless and secure platform for engaging with your customers. It's time to take your e-commerce experience to the next level with face-to-face interactions that drive sales and build loyalty.
        </p>
        <button onClick={handleClick} className='btn_dark_rounded my-5 w-full !rounded-md'>
            Get Started
        </button>
      </div>
    </div>
  );
};

export default FeaturePage;
