import React from "react";

const nfts = [
  { name: "Roma Avenue", value: "0.91 Ether", change: "+10%", color: "text-green-500" },
  { name: "Thorian Park", value: "0.89 Ether", change: "+19%", color: "text-green-500" },
  { name: "Linda Mansion", value: "1.1 Ether", change: "-17%", color: "text-red-500" },
  { name: "Villa Mary", value: "0.71 Ether", change: "+22%", color: "text-green-500" },
];

const NFTsOwned = () => {
    // NFTsOwned component is rendered here
  return (
    // Removed inline styles and used Tailwind CSS classes
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">NFTs owned</h3>
      <div className="space-y-3">
        {nfts.map((nft, index) => (
          <div key={index} className="p-3 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="text-xs text-gray-700">{nft.name}</h4> {/* Reduced font size & removed bold */}
              <p className="text-gray-600 text-xs flex items-center">
                <span className="mr-1">🪙</span> {nft.value}
              </p>
            </div>
            <span className={`text-xs font-bold ${nft.color}`}>{nft.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTsOwned;
