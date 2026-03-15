import Image from "next/image"

export function LanguageIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/language-svgrepo-com.svg"
        alt="Language"
        width={24}
        height={24}
        className="w-full h-full"
      />
    </div>
  )
}
