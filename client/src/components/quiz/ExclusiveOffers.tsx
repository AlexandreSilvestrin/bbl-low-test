import React from 'react';
import { Button } from "@/components/ui/button";

interface ExclusiveOffersProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function ExclusiveOffers({ onNext, onPrevious }: ExclusiveOffersProps) {
  const gifts = [
    {
      title: "Sexy Minds",
      description: "The secret training with video lessons and affirmations to help you not only transform your body, but become a sexy, powerful, confident woman that everyone admires.",
      // Placeholder for image source - will need to determine actual asset paths
      image: "/placeholder-image.jpg"
    },
    {
      title: "Better Shape",
      description: "The revolutionary self-massage technique with simple videos to add to your daily routine — sculpt your curves and eliminate water retention.",
      image: "/placeholder-image.jpg"
    },
    {
      title: "\"Perfect Fit\" Workshop",
      description: "A complete class revealing the secret trick celebrities use to know exactly which outfits flatter their curves — and how to do the same with the clothes you already own.",
      image: "/placeholder-image.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            You've unlocked 3 exclusive gifts!
          </h1>
        </div>

        <div className="space-y-6">
          {gifts.map((gift, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#ea749b] mb-2 text-center">{gift.title}</h3>
              <div>
                <p className="text-gray-600 text-sm text-center">{gift.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="max-w-md mx-auto">
            <Button
              onClick={onNext}
              className="w-full bg-[#ea749b] hover:bg-[#e85a8a] text-white font-bold py-4 px-8 rounded-3xl text-base transition-all duration-200"
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 