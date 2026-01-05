import { useState } from 'react';
import background from '../assets/background.jpg'
import title from '../assets/Title.png'

const HomePage = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1ed9f39f-a637-4626-89ea-81c02f3c88f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={background}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div>
          <img src={title} className='absolute z-50' />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <form
            onSubmit={onSubmit}
            className="w-[90%] max-w-md rounded-2xl border border-white/20 
                 bg-white/10 backdrop-blur-md p-8 text-white shadow-xl
                 flex flex-col gap-6 mt-6"
          >

            <h2 className="text-2xl font-semibold tracking-wide text-center">
              Share Your Idea
            </h2>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="bg-transparent border border-white/30 rounded-lg px-4 py-2
                     outline-none focus:border-blue-400 transition font-normal"
              />
            </div>

            <input type="email" name="email" className="hidden" />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Your Idea</label>
              <textarea
                name="message"
                required
                rows="4"
                className="bg-transparent border border-white/30 rounded-lg px-4 py-2
                     resize-none outline-none focus:border-blue-400 transition font-normal"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-blue-500/90 py-2 font-medium
                   hover:bg-blue-600 transition"
            >
              Publish
            </button>

            {result && (
              <span className="text-center text-sm font-normal">{result}</span>
            )}
          </form>
        </div>
      </div>

      <footer className='text-gray-400 absolute bottom-4 left-36 text-xs font-normal'>
        &copy; naayann | v.1.0
      </footer>
    </>
  )
}

export default HomePage
