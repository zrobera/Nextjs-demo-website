"use client"

import { useState, type ReactNode } from "react"
import { AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const toastVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

interface ToastProps {
  title: string
  description?: string
  variant?: "default" | "destructive"
  onClose?: () => void
}

const Toast = ({ title, description, variant = "default", onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={cn(
            "flex w-full max-w-xs items-center gap-3 rounded-lg bg-card p-4 shadow-md",
            variant === "destructive"
              ? "bg-destructive text-destructive-foreground"
              : "bg-primary text-primary-foreground",
          )}
          style={{ animation: "slide-up 0.3s ease-in-out" }}
        >
          <div className="flex-1">
            <p className="font-medium">{title}</p>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          <button onClick={handleClose} className="text-muted-foreground hover:text-muted">
            &times;
          </button>
        </div>
      )}
    </AnimatePresence>
  )
}

const ToastTitle = ({ children }: { children: ReactNode }) => (
  <p className="font-medium">{children}</p>
)

const ToastDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-muted-foreground">{children}</p>
)

const ToastClose = ({ onClose }: { onClose: () => void }) => (
  <button onClick={onClose} className="text-muted-foreground hover:text-muted">
    &times;
  </button>
)

const ToastViewport = () => (
  <div className="fixed bottom-0 right-0 p-4">
    {/* Toasts will be rendered here */}
  </div>
)

interface UseToastReturnType {
  toast: (props: ToastProps) => void
}

export function useToast(): UseToastReturnType {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])
  }

  return {
    toast,
  }
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast()
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const handleClose = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <AnimatePresence>
        {toasts.map((toastProps, index) => (
          <Toast key={index} {...toastProps} onClose={() => handleClose(index)} />
        ))}
      </AnimatePresence>
      {children}
    </div>
  )
}

export { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport }