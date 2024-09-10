import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Web3 } from 'web3';
import { ZKsyncPlugin } from 'web3-plugin-zksync';

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Book, Rocket, Video, Star, Gift } from 'lucide-react'

export default function LandingPage() {
  const [isSticky, setIsSticky] = useState(false)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const [donationAmount, setDonationAmount] = useState('')
  const [walletId, setWalletId] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  
  const web3 = new Web3('https://sepolia.era.zksync.dev'); // zkSync RPC URL
  web3.registerPlugin(new ZKsyncPlugin('https://sepolia.era.zksync.dev')); 

  // Generate a random wallet
  const account = web3.eth.accounts.create();

  // Display the wallet's address and private key
  console.log("Address:", account.address);
  console.log("Private Key:", account.privateKey);

  const provider = new Web3.providers.HttpProvider('https://rpc.ankr.com/solana_devnet'); // Replace with your Infura Project ID
  web3.setProvider(provider);
  
  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleRecipientAddressChange = (e) => {
    setRecipientAddress(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.hero-section')?.clientHeight
      if (bannerHeight) {
        setIsSticky(window.scrollY > bannerHeight - 80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDonateClick = () => {
    setIsDonationModalOpen(true)
  }

  const handleDonation = async (e) => {
    e.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];

      console.log(`Sending ${donationAmount} ETH to ${recipientAddress} from ${sender}`);

      const tx = await web3.eth.sendTransaction({
        from: sender,
        to: recipientAddress,
        value: web3.utils.toWei(donationAmount, 'ether'),
      });

      console.log(`Transaction successful with hash: ${tx.transactionHash}`);
      setIsDonationModalOpen(false); // Close the modal on success
      setDonationAmount('');
      setWalletId('');
      setRecipientAddress('');
    } catch (error) {
      console.error('Error sending donation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40&text=🚀" alt="KidLearn Logo" width={40} height={40} className="rounded-full" />
            <span className={`text-2xl font-bold ${isSticky ? 'text-blue-600' : 'text-white'}`}>KidLearn</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Home</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Subjects</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Games</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Parents</a>
          </nav>
          <div className="flex space-x-4">
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-500 rounded-full font-bold">Log In</Button>
            <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full font-bold" onClick={handleDonateClick}>Donate</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Other sections omitted for brevity */}
        
        <Dialog open={isDonationModalOpen} onOpenChange={setIsDonationModalOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-800">Donate to KidLearn</DialogTitle>
              <DialogDescription className="text-blue-600">
                Your donation helps provide tablets and educational resources to children in need.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleDonation}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="donation-amount" className="text-right text-blue-800">
                    Amount (ETH)
                  </Label>
                  <Input
                    id="donation-amount"
                    type="number"
                    step="0.01"
                    placeholder="0.1"
                    className="col-span-3"
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="recipient-address" className="text-right text-blue-800">
                    Recipient Address
                  </Label>
                  <Input
                    id="recipient-address"
                    placeholder="0x..."
                    className="col-span-3"
                    value={recipientAddress}
                    onChange={handleRecipientAddressChange}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-green-500 text-white hover:bg-green-600 rounded-full font-bold">
                  Donate
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=40&text=🚀" alt="KidLearn Logo" width={40} height={40} className="rounded-full bg-white" />
              <span className="text-2xl font-bold">KidLearn</span>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="hover:text-yellow-300">Home</a>
              <a href="#" className="hover:text-yellow-300">Subjects</a>
              <a href="#" className="hover:text-yellow-300">Games</a>
              <a href="#" className="hover:text-yellow-300">Parents</a>
              <a href="#" className="hover:text-yellow-300">Donate</a>
            </nav>
          </div>
          <div className="mt-8 text-center">
            <p>© 2023 KidLearn. All rights reserved. Making learning fun and accessible for kids everywhere!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
