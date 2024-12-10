'use client'
import { usePageTransition } from '@/core/Providers/PageTransitionProvider'

const SVGcircle = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="lightblue"
      fill="blue"
      strokeWidth="4"
    />
  </svg>
)

export default function TransitionIndicator() {
  const { isTransitioning } = usePageTransition()

  return <div>{isTransitioning && <SVGcircle />}</div>
}
