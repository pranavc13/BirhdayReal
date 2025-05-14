import { useState } from "react"
import { motion } from "framer-motion"

type GuestbookProps = {
  handleBackToCategories: () => void
  friendName: string
}

// Sample messages - in a real app, these would come from a database or API
const birthdayMessages = [
 {
    id: 1,
    name: "Sonali",
    message: "Happy 21st birthday my cutie patootie. You're 21? I met you when we were 12? Crazy! Time flies bhai. Love you loads. You've been my Google maps jab smartphone bhi nahi the apne paas 😭 from lab manual ke peeche directions banana tere ghar ka to actually using it which is funny coz it did help me 😂. Take a revolution this birthday please and learn to drive (safely, bina kisi ki hatya karein). My blessings are forever with you puttar ji. ♥ With lots of love and mukki ke cheesling chips, Chaddi.",
    emoji: "🎂"
  },
  {
    id: 2,
    name: "Dolma",
    message: "Hi Riyu, happy birthadayyyy !! Abhi sab solve ho gya hai and now that we are friends again, I hope isske baad we don’t have any problems further and we can have fun and do stupid shit together. Ache se khao piyo , mazee kroo ..MISS YOU!!",
    emoji: "🎂"
  },
  {
    id: 3,
    name: "Ayushi",
    message: "Happiestt Birthdayyy Riya🥰😘, You're one of kindest friends I've got in college and I am so lucky to have you😌🫶🏻Believe me when I say I may not express it but I am so grateful for you and Pranav for always being there and sticking by my side through all the thick and thin in college♥I've left with less friends but I know that the people who are still there are gems♥ You are a gem💎 Pure at heart so please just remain like this ♥ I hope college k baad bhi hum aise hi rahe job k baad mile thora aur hangout kre🥹 May God bless you with everything you desire in your life because you truly deserve it♥ I wish saath celebrate kr paate ye din but koini clg aake kregeeee🥰 Abhi mast party krnaaaa after all it's your 21st it should be asa special as you are♥Have a great one 🥂  Lots and lots of love to you♥ Sending you virtual hugs and kisses 💋🫶🏻🫶🏻",
    emoji: "🎂"
  },
  {
    id: 4,
    name: "Tanishi",
    message: "Riya, happy birthday! 🥳💗 I can't believe we've known each other for almost two years now and have only gotten closer. Hamne pahle kbhi itna interact kyu nhi kia? Pr koi na 😹 I cherish this new bond of ours and bhai Indore ki trip toh hamesha yaad rahegi meko cllg ke friends ke sath first trip and it was with you guys isse badhiya kya hee ho skta h, it was epic! Hope riya day is as amazing as riya is, filled with love, laughter, and everything you wish for. Party hard, and may your birthday be lit! 🔥 Love you loads ❤ and keep smiling like that I absolutely love your smile 😚",
    emoji: "🎂"
  },
  {
    id: 5,
    name: "Aarushi",
    message: "Happyyy Birthdayyy Riyaaa!! 🥂 First of all, lots and lots of love on this wonderful day! I hope this message brings a huge smile to your face, my crazy, naughty girl!!😚Bhaiii you seriously made college life so much easier and way more bearable 🥹🫶🏻 and 205 mai jitni masti ki h na  humne — dance kiya, gossip kiya, pagalon ki tarah hassa aur haan gandi harkat 🌝 yaar I’m really gonna miss all this a lot. First time jab main tumse mili thi as “aastha ki roommate”  oh shit iss manjoos ka naam nhi lena tha sorry sorry😂 tab mujhe laga tha ki yaar yeh toh bahut bolti hai 🤭 aur yeh nhi pata tha ki humari vibe itni zyada match ho jaayegi aur waise bhi mujhe toh zyada bolne wale log hi pasand h 🥰💃 Thank youuu for being in my pados and I hope ki aage bhi pados mai hi raho kyuki abhi toh aur bhi masti krna baaki h aur khub badhiyaan badhiyaan kettle mai bana kr khaana h sath mai😌Cheers to all the memories we’ve created, and to many more to come! Stay healthy and crazy alwaysss Loveee youuu my darling a lottttt❤❤Sending you loads of kissies and huggies for all the madness, memories, and moments we’ve shared 😘",
    emoji: "🎂"
  },
    {
    id: 6,
    name: "Dikshika",
    message: "Riya’s birthday Hey Riyaaa💗 Happyy Birthdayyy to youuu, so glad for your existence literally a purest soul to ever exist . All those randoms chitchat and gossips I’ll cherish it forever. And idk when we gonna do our trendy dance reels we share with each other saying let’s do it together, so let’s do it now. So glad I found a dance partnerr. Love to be your friend , kindest one from our group tbh. Much more love and power to you cutieee. Have a good day. happy birthdayy💙💙💙 ~dikshikaa",
    emoji: "🎂"
  },
  {
    id: 7,
    name: "Priya",
    message: "Hey Riyaaaa!!!!!!🍕🫶🏻🫶🏻 I feel so blessed to have you as my very close friend. The time I’ve spent with you has been truly precious☺... raat ko gossip krna and apna poore din me kya hua share krna ,just like we do at home — these moments are everything!❤❤ You always feel like home to me. You've been there for me in every situation, offering comfort, support, and endless laughs. Me tumhare doorsi do akhe hu after you chasma 😂😂 — who else would understand this better than you?I genuinely hope we get to be roommates again, because you hold such a special place in my heart. ❤😭No matter what’s going on, I know I can talk to you about anything without hesitation. You never judge, you always listen, and your advice is exactly what I need.You are my soul sister 🫶🏻 — my constant, my safe space, and truly irreplaceable.✨Yours Darling 💋 Priya 💖",
    emoji: "🎂"
  },
  {
    id: 8,
    name: "Vaibhavi",
    message: "Hi Riya, a very very happy birthday to the sweetest n purest kid. University life would have been so boring without you . I’ve always enjoyed and cherished apne gossip sessions and telling every small detail about our lives to each other . At last, I’ll always wish the best of both worlds for youuu n million smiles n good health I love you Riyu🫶🏻 n cheers to 21",
    emoji: "🎂"
  },

  {
    id: 9,
    name: "Sagnik",
    message: "RIYAAAAA!!Happyyyyyy Birthdayyyyyy yaaaaar!Okay okay okay… pehle toh let me make it official:This is legit the FIRST EVER birthday note I’ve written for anyone in my life!Like seriously—na doston ke liye, na kisi crush ke liye, NAHI KISI KE LIYE.Only you had the power to break my no-note-writing streak. Tera impact dekh rahe ho? Proud feel kar rahi hai na?Tbh, ek note mein tujh jaisa legend describe karna is next to impossible—but chalo, koshish toh banta hai. Tere saath kabhi bore ho hi nahi sakte – itni lively, itni full of character, aur 100% dil se genuine. Honestly, life without your vibe feels incomplete—jaise pani puri bina teekha, ya maggi bina masala. Boring. Bilkul bekaar. Aaj tera special day hai, toh bas ek hi mission hai: Cake khaa, dance kar, aur sabko pareshan kar (jaise tu roz karti hai). Aur meri taraf se special birthday wishes: Tera RiyaOnReplay channel finally viral ho Tere ko finally tere crush mil jaye Aur tu hamesha aise hi awesome bani rahe Tu meri dost nahi, full VIP ho! Ab jaldi party decide kar warna note wapas le lunga!",
    emoji: "🎂"
  },
  {
    id: 10,
    name: "Himanshu",
    message: "Happy Birthday RIYA!!! 🎉Wishing you a day filled with laughter, love, and all the joy you so effortlessly spread to others. Working with you on our project has been such a fun and smooth ride—your friendly nature and positive vibes make everything better. Hope this year brings you tons of joy, success in everything you do, and moments that make you heart smile. Keep being your amazing self!!! Enjoy your special day to the fullest! 🥳🎂",
    emoji: "🎂"
  },
  {
    id: 11,
    name: "Vipanchi",
    message: "Happiest 21st RIYAA❤😘😍 have a bday as amazing as u r and miss me thoda too cuz i certainly miss u. I really wish i was there to smash a cake on ur face but yeh dooriyaa uff 😔I can't believe a tingu person like u is 21 already, shaadi karlo abh jaldii hehe,mujhe lehenga pehenna hai . Also Goa trip jana haiii but waitsss let me honour u on ur bday with my words first😉Uhmm so shuru kaha se karu ?friendship with u has been such a roller -coaster , I still remember phy ka class with u.  I never thought ek phy class se itni achi dosti ho jayegi and now I'm damn grateful ki Pradeep Kumar Kashyap ko liya tha warna aap Ms. Annoyingly cute Riya Megta se mulaaqat kaise hoti. 1st year ke starting mei we weren't that close but gradually we just became soo close and it felt like we belonged together.  That's what I love about us , it just feels like we fit together and u totally match my craziness and self loving character😂  Bolte hai nah kuch logo ke sath time spend karke sabh Acha ho Jata hai , u r one of those people for me and I'm glad I get to share my college days with u and ur bak-bak. Bas tumhare aur pranav ke saath time kaise beet jaata hai bakwaas karke pata hi nhi chalta. But yaar pranav nhi hota toh pakka hum dono date kar rahe hote, woh bandar third wheeling karta rehta hai🥹 usne meri bandi chura li but koi nah tumhare saath situationship bhi chalegaa 🤭 advitya with u was so funnn, itne saare photos liya bhai sahab pura gallery bas humari photos se bhara tha😂 my fav thing about u is how u promise ull do everything but phir kuch nhi karti and then pranav aur mei bitching karte hai🤭  Mazak bohot udha liya abh serious talks!!! Ok so I really am glad to have u, college feels less of a hell with u and our bak-bak. I just hope yeh dosti just becomes stronger so that I can complain about u to ur kids in 15 years xD  Chalo bohot likh liyya , Shayad padha bhi nhi hoga pura lazy riya ne . If u do read it pura toh msg me on whatsapp warna katttiii😒 You know I love uu Have a great bdayyy  Bhagwaan se Dua Hai ki aapki height aur dimaag dono badh jaaye💋 Your perfect all rounder bestie(and future mausi) Vipanchiiiiiii",
    emoji: "🎂"
  },
  {
    id: 12,
    name: "Gargi",
    message: "Happiest Birthday Riya !!!🥳🥳🥳Pata hai, hum zyada time se nahi mile hain, but still, it feels like I've known you much longer. Making reels together has made us come closer 😂...will forever remember the truth dare and uno ...  Hostel ke alag floors aur rooms chahe ho, connection toh dil ka hai na? May God bless you with sundar sundar ache ladke 🌚Enjoy your day to the fullest and once Again wishing you a Happy Birthday 🥰",
    emoji: "🎂"
  },
]

const Guestbook = ({ handleBackToCategories, friendName }: GuestbookProps) => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [nameInput, setNameInput] = useState("")
  const [messageInput, setMessageInput] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12
      }
    }
  }
  
  // Handle message selection
  const handleMessageClick = (id: number) => {
    setSelectedMessage(selectedMessage === id ? null : id)
  }
  
  // Handle message submission
  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (nameInput.trim() && messageInput.trim()) {
      // In a real app, this would send data to a server
      // For this demo, just show thank you message
      setShowThankYou(true)
      setNameInput("")
      setMessageInput("")
      
      // Hide thank you message after 3 seconds
      setTimeout(() => {
        setShowThankYou(false)
      }, 3000)
    }
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="max-w-4xl w-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-pink-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center text-5xl mb-4" variants={itemVariants}>
          ✉️
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
          variants={itemVariants}
        >
          {friendName}'s Birthday Guestbook
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-8"
          variants={itemVariants}
        >
          Birthday wishes from friends and family
        </motion.p>
        
        {/* Message cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
          variants={containerVariants}
        >
          {birthdayMessages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`p-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer ${
                selectedMessage === msg.id 
                  ? 'bg-gradient-to-r from-pink-100 to-purple-100 scale-[1.02] shadow-lg' 
                  : 'bg-gray-50 hover:bg-pink-50'
              }`}
              onClick={() => handleMessageClick(msg.id)}
              variants={itemVariants}
              whileHover={{ scale: selectedMessage === msg.id ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{msg.emoji}</div>
                <div>
                  <h3 className="font-bold text-purple-700">{msg.name}</h3>
                  <p className={`text-gray-700 transition-all duration-300 ${
                    selectedMessage === msg.id ? 'line-clamp-none' : 'line-clamp-2'
                  }`}>
                    {msg.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Add a message form */}
        <motion.div
          className="bg-gray-50 p-6 rounded-xl mb-6"
          variants={itemVariants}
        >
          <h3 className="font-bold text-xl mb-4 text-purple-700">Leave a Birthday Message</h3>
          
          {showThankYou ? (
            <motion.div 
              className="bg-green-100 text-green-700 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Thank you for your message! {friendName} will appreciate it.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmitMessage}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Birthday Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Write your birthday message here..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Birthday Wish
              </motion.button>
            </form>
          )}
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleBackToCategories}
            className="px-6 py-2 bg-white text-purple-600 border-2 border-purple-300 font-medium rounded-full shadow-md hover:bg-purple-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Categories
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Guestbook