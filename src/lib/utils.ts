import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { clampProps } from './constants'
import type { RcFile } from 'antd/es/upload'

// Generate groups dynamically
const groups = Object.fromEntries(
  clampProps.map((prop) => [
    `clamp-${prop}` as const,
    [{ clamp: [(v: string): boolean => v.startsWith(`[${prop},`)] }],
  ]),
) as Record<string, Array<{ clamp: Array<(v: string) => boolean> }>>

const twMerge = extendTailwindMerge<keyof typeof groups>({
  extend: {
    classGroups: groups,
  },
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const getBase64ForUpload = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

// Helper for file size formatting
type FileSizeUnit = 'bytes' | 'kb' | 'mb'

export const formatFileSize = (value: number, unit: FileSizeUnit = 'bytes') => {
  // Normalize to bytes first
  const bytes =
    unit === 'mb' ? value * 1024 * 1024 : unit === 'kb' ? value * 1024 : value

  if (bytes < 1024) {
    return `${bytes} B`
  }

  const kb = bytes / 1024
  if (kb < 1024) {
    return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`
  }

  const mb = kb / 1024
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
}
