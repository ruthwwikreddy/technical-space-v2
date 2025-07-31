import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next'
  onNavigate: () => void
  className?: string
  disabled?: boolean
}

const CarouselButton = ({ 
  direction, 
  onNavigate, 
  className, 
  disabled = false,
  ...props 
}: CarouselButtonProps) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  const positionClass = direction === 'prev' ? 'left-4' : 'right-4'
  
  return (
    <button
      type="button"
      onClick={onNavigate}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors ${positionClass} ${className}`}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      {...props}
    >
      <Icon className="h-6 w-6" />
    </button>
  )
}

export const Carousel = ({ children, className, ...props }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [items, setItems] = React.useState<HTMLElement[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const updateItems = React.useCallback(() => {
    if (containerRef.current) {
      const children = Array.from(containerRef.current.children) as HTMLElement[]
      setItems(children)
    }
  }, [])
  
  React.useEffect(() => {
    updateItems()
    
    const observer = new MutationObserver(updateItems)
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true })
    }
    
    return () => observer.disconnect()
  }, [updateItems])
  
  const scrollToIndex = (index: number) => {
    if (items.length === 0) return
    
    let newIndex = index
    if (index < 0) newIndex = items.length - 1
    if (index >= items.length) newIndex = 0
    
    items[newIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    
    setCurrentIndex(newIndex)
  }
  
  const next = () => scrollToIndex(currentIndex + 1)
  const prev = () => scrollToIndex(currentIndex - 1)
  
  const canGoNext = currentIndex < items.length - 1
  const canGoPrev = currentIndex > 0
  
  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-full snap-center"
            data-index={index}
          >
            {child}
          </div>
        ))}
      </div>
      
      {items.length > 1 && (
        <>
          <CarouselButton 
            direction="prev" 
            onNavigate={prev} 
            disabled={!canGoPrev}
            className={!canGoPrev ? 'opacity-50 cursor-not-allowed' : ''}
          />
          <CarouselButton 
            direction="next" 
            onNavigate={next} 
            disabled={!canGoNext}
            className={!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}
          />
        </>
      )}
    </div>
  )
}

export const CarouselContent = ({ children, className, ...props }: CarouselContentProps) => {
  return (
    <div className={`relative ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CarouselItem = ({ children, className, ...props }: CarouselItemProps) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ scrollSnapAlign: 'center' }}
      {...props}
    >
      {children}
    </div>
  )
}

export const CarouselPrevious = ({ 
  className, 
  onClick, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors ${className}`}
      onClick={onClick}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  )
}

export const CarouselNext = ({ 
  className, 
  onClick, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors ${className}`}
      onClick={onClick}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  )
}
