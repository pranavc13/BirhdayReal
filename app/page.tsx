"use client"

import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

// Data imports
import { foodData } from "@/data/foodData"
import { hindiSongs } from "@/data/songData"
import { memoryLanes } from "@/data/memoryData"

// Stage components
import Countdown from "@/components/stages/Countdown"
import Greeting from "@/components/stages/Greeting"
import VideoSection from "@/components/stages/VideoSection"
import CategorySelection from "@/components/stages/CategorySelection"
import ResultPage from "@/components/stages/ResultPage"
import PartyRoom from "@/components/stages/PartyRoom"
import Guestbook from "@/components/stages/Guestbook"
import MemoryLane from "@/components/stages/MemoryLane"
import MemoryLaneSelector from "@/components/stages/memory-lane-selector"
import PhotoBoothResult from "@/components/stages/PhotoBoothResult"

// Modal components
import MessageModal from "@/components/modals/MessageModal"
import PoemModal from "@/components/modals/PoemModal"
import GiftModal from "@/components/modals/GiftModal"
import SongListModal from "@/components/modals/SongListModal"
import PhotoBoothModal from "@/components/modals/PhotoBoothModal"

// Hooks
import { useCountdown } from "@/hooks/useCountdown"
import { useBirthdayAudio } from "@/hooks/useBirthdayAudio"

// UI components
import Particles from "@/components/Particles"

// Friend's name
const FRIEND_NAME = "Riyaaaaaaaaaaa"

// Default places in case foodData doesn't have them
const DEFAULT_PLACES = [
  // "Taj Mahal Palace",
  "The Table",
  // "Bombay Canteen",
  // "Trishna",
  // "Ishaara",
  // "Yauatcha",
  // "Bastian",
  // "Masque"
]

// Types
type Memory = {
  id?: number | string
  image: string
  caption: string
}

export type Stage =
  | "countdown"
  | "greeting"
  | "video"
  | "selection"
  | "result"
  | "partyRoom"
  | "guestbook"
  | "slideshow"
  | "memoryLaneSelector" // New stage for memory lane selection
  | "memoryLane" // Updated stage for specific memory lane
  | "poem"
  | "gift"
  | "photoBoothResult"

export default function BirthdaySurprise() {
  // Core state management
  const [stage, setStage] = useState<Stage>("countdown")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDish, setSelectedDish] = useState<string | null>(null)
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null)

  // Memory lane state
  const [selectedMemoryLane, setSelectedMemoryLane] = useState<string | null>(null)

  // Modal states
  const [showMessage, setShowMessage] = useState(false)
  const [showPoem, setShowPoem] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const [showPhotoBoothModal, setShowPhotoBoothModal] = useState(false)
  const [showSongList, setShowSongList] = useState(false)

  // Photo state
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null)

  // Hooks
  const { countdownTime, countdownEnded } = useCountdown()
  const { audioRef, isMuted, toggleMute } = useBirthdayAudio()

  // Video reference
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle category selection and result generation
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)

    // Safely get category data
    const categoryData = foodData[category as keyof typeof foodData]
    
    // Randomly select a dish
    const randomDishIndex = Math.floor(Math.random() * categoryData.dishes.length)
    const dish = categoryData.dishes[randomDishIndex]
    
    // Use default places since places array was removed
    const randomPlaceIndex = Math.floor(Math.random() * DEFAULT_PLACES.length)
    const place = DEFAULT_PLACES[randomPlaceIndex]

    setSelectedDish(dish)
    setSelectedPlace(place)
    setStage("result")
  }

  // Try another random selection
  const handleTryAgain = () => {
    if (selectedCategory) {
      const categoryData = foodData[selectedCategory as keyof typeof foodData]
      
      // Get new random dish
      const randomDishIndex = Math.floor(Math.random() * categoryData.dishes.length)
      const dish = categoryData.dishes[randomDishIndex]
      
      // Get new random place from default places
      const randomPlaceIndex = Math.floor(Math.random() * DEFAULT_PLACES.length)
      const place = DEFAULT_PLACES[randomPlaceIndex]

      setSelectedDish(dish)
      setSelectedPlace(place)
    }
  }

  // Generate poem
  const generatePoem = () => {
    setShowPoem(true)
  }

  // Open gift
  const openGift = () => {
    setShowGift(true)
  }

  // Open photo booth
  const openPhotoBooth = () => {
    setShowPhotoBoothModal(true)
  }

  // Back to categories
  const handleBackToCategories = () => {
    setStage("selection")
  }

  // Memory lane navigation handlers
  const handleOpenMemoryLaneSelector = () => {
    setStage("memoryLaneSelector")
  }

  const handleSelectMemoryLane = (laneName: string) => {
    setSelectedMemoryLane(laneName)
    setStage("memoryLane")
  }

  const handleBackToMemoryLaneSelector = () => {
    setStage("memoryLaneSelector")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 overflow-hidden relative">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Particles />
      </div>

      {/* Audio player */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        className="hidden"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {/* Audio control button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-50 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors hover:scale-110 active:scale-95"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Stage components */}
      <AnimatePresence mode="wait">
        {stage === "countdown" && <Countdown setStage={setStage} videoRef={videoRef} />}

        {stage === "greeting" && <Greeting setStage={setStage} videoRef={videoRef} />}

        {stage === "video" && (
          <VideoSection
            videoRef={videoRef}
            handleSkipVideo={() => setStage("selection")}
            handleVideoEnd={() => setStage("selection")}
          />
        )}

        {stage === "selection" && (
          <CategorySelection
            handleCategorySelect={handleCategorySelect}
            generatePoem={generatePoem}
            openGift={openGift}
            openPhotoBooth={openPhotoBooth}
            setStage={setStage}
            countdownTime={countdownTime}
            countdownEnded={countdownEnded}
            handleOpenMemoryLaneSelector={handleOpenMemoryLaneSelector} // Add memory lane selector option
          />
        )}

        {stage === "result" && selectedDish && selectedPlace && (
          <ResultPage
            selectedDish={selectedDish}
            selectedPlace={selectedPlace}
            handleTryAgain={handleTryAgain}
            handleBackToCategories={handleBackToCategories}
            setShowMessage={setShowMessage}
            friendName={FRIEND_NAME}
          />
        )}

        {stage === "partyRoom" && (
          <PartyRoom
            handleBackToCategories={handleBackToCategories}
            openPhotoBooth={openPhotoBooth}
            setShowSongList={setShowSongList}
            friendName={FRIEND_NAME}
          />
        )}

        {stage === "guestbook" && (
          <Guestbook handleBackToCategories={handleBackToCategories} friendName={FRIEND_NAME} />
        )}

        {/* Memory Lane Selector Stage */}
        {stage === "memoryLaneSelector" && (
          <MemoryLaneSelector
            memoryLaneNames={Object.keys(memoryLanes)}
            onSelectLane={handleSelectMemoryLane}
            handleBackToCategories={handleBackToCategories} 
          />
        )}

        {/* Individual Memory Lane Stage */}
        {stage === "memoryLane" && selectedMemoryLane && (
          <MemoryLane
            handleBackToCategories={handleBackToMemoryLaneSelector}
            memoryLanes={memoryLanes[selectedMemoryLane]}
            title={`${selectedMemoryLane}'s Memory Lane`}
          />
        )}

        {/* Legacy slideshow stage - can be redirected to memory lane selector */}
        {stage === "slideshow" && (
          <MemoryLaneSelector
            memoryLaneNames={Object.keys(memoryLanes)}
            onSelectLane={handleSelectMemoryLane}
            handleBackToCategories={handleBackToCategories} // Pass the handler
          />
        )}

        {stage === "photoBoothResult" && capturedPhoto && (
          <PhotoBoothResult
            capturedPhoto={capturedPhoto}
            handleBackToCategories={handleBackToCategories}
            setStage={setStage}
            friendName={FRIEND_NAME}
          />
        )}
      </AnimatePresence>

      {/* Modals */}
      <MessageModal
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        selectedDish={selectedDish}
        selectedPlace={selectedPlace}
        friendName={FRIEND_NAME}
      />

      <PoemModal showPoem={showPoem} setShowPoem={setShowPoem} friendName={FRIEND_NAME} />

      <GiftModal showGift={showGift} setShowGift={setShowGift} openGift={openGift} friendName={FRIEND_NAME} />

      <PhotoBoothModal
        showPhotoBoothModal={showPhotoBoothModal}
        setShowPhotoBoothModal={setShowPhotoBoothModal}
        setCapturedPhoto={setCapturedPhoto}
        setStage={setStage}
      />

      <SongListModal
        showSongList={showSongList}
        setShowSongList={setShowSongList}
        hindiSongs={hindiSongs}
        audioRef={audioRef}
      />
    </div>
  )
}