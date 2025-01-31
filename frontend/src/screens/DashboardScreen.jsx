import React from 'react'
import PropertyCarousel from '../components/PropertyCarousel'
import InvestmentStats from "../components/InvestmentStats";
import MyPortfolio from '../components/MyPotfolio';
import NFTsOwned from '../components/NFtsOwned';
const DashboardScreen = () => {
  return (
<div className="container mx-auto px-4">
  {/* Top Section */}
  <div className="flex justify-between items-center mt-5">
    <h5 className="text-2xl text-gray-500">NFT Marketplace</h5>
  </div>

  <div className="grid grid-cols-2 gap-6">
    <div className="dashboard-container" style={{ width: "calc(100% / 2)" }}>
      <PropertyCarousel />
    </div>
    <div className="dashboard-container">
      <InvestmentStats />
    </div>
  </div>

  {/* Bottom Section - Removing Unwanted Space */}
  <div className="flex justify-between items-center">
  </div>

  <div className="grid grid-cols-2 gap-6">
    <div className="dashboard-container" style={{ width: "calc(100% / 2)" }}>
      <NFTsOwned />
    </div>
    <div className="dashboard-container">
      <MyPortfolio />
    </div>
  </div>
</div>

  
  )
}

export default DashboardScreen