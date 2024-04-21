import React, { useState } from "react";
import { FaHeart, FaPlus, FaUser } from "react-icons/fa";

const Index = () => {
  const [wishes, setWishes] = useState([
    { id: 1, text: "I wish there were an app that calculates my Uber rides", likes: 5 },
    { id: 2, text: "I wish there were an app that saves my receipts", likes: 3 },
    { id: 3, text: "I wish there were an app that helps me save my notes", likes: 8 },
  ]);

  const [newWish, setNewWish] = useState("");

  const handleAddWish = () => {
    if (newWish.trim() !== "") {
      const wish = {
        id: wishes.length + 1,
        text: newWish,
        likes: 0,
      };
      setWishes([...wishes, wish]);
      setNewWish("");
    }
  };

  const handleLike = (id) => {
    const updatedWishes = wishes.map((wish) => {
      if (wish.id === id) {
        return { ...wish, likes: wish.likes + 1 };
      }
      return wish;
    });
    setWishes(updatedWishes);
  };

  const sortedWishes = wishes.sort((a, b) => b.likes - a.likes);

  return (
    <div className="bg-black min-h-screen text-white font-poppins">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto">I Wish</h1>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded mr-4">
            Sign Up <FaUser className="inline-block ml-2" />
          </button>
          <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setNewWish("")}>
            Add My Wish <FaPlus className="inline-block ml-2" />
          </button>
        </div>
      </header>
      <main className="container mx-auto py-8">
        {newWish !== "" && (
          <div className="mb-8">
            <textarea className="w-full bg-gray-800 rounded p-4 mb-4" value={newWish} onChange={(e) => setNewWish(e.target.value)} placeholder="Enter your wish..."></textarea>
            <button className="bg-white text-black px-4 py-2 rounded" onClick={handleAddWish}>
              Submit Wish
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedWishes.map((wish) => (
            <div key={wish.id} className="bg-gray-900 rounded-lg p-6 relative">
              <p>{wish.text}</p>
              <button className="absolute bottom-4 right-4 text-red-500 hover:text-red-700" onClick={() => handleLike(wish.id)}>
                <FaHeart className="text-2xl transition-transform duration-300 transform hover:scale-125" />
              </button>
              <span className="absolute bottom-4 right-12">{wish.likes}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
