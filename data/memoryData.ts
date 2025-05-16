interface MemoryItem {
  image: string;
  caption: string;
  layout?: "portrait" | "landscape";
  type?: "image" | "video"; // ✅ Added support for videos
}

type MemoryLanesType = Record<string, MemoryItem[]>;

export const memoryLanes: MemoryLanesType = {
  Sonali: [
    {
      image: "/images/sonali/sonali1.jpg",
      caption: "Little Riru",
      layout: "portrait",
    },
    {
      image: "/images/sonali/sonali2.jpg",
      caption: "Banda-Riya!🐒🎀",
      layout: "portrait",
    },
    {
      image: "/images/sonali/sonali3.jpg",
      caption: "",
      layout: "portrait",
    },
    {
      image: "/images/sonali/sonali4.jpg",
      caption: "",
      layout: "portrait",
    },
    {
      image: "/images/sonali/sonali5.jpg",
      caption: "",
      layout: "landscape",
    },
    {
      image: "/images/sonali/sonali6.jpg",
      caption: "",
      layout: "landscape",
    },
  ],
  Vipanchi: [
    {
      image: "/images/Vipanchi/Vipanchi11.jpg",
      caption: "Our first photo saath main! 🥹",
      layout: "landscape",
    },
    {
      image: "/images/Vipanchi/Vipanchi5.jpg",
      caption: "Riya ANWESH ne dekh liya toh?? Door hato merese!🙈😳👉👈",
      layout: "portrait",
    },
    {
      image: "/images/Vipanchi/Vipanchi3jpg.jpg",
      caption: "MY GF!🧸ྀི❤️",
      layout: "portrait",
    },
    {
      image: "/images/Vipanchi/Vipanchi4.jpg",
      caption: "Pallu Latkeeee!!💛💛💛💛💛💛",
      layout: "portrait",
    },
    {
      image: "/images/Vipanchi/Vipanchi1.jpg",
      caption: "Two halves of one jhumka🦢🪞💌",
      layout: "landscape",
    },
    {
      image: "/images/Vipanchi/Vipanchi2.jpg",
      caption: "Bond stronger than your wifi 😏😚",
      layout: "portrait",
    },
    {
      image: "/images/Vipanchi/Vipanchi6.jpg",
      caption: "From silly selfies to deep talk- u r mu fave annoying person💋",
      layout: "portrait",
    },
    {
      image: "/images/Vipanchi/Vipanchi7.jpg",
      caption: "Def the Prettiest duo - spotify should pay us for the vibe we bring 💃✨",
      layout: "landscape",
    },
  ],
  Tanishi: [
    {
      image: "/images/Tanishi/Tanishi.jpg",
      caption: "Sweety 💗ྀི",
      layout: "landscape",
    },
  ],
  Vaibhavi: [
    {
      image: "/images/Vaibhavi/Vaibhavi1.jpg",
      caption: "Sem1 ka cringe phase😬👅",
      layout: "portrait",
    },
    {
      image: "/images/Vaibhavi/Vaibhavi2.jpg",
      caption: "To attending all college functions together💃🏻🪩🎊",
      layout: "landscape",
    },
    {
      image: "/images/Vaibhavi/Vaibhavi3.jpg",
      caption: "To cutest pictures of all times🤭❤",
      layout: "portrait",
    },
    {
      image: "/images/Vaibhavi/Vaibhavi4.jpg",
      caption: "To being there for each other 🫂🫶🏻✨",
      layout: "portrait",
    },
    {
      image: "/images/Vaibhavi/Vaibhavi5.jpg",
      caption: "To having the most memorable moments n surviving “VIT”🤢 together 🥹👩🏻‍❤‍💋‍👩🏻🫀",
      layout: "portrait",
    },
    {
      image: "/images/Vaibhavi/Vaibhavi6.jpg",
      caption: "We have endured it all and we’re now a family❤🫂🧿I LOVE YOU SO MUCH RIYA❤",
      layout: "portrait",
    },
  ],
  Dikshika: [
    {
      image: "/images/Dikshika/Dikshika1.jpg",
      caption: "Sweetest Person Alive 🫶🏻🥹❤️‍🩹",
    },
    {
      image: "/images/Dikshika/Dikshika2.jpg",
      caption: "One of my favourite photos of us together! 🥹",
    },
    {
      image: "/images/Dikshika/Dikshika3.jpg",
      caption: "Thank you for being you! 🫶🏻This world needs more kind people like you˚.🎀༘⋆",
      layout: "portrait",
    },
  ],
  Aarushi: [
    {
      image: "/images/Aarushi/Aarushi1.jpg",
      caption: "Alexa play, desi girlll 💃",
    },
    {
      image: "/images/Aarushi/Aarushi2.jpg",
      caption: "Aree koi pose bataoo, woohhoo aa gyi acchi😍",
    },
    {
      image: "/images/Aarushi/Aarushi3.jpg",
      caption: "Ek candid lete h haste huye ek dusare ko, hasso hasso photo acchi aayegi 🥰",
      layout: "portrait",
    },
    {
      image: "/images/Aarushi/Aarushi4.jpg",
      caption: "Ek neeche baith k bhi lete h floor saaf ho jaayegi 🤭",
      layout: "portrait",
    },
    {
      image: "/images/Aarushi/Aarushi5.jpg",
      caption: "My pyaariii padosaan ♾️🫶🏻",
      layout: "landscape",
    },
  ],
  Ayushi: [
    {
      image: "/images/Ayushi/Ayushi1.jpg",
      caption: "desi coded girls🫶🏻",
    },
    {
      image: "/images/Ayushi/Ayushi2.jpg",
      caption: "desi coded girls🫶🏻",
      layout: "landscape",
    },
  ],
  Priya: [
    {
      image: "/images/Priya/Priya1.jpg",
      caption: "desi coded girls🫶🏻",
      layout: "portrait",
    },
    {
      image: "/images/Priya/Priya2.jpg",
      caption: "desi coded girls🫶🏻",
      layout: "portrait",
    },
    {
      image: "/images/Priya/Priya3.jpg",
      caption: "desi coded girls🫶🏻",
      layout: "portrait",
    },
    {
      image: "/images/Priya/Priya4.jpg",
      caption: "desi coded girls🫶🏻",
      layout: "portrait",
    },
    {
      image: "/images/Priya/Video1.mp4", 
      caption: "Video moments > everything! 🎥💕",
      layout: "landscape",
      type: "video",
    },
  ],
};
