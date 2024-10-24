import { FaDice, FaChessKnight, FaDiceD20, FaCoins, FaHandHoldingUsd, FaGem, FaCrown, FaChess } from "react-icons/fa";
import { CasinoSlideData } from "@/types/carousel";


export const casinoSlides: CasinoSlideData[] = [
  {
    imagePath: "/images/images01.jpeg",
    description: "A luxurious casino experience with high-stakes games and fine decor.",
    badge: <FaDice color="#FF5733" />,
    activityName: "The Ultimate Gambling Experience",
  },
  {
    imagePath: "/images/images02.jpeg",
    description: "Fast-paced blackjack tables where strategy and luck meet.",
    badge: <FaDiceD20 color="#FF33A5" />,
    activityName: "Beat the Dealer",
  },
  {
    imagePath: "/images/images03.jpeg",
    description: "Experience the thrill of spinning the wheel and winning big.",
    badge: <FaChessKnight color="#3357FF" />,
    activityName: "Spin to Win",
  },
  {
    imagePath: "/images/images04.jpeg",
    description: "Enter the world of professional poker with sharp skills and bluffs.",
    badge: <FaDiceD20 color="#FF33A5" />,
    activityName: "High-Stakes Showdown",
  },
  {
    imagePath: "/images/images05.jpeg",
    description: "Try your luck at the vibrant and flashing slot machines.",
    badge: <FaCoins color="#FFD700" />,
    activityName: "Jackpot Adventure",
  },
  {
    imagePath: "/images/images06.jpeg",
    description: "Test your fortune at the dice tables and roll your way to riches.",
    badge: <FaHandHoldingUsd color="#4CAF50" />,
    activityName: "Roll for Riches",
  },
  {
    imagePath: "/images/images07.jpeg",
    description: "High-stakes Baccarat in an elegant, high-class setting.",
    badge: <FaGem color="#E91E63" />,
    activityName: "The Elite Game",
  },
  {
    imagePath: "/images/images03.jpeg",
    description: "Keno games with big prizes for those who choose wisely.",
    badge: <FaCrown color="#9C27B0" />,
    activityName: "Fortune Awaits",
  },
  {
    imagePath: "/images/images05.jpeg",
    description: "Chess meets strategy in a new casino-style game.",
    badge: <FaChess color="#3F51B5" />,
    activityName: "Chance Meets Skill",
  },
];


export const BREAKPOINTS = {
  xs: 100,
  sm: 599,
  lg: 1024,
  md: 1281,
  xl: 1600
};

export const getSwiperBreakpoints = () => {
  return {
    [BREAKPOINTS.xs]: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    [BREAKPOINTS.sm]: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    [BREAKPOINTS.md]: {
      slidesPerView: 5,
      spaceBetween: 12,
    },
    [BREAKPOINTS.lg]: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
    [BREAKPOINTS.xl]: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
  };
};
